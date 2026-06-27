import { useState } from "react";
import { motion } from "motion/react";
import {
  FolderOpen,
  ScanEye,
  FileCheck,
  ServerCrash,
  Database,
  CloudUpload,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Search
} from "lucide-react";

export default function Services() {
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      id: "service-1",
      title: "기록물 정리 및 디지털화",
      subtitle: "중요 비전자 기록물의 안전한 보존과 간편한 조회 구축",
      icon: FolderOpen,
      color: "blue",
      subservices: [
        {
          name: "기록물 분류 및 정리 정비",
          desc: "공공기록물 관리 표준 절차에 따라 비전자 문서, 대장의 형태별 분류, 철 정리, 훼손방지 및 문서보존 처리 수행",
          badge: "표준 정비"
        },
        {
          name: "초고화질 디지털화 스캔",
          desc: "고성능 평판 및 자동 급지 스캐너를 통해 미세 글씨까지 식별 가능한 고해상도(Adf/Book/시청각 등) 이미지 파일 생성",
          badge: "고품질 스캔"
        },
        {
          name: "OCR 및 메타데이터 구축",
          desc: "문서 이미지 내 중요 텍스트를 고정밀 OCR 엔진으로 인식·정제하여 검색 가능한 전자문서(Searchable PDF) 및 핵심 키워드 메타 추출",
          badge: "스마트 검색"
        }
      ]
    },
    {
      id: "service-2",
      title: "DB 구축 및 시스템 등록 운영",
      subtitle: "검증된 엔지니어의 데이터 활용성 극대화 및 안전 이관",
      icon: Database,
      color: "indigo",
      subservices: [
        {
          name: "데이터베이스(DB) 설계 및 정형화",
          desc: "기관별 요구 데이터 구조에 따른 메타데이터 스키마 구축, 이관 형식에 맞는 데이터 무결성 검증 및 전처리 정형화",
          badge: "무결성 설계"
        },
        {
          name: "기록관리시스템(RMS) 업로드",
          desc: "국가기록원 표준 기록관리시스템(RMS) 이관규격에 맞춘 데이터변환 및 시스템업로드 최적화 프로세스 지원",
          badge: "이관 표준"
        },
        {
          name: "대용량 매체 보존 & 색인 솔루션",
          desc: "중요 전자 기록물에 대한 이중화 백업 장비 설계 및 빠른 조회를 지원하는 색인/검색서비스",
          badge: "보존 활용"
        }
      ]
    }
  ];

  const workflowSteps = [
    {
      title: "기록물 분류/정리",
      subtitle: "표준 가이드라인 정비",
      icon: FolderOpen,
      desc: "비전자 기록물의 상태와 이관 기준을 확인하고, 기록물관리 표준에 맞춘 철 분류 및 세부 분류 체계를 수립합니다."
    },
    {
      title: "고정밀 디지털 스캔",
      subtitle: "고해상도 이미지화",
      icon: ScanEye,
      desc: "전문 고성능 스캔 장비를 활용하여 훼손 방지 및 이미지 보정을 거쳐 완벽한 해상도의 디지털 파일을 제작합니다."
    },
    {
      title: "메타데이터 & OCR 추출",
      subtitle: "검색 가능한 정보화",
      icon: Search,
      desc: "지능형 OCR 처리를 통해 문서 내 텍스트를 추출하고, 신속한 조회를 위한 카테고리별 메타 정보(등록번호, 건제목, 생산연도 등)를 작성합니다."
    },
    {
      title: "DB적재 및 이관완료",
      subtitle: "안전한 보존/운영",
      icon: CloudUpload,
      desc: "추출된 데이터를 무결성 정밀 검수를 거쳐 타겟 기록물관리시스템 및 이관DB에 최적 규격으로 최종 탑재합니다."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">SERVICES</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            체계적이고 안전한 기록물 관리 솔루션
          </p>
          <div className="mt-4 h-1 w-12 bg-blue-600 mx-auto rounded" />
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
            주식회사 아이엠은 공공지침을 철저히 충족하며 고품질의 디지털 아카이브 환경을 제공합니다.
          </p>
        </div>

        {/* Dynamic 2-Column Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20">
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl hover:shadow-blue-50/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badge and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3.5 rounded-xl bg-blue-50 text-blue-600 shadow-sm`}>
                    <srv.icon className="w-6.5 h-6.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 tracking-wider">0{idx + 1} SERVICE TYPE</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mt-0.5">
                      {srv.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-500 mb-8 font-normal leading-relaxed">
                  {srv.subtitle}
                </p>

                {/* Subservice Items */}
                <div className="space-y-6">
                  {srv.subservices.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 sm:p-5 bg-slate-50 hover:bg-slate-100/50 rounded-xl transition-all border border-transparent hover:border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm sm:text-base font-bold text-gray-800">
                          {sub.name}
                        </h4>
                        <span className="text-[10px] sm:text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          {sub.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Archiving Workflow Demo Container */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Workflow Info (Left) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-1.5 bg-blue-900/30 border border-blue-800/30 px-3 py-1 rounded-full text-blue-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>체계적 4단계 공정</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                아이엠만의 고신뢰 <br />
                기록물 전자화 프로세스
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                모든 단계는 풍부한 경험을 가진 기록물관리전문가와 이관 전문엔지니어가 직접 총괄하며,
                자체 보안 필터링을 통해 기밀 유출을 원천 차단합니다. 각 단계를 클릭하여 상세 내용을 확인하세요.
              </p>

              {/* Steps selection list */}
              <div className="space-y-2">
                {workflowSteps.map((step, idx) => {
                  const isSelected = activeStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center space-x-3 border ${
                        isSelected
                          ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20"
                          : "bg-slate-950/40 border-slate-800 text-slate-400 hover:bg-slate-800/50 hover:text-white"
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${isSelected ? "bg-white text-blue-600" : "bg-slate-800 text-slate-300"}`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold ${isSelected ? "text-blue-100" : "text-slate-500"}`}>{step.subtitle}</p>
                        <p className="text-sm font-bold tracking-tight">{step.title}</p>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "translate-x-1 text-white" : "text-slate-600"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Simulator Screen (Right) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-inner h-[380px] sm:h-[420px] flex flex-col justify-between">
                
                {/* Header */}
                <div className="bg-slate-900 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-300">PROCESS VIEWPORT</span>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-900/30">
                    STAGE 0{activeStep + 1}
                  </span>
                </div>

                {/* Viewport Content */}
                <div className="p-6 flex-1 flex flex-col justify-center items-center text-center space-y-6">
                  
                  {/* Dynamic Icon Animating */}
                  <motion.div
                    key={activeStep}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-16 h-16 rounded-2xl bg-blue-950/80 border border-blue-800/40 text-blue-400 flex items-center justify-center shadow-lg"
                  >
                    {(() => {
                      const Icon = workflowSteps[activeStep].icon;
                      return <Icon className="w-8 h-8 animate-pulse" />;
                    })()}
                  </motion.div>

                  <div className="space-y-2.5 max-w-md">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {workflowSteps[activeStep].title}
                    </h4>
                    <p className="text-xs font-semibold text-blue-400 tracking-wider">
                      {workflowSteps[activeStep].subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {workflowSteps[activeStep].desc}
                    </p>
                  </div>

                  {/* Stage-specific Visual indicator */}
                  <div className="w-full max-w-xs bg-slate-900 rounded-lg p-2.5 border border-slate-800/80 flex items-center justify-around text-[11px] font-mono text-slate-400">
                    <span className={activeStep >= 0 ? "text-emerald-400 font-bold" : ""}>1.분류</span>
                    <span className="text-slate-600">→</span>
                    <span className={activeStep >= 1 ? "text-emerald-400 font-bold" : ""}>2.스캔</span>
                    <span className="text-slate-600">→</span>
                    <span className={activeStep >= 2 ? "text-emerald-400 font-bold" : ""}>3.메타/OCR</span>
                    <span className="text-slate-600">→</span>
                    <span className={activeStep >= 3 ? "text-emerald-400 font-bold" : ""}>4.DB탑재</span>
                  </div>

                </div>

                {/* Footer status bar */}
                <div className="bg-slate-900/60 px-5 py-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <div className="flex items-center">
                    <ShieldAlert className="w-3.5 h-3.5 text-blue-500 mr-1.5 shrink-0" />
                    <span>개인정보보호법 제29조 안전성확보 조치 완벽 이행</span>
                  </div>
                  <div>SECURE CONNECTION</div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
