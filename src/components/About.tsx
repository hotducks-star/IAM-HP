import { motion } from "motion/react";
import { Building2, Award, Users, CheckCircle, CalendarDays } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: CalendarDays,
      title: "2022년 창업 및 기록물관리전문가 그룹 조직",
      description: "공공/민간 기록물 수집/보존/관리/활용 지원을 위해 2022년 창업하여, 공공기록물법, 기록물표준 및 지침에 맞춘 최고 품질의 서비스를 실현하고 있습니다."
    },
    {
      icon: Award,
      title: "최상위 보존기관 사업 수행",
      description: "국가기록원, 대통령기록관 등 국가 최상위 영구기록물관리기관의 중요기록물(비전자/시청각) 분류/정리 및 DB구축을 전문적으로 수행합니다."
    },
    {
      icon: Building2,
      title: "다수 공공기관 검증 실적",
      description: "고용노동부, 지자체, 교육지원청 외 다수 공공기관의 중요기록물을 체계적으로 처리해 전문성을 입증받았습니다."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">ABOUT US</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            신뢰와 기술로 기록의 가치를 더합니다
          </p>
          <div className="mt-4 h-1 w-12 bg-blue-600 mx-auto rounded" />
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
            주식회사 아이엠은 공공 및 민간 부문의 중요 자산인 기록물을 안전하게 보존하고,
            가치 있게 활용할 수 있도록 돕는 기록관리 및 DB구축 파트너입니다.
          </p>
        </div>

        {/* Company Intro & Spotlight Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                회사 개요
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                주식회사 아이엠은 기록물 전문 서비스 기업입니다
              </h3>
              <p className="text-gray-600 leading-relaxed">
                당사는 2022년에 창업한 이래, 국가기록원, 대통령기록관, 다수 공공기관 등 국가 중요기록물의 수집/보존/관리/활용을 위한 기록물 사업을 전문적으로 수행하고 있습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                공공기록물법 및 국가물관리 표준 및 지침을 완벽 준수하며, 고난이도 비전자 문서정리, 시청각 콘텐츠의 디지털 변환, 초정밀 OCR 솔루션 구축 등 최고 품질의 데이터구축을 약속드립니다.
              </p>
            </div>

            {/* Checked features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "공공기록물법, 기록물관리 표준 준수",
                "대규모 기록물 정리 및 디지털화/OCR",
                "정수점검 및 이관 프로세스 수립/운영",
                "영구/표준 기록관리시스템 업로드 지원"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards list */}
          <div className="lg:col-span-6 space-y-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 p-6 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300"
              >
                <div className="p-3 bg-white group-hover:bg-blue-600 group-hover:text-white rounded-xl text-blue-600 shadow-sm transition-all duration-300 shrink-0">
                  <val.icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
