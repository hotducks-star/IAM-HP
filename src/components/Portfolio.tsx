import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ShieldCheck, MapPin, Search, Calendar, FolderHeart } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "national" | "labor" | "regional" | "private">("all");

  const categories = [
    { id: "all", label: "전체 실적" },
    { id: "national", label: "중앙 영구보존기관" },
    { id: "labor", label: "중앙부처 및 지방노동위" },
    { id: "regional", label: "지방자치단체 및 교육청" },
    { id: "private", label: "공공위원회 및 기타" }
  ];

  const items = [
    {
      id: "port-1",
      category: "national",
      client: "국가기록원, 대통령기록관 등",
      title: "중앙영구기록관리기관 기록물 정리 및 DB구축",
      details: [
        "비전자 문서, 대장, 도면 등 중앙영구기록물 분류 체계 재정립 및 표준 정리",
        "필름, 인화사진, 오디오 등 시청각 콘텐츠 미디어 복원 및 디지털 파일 변환",
        "대통령 기록물 메타데이터 추출, 역사 콘텐츠 아카이브 DB구축 완수"
      ],
      tags: ["비전자 기록", "시청각/콘텐츠", "대통령기록물", "DB구축"],
      strength: "공공기록물법, 기록관리표준 및 지침 준수"
    },
    {
      id: "port-2",
      category: "labor",
      client: "고용노동부 서울/중앙/경기지방노동위원회, 인천광역시 중구청 등",
      title: "보유기록물 전수조사 및 국가기록원 안전 이관 지원",
      details: [
        "지방노동위원회 및 구청 보유 비전자 기록물 대상 100% 정수점검 및 서고 정비",
        "보존기간 경과 문서 검토, 폐기/이관 대상 선별 및 마이크로필름/디지털화 대상화",
        "국가기록원 이관용 표준 XML 메타 변환 및 기록물 안전 이송 프로세스 완수"
      ],
      tags: ["전수조사", "정수점검", "서고정비", "국가기록원 이관"],
      strength: "이관 기록물/데이터 누락율 0% 및 신속한 행정 연계"
    },
    {
      id: "port-3",
      category: "regional",
      client: "경기도 광명시, 부산광역시교육청 부산해운대교육지원청",
      title: "중요기록물 정리 및 지능형 DB구축 사업",
      details: [
        "지자체 및 하부 행정기관 중요 대장, 인허가 서류 분류 정비",
        "교육지원청 내 중요 영구보존 학적부 및 행정대장 OCR 텍스트 정밀 추출",
        "행정정보공개 청구의 즉각 대응을 위한 검색 색인용 메타데이터 입력 연계"
      ],
      tags: ["지자체 기록", "학적부/대장", "OCR 스캔", "색인화"],
      strength: "대량 행정문서 빠른 조회를 위한 완벽한 DB 구축"
    },
    {
      id: "port-4",
      category: "private",
      client: "진실화해위원회, 한국천주교중앙협의회, 민간사업체",
      title: "역사적·공익적 중요 기록물 DB화 사업",
      details: [
        "과거사 진실 규명을 위한 방대한 공적 조사자료 텍스트 데이터베이스 추출/요약",
        "역사사료 및 민간단체 희귀문서의 물리적 정비, 체계적인 분류 및 DB구축",
        "기록관리시스템에 적합한 데이터 구축 및 일괄 업로드 지원"
      ],
      tags: ["역사 사료", "민간/단체 기록", "기록관리시스템", "데이터 변환"],
      strength: "고문서 및 훼손우려 기록물의 보호 및 데이터 보안"
    }
  ];

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">PORTFOLIO & STRENGTHS</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            검증된 경험과 독보적인 포트폴리오
          </p>
          <div className="mt-4 h-1 w-12 bg-blue-600 mx-auto rounded" />
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
            중앙영구기록관리기관부터 지방정부, 민간기관까지 주식회사 아이엠의 엄격한 품질관리를 거쳐 간 기록유산입니다.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                filter === cat.id
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-50/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  
                  {/* Card Header (Client name and Category icon) */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                        {categories.find((c) => c.id === item.category)?.label}
                      </span>
                      <p className="text-xs font-semibold text-gray-400 mt-2 flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        {item.client}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
                    {item.title}
                  </h3>

                  {/* Details Bullet List */}
                  <ul className="space-y-2.5 pt-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-2 text-sm text-gray-600 leading-relaxed font-normal">
                        <span className="text-blue-500 font-extrabold mt-0.5 shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Tags & Core Strength Section */}
                <div className="mt-8 pt-6 border-t border-gray-100/80 space-y-4">
                  {/* Strengths highlight */}
                  <div className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl flex items-center space-x-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-emerald-800">
                      {item.strength}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Strength summary block */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
            <div className="lg:col-span-1 flex flex-col justify-center space-y-2">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">WHY IAM ARCHIVE</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">아이엠만의 3대 강점</h3>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "기록관리전문가 매칭", desc: "국가기록원과 대통령기록관 및 공공기관 기록물 정리/DB구축 및 데이터 이관을 주도한 최정예 기록관리실무전문가가 책임 관리합니다." },
                { title: "첨단스캔·OCR기기", desc: "고문서용 북스캐너, 고해상도 평판/자동 급지 기기 및 오차율을 최소화하는 하이테크 OCR 솔루션을 제공합니다." },
                { title: "최상의 보안관리", desc: "수행팀 전원 신원보증 및 체계적인 보안관리 통제하에 철저한 기밀유지 확보 및 보안사고 Zoro화를 달성합니다." }
              ].map((val, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center lg:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 shrink-0" />
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
