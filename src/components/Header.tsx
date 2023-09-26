import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="sticky left-0 top-0 z-200 flex h-16 w-full border-b bg-white">
      <div className="relative mx-auto box-border flex-1">
        {/* z-75  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center p-6">
            <button className="flex items-center px-5">
              <img src="/asset/logo.png" className="w-28 h-4"></img>
            </button>
            <nav className="flex">
              <ul className="flex">
                <li className="flex flex-row items-center">테킷 스쿨</li>
                <li className="flex flex-row items-center">온보딩 트랙</li>
                <li className="flex flex-row items-center">
                  스타트업 스테이션
                </li>
                <li className="flex flex-row items-center">이벤트</li>
                <li className="flex flex-row items-center">기업 해커톤</li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center px-6 py-5 text-gray-500">
            <button>로그인</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
