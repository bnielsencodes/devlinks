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
        // // no social login options
        // providers={[]}
        // social login options
        providers={["github", "google"]}
        redirectTo="http://localhost:3000/auth/callback"
        showLinks={false}
        // when showLinks, add custom input labels
        localization={{
          variables: {
            magic_link: {
              email_input_placeholder: "e.g. alex@email.com",
            },
            sign_in: {
              social_provider_text: "Log in with {{provider}}",
              // email_label: "Email address",
              // email_input_placeholder: "e.g. alex@email.com",
              // password_label: "Password",
              // password_input_placeholder: "Enter your password",
              // button_label: "Login",
            },
            // sign_up: {
            //   email_label: "",
            //   email_input_placeholder: "",
            //   password_label: "Create password",
            //   password_input_placeholder: "",
            //   button_label: "Login",
            // },
          },
        }}
      />
    </>
  );
}
