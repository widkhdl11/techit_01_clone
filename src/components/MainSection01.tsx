import { FC } from "react";
import ProductForm from "./ProductForm";

const MainSection01: FC = () => {
  return (
    <section className="mt-20 flex flex-col items-center">
      <div className="w-9/12 block mt-10">
        <span className="block">KDT 테킷 스쿨 알아보기</span>
        <span className="block">
          전액 지원받고 기초부터 심화까지 한 큐에 성장
        </span>
        <span className="block">
          체계적인 커리큘럼을 가진 스쿨들을 만나보세요!
        </span>
      </div>
      <ul className="w-9/12 mt-10">
        <div className="grid w-full grid-cols-4 gap-x-4 gap-y-6">
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
          <ProductForm />
        </div>
      </ul>
    </section>
  );
};
export default MainSection01;
