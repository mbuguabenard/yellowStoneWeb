
import type { SellerOffer } from "../types/marketplace";

export const offers: SellerOffer[] = [
  { id: "o1", productId: "p1", sellerId: "s1", priceKes: 850, inStock: true, delivery: "Nairobi in 2 days", storeUrl: "https://example.com/green-thumb/bougainvillea" },
  { id: "o2", productId: "p1", sellerId: "s2", priceKes: 780, inStock: true, delivery: "Nationwide in 4 days", storeUrl: "https://example.com/rift-valley/bougainvillea" },
  { id: "o3", productId: "p2", sellerId: "s1", priceKes: 450, inStock: true, delivery: "Nairobi in 2 days", storeUrl: "https://example.com/green-thumb/agapanthus" },
  { id: "o4", productId: "p2", sellerId: "s3", priceKes: 400, inStock: false, delivery: "Out of stock", storeUrl: "https://example.com/coast/agapanthus" },
  { id: "o5", productId: "p3", sellerId: "s2", priceKes: 600, inStock: true, delivery: "Nationwide in 4 days", storeUrl: "https://example.com/rift-valley/lavender" },
  { id: "o6", productId: "p3", sellerId: "s1", priceKes: 650, inStock: true, delivery: "Nairobi in 2 days", storeUrl: "https://example.com/green-thumb/lavender" },
  { id: "o7", productId: "p4", sellerId: "s1", priceKes: 2500, inStock: true, delivery: "Nairobi in 3 days", storeUrl: "https://example.com/green-thumb/jacaranda" },
  { id: "o8", productId: "p4", sellerId: "s2", priceKes: 2200, inStock: true, delivery: "Nationwide in 5 days", storeUrl: "https://example.com/rift-valley/jacaranda" },
  { id: "o9", productId: "p5", sellerId: "s1", priceKes: 3800, inStock: true, delivery: "Nairobi in 2 days", storeUrl: "https://example.com/green-thumb/sago-palm" },
  { id: "o10", productId: "p5", sellerId: "s3", priceKes: 3500, inStock: true, delivery: "Coast in 2 days", storeUrl: "https://example.com/coast/sago-palm" },
  { id: "o11", productId: "p6", sellerId: "s2", priceKes: 500, inStock: true, delivery: "Nationwide in 4 days", storeUrl: "https://example.com/rift-valley/fountain-grass" },
  { id: "o12", productId: "p6", sellerId: "s1", priceKes: 550, inStock: true, delivery: "Nairobi in 2 days", storeUrl: "https://example.com/green-thumb/fountain-grass" },
  { id: "o13", productId: "p7", sellerId: "s3", priceKes: 1200, inStock: true, delivery: "Coast in 2 days", storeUrl: "https://example.com/coast/river-pebbles" },
  { id: "o14", productId: "p7", sellerId: "s1", priceKes: 1400, inStock: true, delivery: "Nairobi in 2 days", storeUrl: "https://example.com/green-thumb/river-pebbles" },
  { id: "o15", productId: "p8", sellerId: "s3", priceKes: 2900, inStock: true, delivery: "Nationwide in 5 days", storeUrl: "https://example.com/coast/solar-path-lights" },
  { id: "o16", productId: "p8", sellerId: "s1", priceKes: 3200, inStock: true, delivery: "Nairobi in 2 days", storeUrl: "https://example.com/green-thumb/solar-path-lights" },
];