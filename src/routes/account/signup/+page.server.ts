import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ locals, request }) => {
    // Get form data
    const data = Object.fromEntries(await request.formData()) as {
      email: string;
      password: string;
      confirmPassword: string;
    };

    try {
      // Create user then login
      await locals.pb.collection("users").create(data);
      await locals.pb
        .collection("users")
        .authWithPassword(data.email, data.password);
    } catch (error) {
      console.error(error);
      throw error;
    }
    throw redirect(303, "/");
  },
};
