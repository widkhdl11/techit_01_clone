import { FC } from "react";

const MainSection03: FC = () => {
  return (
    <section className="flex flex-col h-96">
      <div className="flex flex-col">
        <span className="text-yellow-500">테킷 스쿨 일정 확인하기</span>
        <span className="text-2xl">한 눈에 보는 테킷 스쿨 오픈 일정</span>
      </div>
      <div className="">
        <button className="hover:text-yellow-500 hover:underline hover:underline-offset-8 p-5">
          클래스별
        </button>
        <button className="hover:text-yellow-500 hover:underline hover:underline-offset-8  p-5">
          월별로 보기
        </button>
      </div>
      <div className="bg-gray-200 rounded-xl w-11/12 m-auto h-96">
        <div className="m-3 font-bold">
          <p>관심있는 클래스를 선택해주세요.</p>
        </div>
        <div className="grid grid-cols-8  m-3 mt-7 bg-white h-[50%] rounded-2xl border-trueGray-300 gap-4">
          <button className="rounded-md border border-trueGray-300">
            프론트엔드
          </button>
          <button className="rounded-md border border-trueGray-300 py-1">
            백엔드
          </button>
          <button>앱스쿨 : IOS</button>
          <button>AI 스쿨</button>
          <button>앱스쿨 : Android</button>
          <button>데이터 분석</button>
          <button>디자인</button>
          <button>블록체인</button>
          <button>스타트업 스테이션</button>
          <button>프론트엔드 심화</button>
          <button>백엔드 심화</button>
        </div>
      </div>
    </section>
  );
};
export default MainSection03;
