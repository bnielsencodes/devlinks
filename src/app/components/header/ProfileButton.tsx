import Image from "next/image";
import iconProfile from "/public/assets/images/icon-profile-details-header.svg";

export default function ProfileButton(props: any) {
  return (
    <button className="flex items-center justify-center w-[74px] h-[42px] rounded-lg">
      <Image
        src={iconProfile}
        alt="profile avatar icon"
        width="0"
        height="0"
        sizes="100vw"
      />
      {props.windowWidth >= 768 ? "Profile Details" : null}
    </button>
  );
}
