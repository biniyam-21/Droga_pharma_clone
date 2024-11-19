import Rectangle from "assets/images/Rectangle.png";
import vision from "assets/images/vision.png";
import mission from "assets/images/mission.png";
import icon_h from "assets/icons/icon_h.png";
import icon_i from "assets/icons/icon_i.png";
import icon_c from "assets/icons/icon_c.png";
import icon_cc from "assets/icons/icon_cc.png";
import Trust from "assets/images/Trust.png";
import Logo from "assets/images/logo.png";
import ella from "assets/images/ella.png";
import image_3 from "assets/images/image_3.png";
import image_4 from "assets/images/image_4.png";
import image_5 from "assets/images/image_5.png";
import image_6 from "assets/images/image_6.png";
import image_7 from "assets/images/image_7.png";
import image_8 from "assets/images/image_8.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

export default function index() {
  return (
    <div className="w-full bg-aboutBg  pt-10 sm:pt-14">
      <div className="w-full max-w-[1512px] flex flex-col gap-y-10  mx-auto px-4 sm:px-6">
        <h1 className="text-center font-medium text-6xl max-md:text-4xl leading-10">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row mx-auto gap-x-16">
          <img
            className="w-[428px] h-[396px] max-md:mx-auto"
            src={Rectangle}
            alt=""
          />
          <div className="flex flex-col gap-2 w-full max-sm:px-6">
            <h1 className="text-left font-medium text-5xl max-md:text-4xl max-md:mx-auto leading-10">
              well come
            </h1>
            <p className="w-full max-w-[534px] text-grayText flex text-base  items-baseline">
              Mela Books Pvt.Ltd.Co was established in April 2015 by a group of
              healthcare professionals, who have rich business experience in the
              pharmaceutical, Research, Manufacturing sector. We are working in
              the pharmaceuticals import, wholesale and retail business,
              targeting the public as well as the private health sector of
              Ethiopia. Apart from the import business, our wholesale division
              is also working to serve the health care facility and
              organizations that need pharmaceuticals and healthcare products.
              Mela Books PLC staffed with a highly qualified and dedicated 246+
              employee. We believe in our staff and our commitment to benefit
              our customers; that is what builds our company. Our annual sales
              is more than 25 million USD for the private market and also we won
              more than 60 Million USD in government tenders through our partner
              manufacturer.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-lighter-gray w-full mt-10 pb-16 flex flex-col text-center gap-y-4">
        <h1 className="text-center text-5xl max-md:text-4xl leading-10 pt-6">
          Mission & Vision
        </h1>
        <div className="flex max-w-[742px] flex-col justify-center items-center  mx-auto gap-y-2">
          <div className="w-full max-md:flex-col flex justify-center items-center gap-x-4 mx-auto">
            <div className="flex flex-col w-36 px-2  justify-center items-center">
              <img className="w-20" src={vision} alt="" />
              <h1 className="text-center text-34 leading-10">vision</h1>
            </div>
            <p className="text-left px-6 text-grayText">
              To be the leading group company in Ethiopia that creates health
              and wealth for human being.
            </p>
          </div>
          <div className="w-full max-md:flex-col flex justify-center items-center  gap-x-4">
            <div className="flex flex-col w-32 justify-center items-center">
              <img className="w-20" src={mission} alt="" />
              <h1 className="text-center text-32 leading-10">mission</h1>
            </div>
            <p className="text-left px-6 text-grayText pb-3">
              We build ethical companies that provide quality products and
              services by our talented and motivated members to serve humanity
              and contribute to the socio economic development of the nation.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex gap-11 mt-9 flex-wrap items-center justify-center"> */}

      <div className="bg-aboutBg w-full mx-auto mt-10 pb-16 flex flex-col text-center gap-y-4">
        <h1 className="text-center text-5xl max-md:text-4xl leading-10 pt-6">
          Our values
        </h1>
        <div className="w-full max-w-[1512px] mx-auto flex flex-wrap gap-x-36 gap-y-5 items-center justify-around">
          <div className="flex w-[484px] flex-col px-6 justify-center items-center">
            <img src={icon_h} alt="" />
            <h3 className="text-2xl capitalize">Humanity</h3>
            <p className="text-base text-grayText">
              We operate in the industry where human live is crucial. In each
              and every steps of our service we give special attention on the
              quality of our products that will be used in the diagnosis and
              treatment of the human life. Outmost in our company we respect
              human being irrespective of any status and identity.
            </p>
          </div>
          <div className="flex w-[484px] flex-col px-6 justify-center items-center">
            <img src={icon_c} alt="" />
            <h3 className="text-2xl capitalize">Integrity</h3>
            <p className="text-base text-grayText">
              We operate in the industry where human live is crucial. In each
              and every steps of our service we give special attention on the
              quality of our products that will be used in the diagnosis and
              treatment of the human life. Outmost in our company we respect
              human being irrespective of any status and identity.
            </p>
          </div>
          <div className="flex w-[484px] flex-col px-6 justify-center items-center">
            <img src={icon_i} alt="" />
            <h3 className="text-2xl capitalize">Commitment</h3>
            <p className="text-base text-grayText">
              We operate in the industry where human live is crucial. In each
              and every steps of our service we give special attention on the
              quality of our products that will be used in the diagnosis and
              treatment of the human life. Outmost in our company we respect
              human being irrespective of any status and identity.
            </p>
          </div>
          <div className="flex w-[484px] flex-col px-6 justify-center items-center">
            <img src={icon_cc} alt="" />
            <h3 className="text-2xl capitalize">Customer Centric</h3>
            <p className="text-base text-grayText">
              We operate in the industry where human live is crucial. In each
              and every steps of our service we give special attention on the
              quality of our products that will be used in the diagnosis and
              treatment of the human life. Outmost in our company we respect
              human being irrespective of any status and identity.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full mx-auto mt-10 pb-16 flex flex-col text-center gap-y-4">
        <h1 className="text-center text-6xl font-medium max-md:text-5xl leading-10 pt-6">
          Mela Books Group Companies
        </h1>
        <div className="w-full flex flex-wrap gap-x-20 gap-y-4 mt-4 items-center justify-center">
          <img src={Trust} alt="" />
          <img height={120} width={120} src={Logo} alt="" />
          <img src={ella} alt="" />
        </div>
        <h1 className="text-center text-6xl max-md:text-5xl font-medium leading-10 pt-20">
          Our Partners
        </h1>
        <div className="flex flex-wrap w-full items-center justify-center gap-14 mx-auto px-4  pt-8">
          {/* <img src={image_3} alt="" />
          <img src={image_4} alt="" />
          <img src={image_5} alt="" />
          <img src={image_6} alt="" />
          <img src={image_7} alt="" />
          <img src={image_8} alt="" /> */}

          <Splide
            options={{
              type: "loop",
              perPage: 4,
              autoWidth: true,
              gap: "32px",
              autoplay: true,
              focus: "center",
              perMove: 1,
              drag: "free",
              breakpoints: {
                600: {
                  perPage: 2,
                  height: "6rem",
                },
                autoScroll: {
                  speed: 1,
                },
              },
            }}
            className="w-full items-center mx-auto"
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img className="items-center" src={image_3} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img className="items-center" src={image_4} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img className="items-center" src={image_5} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img className="items-center" src={image_6} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img className="items-center" src={image_7} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img className="items-center" src={image_8} alt="" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}
