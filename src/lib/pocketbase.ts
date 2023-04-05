import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pb = new PocketBase("https://db.oddharald.xyz");
export const currentUser = writable(pb.authStore.model);
