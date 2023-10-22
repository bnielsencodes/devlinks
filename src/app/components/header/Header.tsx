import Image from "next/image";
import logoLarge from "/public/assets/images/logo-devlinks-large.svg";

export default function Header() {
  return (
    <>
      <header className="mb-16">
        <Image
          src={logoLarge}
          alt="devlinks logo"
          width="0"
          height="0"
          sizes="100vw"
        />
      </header>
    </>
  );
}
