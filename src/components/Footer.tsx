import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="border-t border-gray-300 h-96">
      <div className="">Techit By Likeion</div>
      <div className="flex justify-end">
        <div className="p-5">
          <h3>모든 교육 경험</h3>
          <ul>
            <li>KDT 테킷 스쿨</li>
            <li>온보딩 트랙</li>
            <li>스타트업 스테이션</li>
            <li>이벤트</li>
            <li>기업 해커톤</li>
          </ul>
        </div>
        <div className="p-5">
          <h3>회사 소개</h3>
          <ul>
            <li>KIKELION</li>
            <li>채용</li>
          </ul>
        </div>
      </div>
      <hr className="mt-5 w-full border-gray-300 lg:mt-8"></hr>
      <div className="flex flex-col">
        <span>이용약관 개인정보처리방침 환불규정</span>
        <span>
          상호명: 멋쟁이사자처럼대표: 이두희contact@likelion.net 사업자 번호 :
          264-88-01106 통신판매업 신고번호 : 2019-서울강남-00774{" "}
        </span>
        <span>
          주소 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층 Copyright ©
          2022 멋쟁이사자처럼 All rights reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
