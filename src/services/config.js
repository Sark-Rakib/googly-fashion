import { BadgeCheck, Package, Shield, Headphones } from "lucide-react";

export const shopCategories = [
  { name: "All Categories", slug: "" },
  { name: "T-Shirts", slug: "t-shirts" },
  { name: "Jeans", slug: "jeans" },
  { name: "Dresses", slug: "dresses" },
  { name: "Jackets", slug: "jackets" },
  { name: "Shoes", slug: "shoes" },
  { name: "Accessories", slug: "accessories" },
];

export const homeCategories = [
  {
    name: "Men",
    slug: "men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400",
    price: "৳99",
  },
  {
    name: "Women",
    slug: "women",
    image: "https://images.unsplash.com/photo-1581044777550-4c0a6e0b1b3a?w=400",
    price: "৳79",
  },
  {
    name: "Kids",
    slug: "kids",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400",
    price: "৳49",
  },
  {
    name: "Beauty",
    slug: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
    price: "৳29",
  },
  {
    name: "Watches",
    slug: "watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
    price: "৳149",
  },
  {
    name: "Shoes",
    slug: "shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    price: "৳129",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400",
    price: "৳19",
  },
];

export const features = [
  { icon: BadgeCheck, title: "100% Authentic", subtitle: "Genuine Products" },
  { icon: Package, title: "Easy Returns", subtitle: "7 Days Return" },
  { icon: Shield, title: "Secure Payment", subtitle: "100% Secure" },
  { icon: Headphones, title: "Customer Support", subtitle: "24/7 Support" },
  { icon: BadgeCheck, title: "Best Price", subtitle: "Affordable Price" },
];

export const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
  { label: "Bestselling", value: "bestselling" },
];

export const quickPrices = [
  { label: "৳0 - ৳500", min: 0, max: 500 },
  { label: "৳500 - ৳1000", min: 500, max: 1000 },
  { label: "৳1000 - ৳2000", min: 1000, max: 2000 },
  { label: "৳2000 - ৳5000", min: 2000, max: 5000 },
];

export const DELIVERY_CHARGE = 60;

export const paymentMethods = [
  { value: "cod", label: "Cash on Delivery" },
  { value: "bkash", label: "bKash" },
  { value: "nagad", label: "Nagad" },
  { value: "bank", label: "Bank Transfer" },
];
