import { pb } from "$lib/pocketbase";

export async function load() {
  const products = await pb.collection("products").getFullList();
  return {
    products: structuredClone(products)
  }
}
