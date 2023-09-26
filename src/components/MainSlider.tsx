import { FC } from "react";

const MainSlider: FC = () => {
  return (
    <div className="w-full h-96 flex justify-center items-center bg-orange-200">
      <img
        src="/asset/main_img01.jpg"
        className="w-81 border-solid border-2 border-indigo-600 h-full
        "
      ></img>
    </div>
  );
};
export default MainSlider;
