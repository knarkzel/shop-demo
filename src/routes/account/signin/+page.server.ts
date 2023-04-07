import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ locals, request }) => {
    // Get form data
    const data = Object.fromEntries(await request.formData()) as {
      email: string;
      password: string;
    };

    try {
      // Login as user
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
