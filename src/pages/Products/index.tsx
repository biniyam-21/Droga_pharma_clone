import azithromycine from "assets/images/azithromycine.png";
import aspirin from "assets/images/aspirin.png";
import ProductCard from "components/ProductCard";
import { Pagination } from "antd";

export default function index() {
  // const [current, setCurrent] = useState(3);
  return (
    <div className="w-full max-w-[1512px] mx-auto border-b-cardYellow border-b-2">
      <div className="w-full bg-lighter-gray pt-10 sm:pt-16 mx-auto px-4 sm:px-6">
        <h1 className="text-center font-medium text-32 leading-10">Products</h1>
        <div className="w-full flex gap-10 mt-5 flex-wrap items-center justify-around">
          <ProductCard
            src={azithromycine}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={aspirin}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={azithromycine}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={aspirin}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={azithromycine}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={aspirin}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={azithromycine}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={aspirin}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={azithromycine}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={aspirin}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={azithromycine}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={aspirin}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={azithromycine}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={aspirin}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={azithromycine}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ProductCard
            src={aspirin}
            title="Product one"
            desc="Lorem Ipsum is simply dummy text of the printing and typese Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
        <div className="flex items-center  justify-center gap-x-12 mt-40 mb-[77px]">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}
