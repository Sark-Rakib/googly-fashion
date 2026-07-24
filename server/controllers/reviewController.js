import Review from "../models/Review.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

export const getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ product_id: req.params.productId })
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const { product_id, rating, comment, user_name } = req.body;

    if (!product_id || !rating || !user_name) {
      return res.status(400).json({ error: "Product ID, rating, and name are required" });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const review = await Review.create({
      product_id,
      user_id: req.user?.id || null,
      user_name,
      rating,
      comment: comment || "",
    });

    const stats = await Review.aggregate([
      { $match: { product_id: product._id } },
      { $group: { _id: null, avg: { $avg: "$rating" }, count: { $sum: 1 } } },
    ]);

    if (stats.length > 0) {
      product.rating = Math.round(stats[0].avg * 10) / 10;
      product.review_count = stats[0].count;
    } else {
      product.rating = 0;
      product.review_count = 0;
    }
    await product.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({
      _id: req.params.id,
      user_id: req.user.id,
    });
    if (!review) return res.status(404).json({ error: "Review not found" });

    const product = await Product.findById(review.product_id);
    if (product) {
      const stats = await Review.aggregate([
        { $match: { product_id: product._id } },
        { $group: { _id: null, avg: { $avg: "$rating" }, count: { $sum: 1 } } },
      ]);
      if (stats.length > 0) {
        product.rating = Math.round(stats[0].avg * 10) / 10;
        product.review_count = stats[0].count;
      } else {
        product.rating = 0;
        product.review_count = 0;
      }
      await product.save();
    }

    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
