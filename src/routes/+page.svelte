<script lang="ts">
  import { SignIn, SignOut } from "@auth/sveltekit/components";
  import { page } from "$app/stores";
  import { remult } from "remult";
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
  $: remult.user = data.user;
</script>

<h1>SvelteKit Auth Example</h1>
<div>
  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <img
        src={$page.data.session?.user.image}
        class="avatar"
        alt="User Avatar"
      />
    {/if}
    <br />
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>
    <SignOut>
      <div slot="submitButton" class="buttonPrimary">Sign out</div>
    </SignOut>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <SignIn>
      <div slot="submitButton" class="buttonPrimary">Sign in with GitHub</div>
    </SignIn>
  {/if}
</div>

<h3>session</h3>
<pre>{JSON.stringify($page.data.session, null, 2)}</pre>

<h3>remult.user</h3>
<pre>{JSON.stringify(remult.user, null, 2)}</pre>

<style>
  .avatar {
    width: 100px;
    border-radius: 50%;
    border: black solid 3px;
    margin-right: 1rem;
  }
</style>
