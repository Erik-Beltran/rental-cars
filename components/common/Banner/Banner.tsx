import Image from "next/image";
import { BannerProps } from "./Banner.types";
import Reveal from "../Reveal/Reveal";

export default function Banner(props: BannerProps) {
  const { description, img, title } = props;
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <Reveal className="p-6 lg:pl-40 " position="bottom">
        <h1 className="text-6xl md:text-4xl lg:text-8xl font-bold">{title}</h1>
        <p>{description}</p>
      </Reveal>
      {img && (
        <Reveal className="flex justify-end" position="right">
          <Image
            alt={title ?? ""}
            src={img}
            width={800}
            height={800}
            priority
          />
        </Reveal>
      )}
    </div>
  );
}
