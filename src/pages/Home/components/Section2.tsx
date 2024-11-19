import { Image } from "antd";
import { Link } from "react-router-dom";
import azithromycine from "assets/images/azithromycine.png";
import ProductCard from "components/ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

export default function Section2() {
  return (
    <section className="w-full max-w-[1512px] mt-10 mx-auto ">
      <div className="w-full max-w-[1512px]  px-6">
        <h3 className="w-4/6 text-black font-semibold text-3xl">Products</h3>
        {/* <Link to={"#"} className="text-base font-normal underline">
            See more
          </Link> */}

        <p className="sm:w-full mt-1 text-base font-normal ">
          Lorem Ipsum is simply dummy text of the printing and typese Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typese Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <Link
          to={"#"}
          className="w-4/6 text-base sm:w-full font-normal max-sm:mx-auto underline mt-5 flex justify-end "
        >
          See more
        </Link>
      </div>
      <div className="w-full flex gap-10 mt-9 flex-wrap items-start justify-around mx-auto px-3">
        <ProductCard
          src={azithromycine}
          title="Product one"
          desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ProductCard
          src={azithromycine}
          title="Product one"
          desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ProductCard
          src={azithromycine}
          title="Product one"
          desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ProductCard
          src={azithromycine}
          title="Product one"
          desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </section>
  );
}
