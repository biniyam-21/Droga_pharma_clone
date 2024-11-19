import { Link } from "react-router-dom";
import newsImage from "assets/images/news.jpg";
import { Image } from "antd";

interface IProps {
  desc: string;
  category: string;
  date: string;
  title: string;
  src: string;
}

export default function NewsCard({ category, date, desc, title, src }: IProps) {
  return (
    <Link
      to={"/news/details"}
      className="w-full max-w-[374px] h-[308px] shadow-md border border-cardYellow rounded-lg overflow-clip"
    >
      <Image
        src={src}
        height={154}
        className="w-full"
        width={"100%"}
        preview={false}
      />
      <div className="flex flex-col h-full w-full px-6 py-3 pb-5 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-black font-medium opacity-50 text-xs">
            {category}
          </p>
          <p className="text-black font-normal text-xs opacity-50">{date}</p>
        </div>
        <h6 className="text-black font-semibold text-xs tracking-widest">
          {title}
        </h6>

        <p className="text-base font-light text-black">{desc}</p>
      </div>
    </Link>
  );
}
