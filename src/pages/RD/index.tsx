import AccordionUsage from "./Components/Accordions";

export default function index() {
  return (
    <div className="w-full bg-white pt-7 mx-auto px-4 sm:px-6 border-b-cardYellow border-b-2">
      <div className="w-full flex flex-col  items-center justify-center mx-auto gap-5">
        <h1 className="text-center font-normal text-4xl max-md:text-3xl ">
          Mela Books research and development
        </h1>
        <p className="max-w-[766px] text-base px-5 mx-auto">
          The research and development departments of Mela Books was established
          in 2021 G.C with the aim of providing a state of the art research
          facility. The unit is currently focused on development and research on
          two wings: Pharmaceuticals and Nutraceuticals /Food supplements. The
          unit has experienced professionals providing services and conducting
          research and development both for the company and for pharmaceutical
          companies all over the globe.
        </p>
        <h1 className="text-center uppercase font-normal text-4xl max-md:text-3xl">
          Mela RESEARCH GRANT
        </h1>
        <div className="max-w-[1148px] w-full h-auto pb-28">
          <AccordionUsage />
        </div>
      </div>
    </div>
  );
}
