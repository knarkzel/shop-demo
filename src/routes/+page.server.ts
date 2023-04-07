import { stripe } from "$lib/server/stripe";

export async function load() {
  const products = await stripe.products.list({
    expand: ["data.default_price"]
  });
  return {
    products: products.data
  }
}
