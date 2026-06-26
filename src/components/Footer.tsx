import { ShieldCheck, ArrowUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12 items-start">
          
          {/* Logo & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <Logo className="h-10" showText={false} />
              <div className="flex flex-col">
                <span className="text-lg font-black text-white tracking-tight leading-none">
                  주식회사 아이엠
                </span>
                <span className="text-[9px] text-slate-500 font-bold tracking-wider mt-1.5 uppercase">
                  Information Archive Meta
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              최고 수준의 안전성과 초정밀 디지털화 장비 및 기술력을 바탕으로, 국가기록원 및 공공기관의 중요 국가기록물 사업을 완벽하게 수행합니다.
            </p>
          </div>

          {/* Quick links representation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase">대표 법령 및 표준 준수</h4>
            <div className="text-xs text-slate-500 space-y-2 font-normal leading-relaxed">
              <p>• 공공기록물 관리에 관한 법률 제 19조(기록물의 관리)</p>
              <p>• 행정 효율과 협업 촉진에 관한 규정</p>
              <p>• 국가기록원 기록관리 표준 가이드라인 완벽 이행</p>
            </div>
          </div>

          {/* Technical Certifications info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase">보안 및 기술 신뢰</h4>
            <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded-xl border border-slate-800">
              <ShieldCheck className="w-8 h-8 text-blue-500 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-300">물리적/논리적 보안 통제</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">자체 보안검수 기준 충족</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom block (Address details, copyright) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 text-xs text-slate-500 font-normal leading-relaxed">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <p>상호명: <span className="text-slate-400 font-semibold">주식회사 아이엠</span></p>
              <p>대표자: <span className="text-slate-400 font-semibold">김용수</span></p>
              <p>주소: 경기도 수원시 영통구 신원로250번길 13, 에이동 1512호 (현대테라타워영통)</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <p>대표 전화: <span className="text-slate-400 font-semibold">031-212-2816</span></p>
              <p>직통 모바일: <span className="text-slate-400 font-semibold">010-2624-3802</span></p>
              <p>이메일: <span className="text-slate-400 font-semibold">ysookim@iamai.co.kr</span></p>
            </div>
            <p className="text-[10px] text-slate-600 pt-1">
              © 2022 주식회사 아이엠. All rights reserved.
            </p>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors border border-slate-800 shadow-inner group shrink-0"
            aria-label="맨 위로 가기"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
