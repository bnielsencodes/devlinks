import Image from "next/image";
import iconLink from "/public/assets/images/icon-link.svg";

export default function LinksButton(props: any) {
  return (
    <button className="flex items-center justify-center w-[74px] h-[42px] rounded-lg">
      <Image
        src={iconLink}
        alt="link icon"
        width="0"
        height="0"
        sizes="100vw"
      />
      {props.windowWidth >= 768 ? "Links" : null}
    </button>
  );
}
