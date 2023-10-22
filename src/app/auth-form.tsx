"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./database.types";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <>
      <Auth
        supabaseClient={supabase}
        // show magic link sign-in option
        view="magic_link"
        appearance={{
          theme: ThemeSupa,
          style: {
            divider: {
              background: "#d9d9d9",
            },
          },
        }}
        theme="light"
        // social login options
        providers={["github", "google"]}
        redirectTo="http://localhost:3000/auth/callback"
        // hide anchor links
        showLinks={false}
        // custom labels
        localization={{
          variables: {
            magic_link: {
              email_input_placeholder: "e.g. alex@email.com",
            },
            sign_in: {
              social_provider_text: "Log in with {{provider}}",
            },
          },
        }}
      />
    </>
  );
}
