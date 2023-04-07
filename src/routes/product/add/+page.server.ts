import { pb } from "$lib/pocketbase";
import { stripe } from "$lib/server/stripe";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    // Get form data
    const {title, price, cover} = Object.fromEntries(await request.formData()) as {
      title: string;
      price: number;
      cover: File;
    };
    
    try {
      // Upload image to PocketBase
      const formData = new FormData();
      formData.append("image", cover);
      const { id, collectionId, image } = await pb.collection("products").create(formData);
      const url = `https://db.oddharald.xyz/api/files/${collectionId}/${id}/${image}`;
      
      // Create new producd with stripe
      await stripe.products.create({
        name: title,
        images: [url],
        default_price_data: {
          currency: "usd",
          unit_amount_decimal: price
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
    throw redirect(303, "/");
  },
};
