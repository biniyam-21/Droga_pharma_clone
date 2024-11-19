import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/icon2.png";
import icon3 from "../../../assets/icons/icon3.png";

function Section3() {
  return (
    <section className="bg-colorGray w-full mx-auto max-w-[1512px] mt-20 pb-16 px-5 flex flex-col text-center gap-y-4 border-b-cardYellow border-b-2">
      <h5 className="text-black pb-2 mx-auto inline-block font-medium text-2xl mt-4 border-b-cardYellow  border-b-2">
        Mela Books Facts
      </h5>
      <h3 className=" font-medium text-34 leading-10">Industry achievements</h3>
      <div className="w-full  mx-auto flex gap-y-10 gap-x-40 py-5 px-8 mt-9 flex-wrap  justify-around">
        <div className="relative flex w-[300px]  h-[153px] rounded-md bg-cardYellow">
          <div className="absolute top-7 -left-[50px] flex items-center justify-center rounded-full w-24 h-24 bg-black">
            <img width={35} height={35} src={icon1} alt="" />
          </div>
          <div className=" relative flex flex-col justify-center ml-[72px] text-left">
            <h2 className="font-bold text-4xl">10+</h2>
            <h4 className="text-xl">Chain pharmacies </h4>
          </div>
        </div>
        <div className="relative flex w-[300px] h-[153px] rounded-md bg-cardYellow">
          <div className="absolute top-7 -left-[50px] flex items-center justify-center rounded-full w-24 h-24 bg-black">
            <img width={35} height={35} src={icon2} alt="" />
          </div>
          <div className=" relative flex flex-col justify-center ml-[72px] text-left">
            <h2 className="font-bold text-4xl">200+</h2>
            <h4 className="text-xl">Products fabricated </h4>
          </div>
        </div>
        <div className="relative flex w-[300px] h-[153px] rounded-md bg-cardYellow">
          <div className="absolute top-7 -left-[50px] flex items-center justify-center rounded-full w-24 h-24 bg-black">
            <img width={35} height={35} src={icon3} alt="" />
          </div>
          <div className=" relative flex flex-col justify-center ml-[72px] text-left">
            <h2 className="font-bold text-4xl">4B</h2>
            <h4 className="text-xl">Annual Transaction </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
