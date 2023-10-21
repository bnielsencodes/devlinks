"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./database.types";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{
        theme: ThemeSupa,
      }}
      theme="light"
      redirectTo="http://localhost:3000/auth/callback"
      showLinks={false}
      localization={{
        variables: {
          magic_link: {
            email_input_placeholder: "e.g. alex@email.com",
          },
      }}
    />
  );
}
