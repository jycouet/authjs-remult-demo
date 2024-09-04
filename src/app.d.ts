// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

declare module "@auth/sveltekit" {
  interface Session {
    user: UserInfo & DefaultSession["user"];
  }
}

declare module "remult" {
  export interface UserInfo {
    email: string;
    image: string | null | undefined;
  }
}

export {};
