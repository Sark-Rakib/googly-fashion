import "dotenv/config";
import mongoose from "mongoose";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import Product from "../models/Product.js";
import Order from "../models/Order.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const categoryIds = {
  "T-Shirts": 1,
  Jeans: 2,
  Dresses: 3,
  Jackets: 4,
  Shoes: 5,
  Accessories: 6,
  Watches: 7,
  Beauty: 8,
  kids: 9,
  women: 10,
};

const seed = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI is not defined. Create a .env file first.");
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  const productsRaw = JSON.parse(
    readFileSync(join(__dirname, "../data/products.json"), "utf-8")
  );

  const seen = new Set();
  const products = [];
  for (const p of productsRaw) {
    const key = `${p.slug}_${p.category}`;
    if (seen.has(key)) continue;
    seen.add(key);

    products.push({
      name: p.name,
      slug: p.slug,
      description: p.description,
      price: p.price,
      compare_price: p.oldPrice || null,
      image: p.image,
      category_name: p.category,
      category_id: categoryIds[p.category] || 0,
      rating: p.rating || 0,
      review_count: Math.floor((p.rating || 4) * 8) + 2,
      stock: p.stock || 0,
      sizes: p.sizes || [],
      colors: p.colors || [],
      featured: p.featured || false,
      brand: p.brand || "",
      createdAt: p.createdAt || new Date(),
    });
  }

  await Product.deleteMany({});
  const inserted = await Product.insertMany(products);
  console.log(`Seeded ${inserted.length} products`);

  const ordersRaw = JSON.parse(
    readFileSync(join(__dirname, "../data/orders.json"), "utf-8")
  );

  await Order.deleteMany({});
  const insertedOrders = await Order.insertMany(ordersRaw);
  console.log(`Seeded ${insertedOrders.length} orders`);

  await mongoose.disconnect();
  console.log("Done. Disconnected from MongoDB.");
};

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
