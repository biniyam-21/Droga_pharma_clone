import { Image } from "antd";
import { Link } from "react-router-dom";

interface IProps {
  src: string;
  desc: string;
  title: string;
}
export default function ProductCard({ desc, src, title }: IProps) {
  return (
    <Link
      to={"/products/details"}
      className="bg-white rounded-xl p-6 max-w-[308px]"
    >
      <div className="w-full bg-[#D9D9D9] flex items-center justify-center p-14 rounded-md">
        <Image preview={false} height={146} width={146} src={src} />
      </div>
      <div className="w-full mt-4 flex flex-col gap-y-2">
        <h5 className="text-black font-medium text-xl">{title}</h5>
        <p className="text-base font-normal text-[#59606C]">{desc}</p>
      </div>
    </Link>
  );
}
