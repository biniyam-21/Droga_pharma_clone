import newsImage from "assets/images/news.jpg";
import NewsCard from "components/NewsCard";
import { Pagination } from "antd";
// import Pagination from "@mui/material/Pagination";

export default function index() {
  return (
    <div className="w-full max-w-[1512px] mx-auto border-b-cardYellow border-b-2">
      <div className="w-full bg-lighter-gray pt-10 sm:pt-16 mx-auto px-4 sm:px-6">
        <h1 className="text-center font-medium text-32 leading-10">News</h1>
        <div className="w-full flex gap-11 mt-5 flex-wrap items-center justify-around">
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
        <div className="flex items-center  justify-center gap-x-12 mt-40 mb-[77px]">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}
