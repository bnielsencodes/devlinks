import Image from "next/image";
import iconPreview from "/public/assets/images/icon-preview-header.svg";

export default function PreviewButton(props: any) {
  return (
    <button className="flex items-center justify-center w-[52px] h-[42px] border-[1px] border-primary-100 rounded-lg hover:bg-primary-300">
      {props.windowWidth < 768 ? (
        <Image
          src={iconPreview}
          alt="eye icon"
          width="0"
          height="0"
          sizes="100vw"
        />
      ) : (
        "Preview"
      )}
    </button>
  );
}
