declare namespace App {
  interface Locals {
    pb: import("pocketbase").default;
    user: import("pocketbase").default["authStore"]["model"];
  }
}
