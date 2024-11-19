import { Carousel } from "antd";
import styled from "styled-components";

const CarouselWrapper = styled(Carousel)`
  position: relative;

  > .slick-dots {
    position: absolute;
    width: auto;
    left: -80%;
    bottom: 10px;
    z-index: 1;
  }
  @media (width <= 950px) {
    > .slick-dots {
      position: absolute;
      /* width: auto; */
      left: 0;
      bottom: 10px;
      z-index: 1;
    }
  }
  > .slick-dots li button {
    margin: 0 10px;
    width: 8px;
    height: 8px;
    background: #ccc;
    transition: 0.5s ease;
  }

  > .slick-dots li.slick-active button {
    margin: 0 2px;
    margin-right: 5px;
    width: 35px;
    height: 8px;
    background: #fc0;
    z-index: 1;
  }
`;

function Section1() {
  return (
    <section className="w-full pb-9">
      <CarouselWrapper
        fade
        autoplay
        className="relative w-full mx-auto max-w-[1512px] "
      >
        <Component
          bg1="bg-sendMoney"
          bg2="bg-airtime"
          bg3="bg-billPayment"
          descriptions={
            "At the heart of our company lies a passion for innovation and cutting-edge research. We constantly push the boundaries of medical science to develop breakthrough treatments and therapies that address critical health challenges. Through rigorous scientific exploration and collaboration with healthcare professionals, we strive to bring new hope to patients and improve their quality of life."
          }
          text={"sendMoney"}
        />
        <Component
          bg3="bg-sendMoney"
          bg1="bg-airtime"
          bg2="bg-billPayment"
          descriptions={
            "Our pharmaceutical company is dedicated to empowering health and transforming lives through innovative and life-changing medical solutions. We are driven by our commitment to improving the well-being of individuals and communities worldwide."
          }
          text={"sendAirtime"}
        />
        <Component
          bg2="bg-sendMoney"
          bg3="bg-airtime"
          bg1="bg-billPayment"
          descriptions={
            "Through our tireless efforts, we aim to be a catalyst for meaningful change in healthcare. We are driven by a vision of a healthier future, where our innovative solutions transform lives and empower individuals to live their best, most fulfilling lives."
          }
          text={"payBills"}
        />
      </CarouselWrapper>
    </section>
  );
}

export default Section1;

interface IProps {
  descriptions: string;
  text: string;
  bg1: string;
  bg2: string;
  bg3: string;
}

function Component({ bg1, bg2, bg3, descriptions, text }: IProps) {
  return (
    <div className="w-full flex flex-col gap-y-8 md:flex-row items-center gap-x-3 px-5 ">
      <div className="flex flex-col max-sm:items-center gap-6 text-center sm:text-start">
        <div className="flex flex-col gap-2">
          <h6 className="text-lg md:text-32 leading-10 font-semibold text-primary">
            experience
          </h6>
          <h1 className="md:text-56 text-28 leading-none text-secondary font-semibold">
            Science-driven solutions for better health
          </h1>
        </div>
        <div className="w-full sm:pb-10">
          <div
            className="flex flex-col max-sm:items-center gap-6 text-center sm:text-start"
            style={{ display: "flex !important" }}
          >
            <p className="text-lg font-normal text-black font-source-sans-pro sm:text-base md:text-lg">
              {descriptions}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between lg:gap-x-11 md:gap-x-7 gap-x-6 max-md:w-full max-md:pb-20">
        <div className="relative max-md:w-full max-md:max-w-[168px]">
          <div className="xl:w-292 md:w-[182px] w-full max-md:max-w-[152px] border-6 border-secondary h-[229px] md:h-[274px] xl:h-[438px] absolute top-0 left-0"></div>
          <div
            className={`animate__animated animate__fadeIn relative mt-3 md:mt-4 xl:mt-6 ml-3 md:ml-4 xl:ml-6 rounded-10 xl:w-305 md:w-[190px] w-full max-md:max-w-[159px] h-[292px] md:h-[348px] xl:h-[557.837px] ${bg1} bg-center bg-cover bg-no-repeat`}
          ></div>
        </div>
        <div className="relative flex flex-col gap-y-8 md:gap-y-38 max-md:w-full max-md:max-w-[140px]">
          <div
            className={`animate__animated animate__fadeIn rounded-10 lg:w-256 xl:w-184 md:w-[160px] w-full max-md:max-w-[134px] h-[168px] md:h-[200px]  xl:h-[321px] ${bg2} bg-cover bg-center`}
          ></div>
          <div className="relative">
            <div
              className={`animate__animated animate__fadeIn absolute top-0 left-0 rounded-10 lg:w-256 xl:w-184 md:w-[160px] w-full max-md:max-w-[134px] h-[106px] md:h-[126px] xl:h-[202px] ${bg3} bg-cover bg-center`}
            ></div>
            <div className="max-md:hidden lg:w-233 xl:w-161 md:w-[145px] h-162 md:h-[101px] xl:h-[162px] border-6 border-primary mt-11 lg:mt-16 ml-8 lg:ml-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
