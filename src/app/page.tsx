import Image from "next/image";
import logoLarge from "/public/assets/images/logo-devlinks-large.svg";
import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="p-8">
      <header className="mb-16">
        <Image
          src={logoLarge}
          alt="devlinks logo"
          width="0"
          height="0"
          sizes="100vw"
        />
      </header>
      <div className="mb-8">
        <h1 className="mb-2 text-neutral-100 text-2xl font-bold leading-9">
          Login
        </h1>
        <p className="text-neutral-200 font-light">
          If this is your first time logging in, an account will be created for
          you
        </p>
      </div>
      <div className="">
        <AuthForm />
      </div>
    </div>
  );
}
