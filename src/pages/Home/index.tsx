import { Link } from "react-router-dom";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import newsImage from "assets/images/news.jpg";
import { Image } from "antd";
import Section3 from "./components/Section3";

export default function Home() {
  return (
    <div className="w-full ">
      <Section1 />
      <Section2 />
      <section className="w-full mt-16">
        <h1 className="text-center font-semibold text-3xl">News</h1>
        <div className="w-full max-w-[1512px] mx-auto flex gap-8 px-5 mt-9 flex-wrap items-center justify-around">
          <NewsCard
            src={newsImage}
            title="The 400 Blows"
            date="Jun 20,2023"
            category="category"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
          <NewsCard
            src={newsImage}
            title="The 400 Blows"
            date="Jun 20,2023"
            category="category"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
          <NewsCard
            src={newsImage}
            title="The 400 Blows"
            date="Jun 20,2023"
            category="category"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
          <NewsCard
            src={newsImage}
            title="The 400 Blows"
            date="Jun 20,2023"
            category="category"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
          <NewsCard
            src={newsImage}
            title="The 400 Blows"
            date="Jun 20,2023"
            category="category"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
          <NewsCard
            src={newsImage}
            title="The 400 Blows"
            date="Jun 20,2023"
            category="category"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          />
        </div>
        <div className="w-full flex items-center justify-center gap-x-12 mt-12">
          <button className="outline-none font-medium text-xl hover:bg-gray-200 px-3 py-1 rounded-md">
            « Previous
          </button>
          <button className="outline-none font-medium text-xl hover:bg-gray-200 px-3 py-1 rounded-md">
            Next »
          </button>
        </div>
      </section>
      <Section3 />
    </div>
  );
}

interface IProps {
  desc: string;
  category: string;
  date: string;
  title: string;
  src: string;
}

function NewsCard({ category, date, desc, title, src }: IProps) {
  return (
    <Link
      to={"#"}
      className="w-full max-w-[374px] shadow-md rounded-lg overflow-clip"
    >
      <Image
        src={src}
        height={154}
        className="w-full"
        width={"100%"}
        preview={false}
      />
      <div className="w-full px-7 py-5">
        <div className="w-full flex items-center justify-between">
          <h6 className="text-black font-semibold text-xl">{title}</h6>
          <p className="text-black font-normal text-xs opacity-50">{date}</p>
        </div>
        <p className="text-black font-semibold opacity-50 text-xs">
          {category}
        </p>
        <p className="text-base font-normal text-black mt-3">{desc}</p>
      </div>
    </Link>
  );
}
