import azithromycine from "assets/images/azithromycine.png";
import { NavLink } from "react-router-dom";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import newsImage from "assets/images/news.jpg";
import NewsCard from "components/NewsCard";

function index() {
  return (
    <div className="w-full bg-lighter-gray pt-10 sm:pt-14 border-b-cardYellow border-b-2">
      <div className="w-full flex flex-col gap-y-10 max-w-1246 mx-auto px-4 sm:px-6">
        <h1 className="text-center capitalize font-medium text-3xl leading-10">
          News details
        </h1>
        <div className="flex max-md:flex-col-reverse mx-auto gap-y-3 gap-x-16">
          <div className="bg-white rounded-xl w-[470px] h-[360px]">
            <div className="max-w-[470px] mt-4 flex flex-col">
              <p> </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-[590px] justify-center items-start">
            <h1 className="text-left text-4xl leading-10">News Title</h1>
            <div className="flex gap-6"></div>
            <p className="text-xs w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        <div className="flex justify-start pl-8">
          <h1 className="text-left capitalize font-medium text-4xl leading-10">
            Related Products
          </h1>
        </div>
        <div className="flex flex-col gap-y-10 max-w-1246 w-full justify-center items-center pb-40 px-4 sm:px-6">
          <div className="flex max-md:flex-col gap-8">
            <NewsCard
              src={newsImage}
              title="The 400 Blows"
              date="Jun 20,2023"
              category="category"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            />{" "}
            <NewsCard
              src={newsImage}
              title="The 400 Blows"
              date="Jun 20,2023"
              category="category"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            />{" "}
            <NewsCard
              src={newsImage}
              title="The 400 Blows"
              date="Jun 20,2023"
              category="category"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

interface IProps {
  src: string;
  desc: string;
  title: string;
}
function ProductCardDetail({ desc, src, title }: IProps) {
  return (
    <div className="bg-white rounded-xl p-6 max-w-[308px]">
      <div className="w-full bg-[#D9D9D9] flex items-center justify-center p-14 rounded-md">
        {/* <img height={146} width={146} src={""} /> */}
        <div className="h-[146px] w-[146px]"></div>
      </div>
      <div className="w-full mt-4 flex flex-col gap-y-2">
        <h5 className="text-black font-medium text-xl">{title}</h5>
        <p className="text-base font-normal text-[#59606C]">{desc}</p>
      </div>
    </div>
  );
}
