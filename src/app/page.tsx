import Image from "next/image";
import iconEmail from "/public/assets/images/icon-email.svg";
import Header from "./components/header/Header";
import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="p-8">
      <Header />
      <div className="mb-8">
        <h1 className="mb-2 text-neutral-100 text-2xl font-bold leading-9">
          Login
        </h1>
        <p className="text-neutral-200 font-light">
          If this is your first time logging in, an account will be created for
          you
        </p>
      </div>
      <div className="relative">
        <AuthForm />
        {/* email icon */}
        <Image
          className="absolute top-[135px] left-4"
          src={iconEmail}
          alt="email icon"
          width="0"
          height="0"
          sizes="100vw"
        />
        {/* "or text in form divider" */}
        <p className="absolute top-[69px] left-0 flex justify-center w-full">
          <span className="w-5 bg-neutral-500 text-neutral-200 text-sm text-center text-opacity-60">
            or
          </span>
        </p>
      </div>
    </div>
  );
}
