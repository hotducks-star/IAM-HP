import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Database, FileText, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [scanProgress, setScanProgress] = useState(0);
  const [ocrText, setOcrText] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const sampleTexts = [
    "문서번호 :기록관리정책과-3248",
    "일시/장소 : 26.6.26(금) 10:00~12:00 / 기록정보센터 회의실 ",
    "제    목 : 제27차 기록물평가심의회 개최 계획 보고",
    "안    건 : 보존기간 만료 기록물 평가(42개 기관, 22530철)"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          // Trigger next text and reset
          setActiveStep((step) => (step + 1) % sampleTexts.length);
          return 0;
        }
        return prev + 2.5;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Typewrite the OCR effect as progress increases
    const targetText = sampleTexts[activeStep];
    const length = Math.floor((scanProgress / 100) * targetText.length);
    setOcrText(targetText.substring(0, length));
  }, [scanProgress, activeStep]);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-100/30 to-indigo-100/30 blur-3xl opacity-70 rounded-full" />
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-sky-100/20 blur-2xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100/80 px-3.5 py-1.5 rounded-full w-fit"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-800 tracking-wider">
                국가 중요기록물 정리 및 DB구축 전문 기업
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.2] sm:leading-[1.15]"
              >
                중요 기록자산의 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {" "} 체계적인 <br /> 정리 및 디지털 전환을 통해
                </span>{" "}
                <br />
                안전하게 미래를 대비하세요 <br />
                </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-xl leading-relaxed font-normal"
              >
                (주)아이엠은 신뢰할 수 있는 국내 최고 수준의 기록물 관리 전문 기업입니다. <br />
                중요기록물 분류·정리부터 고성능 스캔, 메타데이터 구축/OCR 텍스트 정제 등 <br />
                완벽한 기록물정리 및 DB구축, 안전한 이관까지 원스톱으로 제공합니다.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => handleCtaClick(e, "#contact")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 group"
              >
                구축·이관 상담
                <ArrowRight className="w-4.5 h-4.5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleCtaClick(e, "#services")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
              >
                핵심 서비스 안내
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-5 gap-2 sm:gap-4 lg:gap-6 pt-6 border-t border-gray-100"
            >
              <div>
                <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-blue-600">2022년</p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-medium mt-1">설립년도</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-gray-900">99.9%</p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-medium mt-1">기록물품질수준</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-blue-600">100%</p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-medium mt-1">이관 및 DB검증율</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-gray-900">50+</p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-medium mt-1">공공기관 파트너십</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-blue-600">0건</p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-medium mt-1">보안사고/정보유출</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual Block */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[420px] lg:max-w-none rounded-2xl bg-slate-900 shadow-2xl border border-slate-800 overflow-hidden text-white"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 select-none tracking-tight">
                  IAM DIGITAL ARCHIVE v2.0
                </div>
                <div className="w-10" />
              </div>

              {/* Console / Demo Screen */}
              <div className="p-5 font-sans space-y-4">
                {/* Active Scanning Indicator */}
                <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">디지털화 정밀 스캔 진행 중</div>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">HIGH-RESOLUTION SCANNING</div>
                    </div>
                  </div>
                  <div className="text-sm font-mono font-bold text-blue-400">
                    {Math.floor(scanProgress)}%
                  </div>
                </div>

                {/* Simulated Scan Screen */}
                <div className="relative h-44 rounded-xl bg-slate-950 border border-slate-800/60 overflow-hidden flex flex-col justify-between p-4 font-mono text-xs">
                  {/* Scan Laser effect */}
                  <div
                    className="absolute left-0 right-0 h-0.5 bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.8)] z-10"
                    style={{ top: `${scanProgress}%`, transition: "top 0.1s linear" }}
                  />

                  {/* Document Box Representation */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 bg-blue-950/60 border border-blue-800/30 rounded-lg">
                        <FileText className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-300">DOC_SCAN_2026.pdf</div>
                        <div className="text-[9px] text-slate-500">Scale: 600DPI TIFF/OCR</div>
                      </div>
                    </div>
                    <div className="text-[10px] bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-800/20">
                      SECURE
                    </div>
                  </div>

                  {/* Typing OCR Text Result */}
                  <div className="my-3 p-2.5 bg-slate-900/80 rounded-lg border border-slate-800/40 text-slate-300 font-sans text-xs min-h-[50px] leading-relaxed relative">
                    <div className="absolute top-1.5 right-2 text-[9px] font-mono text-emerald-400 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                      OCR ACTIVE
                    </div>
                    {ocrText || <span className="text-slate-600">스캐너 대기 중...</span>}
                    <span className="w-1 h-3.5 bg-blue-400 inline-block ml-0.5 animate-pulse" />
                  </div>

                  {/* Bottom Stats */}
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1.5 border-t border-slate-900">
                    <div>SPEED: 120 PPM</div>
                    <div>QUALITY: EXCELLENT</div>
                  </div>
                </div>

                {/* Multi-step pipeline representation */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "1. 분류/점검", icon: CheckCircle2, progress: scanProgress > 30 ? 100 : scanProgress * 3 },
                    { label: "2. 정밀스캔", icon: FileText, progress: scanProgress },
                    { label: "3. DB업로드", icon: Database, progress: scanProgress > 70 ? (scanProgress - 70) * 3.3 : 0 }
                  ].map((step, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-950/60 border border-slate-800/50 rounded-xl flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-slate-400">{step.label}</span>
                        <step.icon className={`w-3 h-3 ${step.progress === 100 ? "text-emerald-400" : step.progress > 0 ? "text-blue-400 animate-pulse" : "text-slate-600"}`} />
                      </div>
                      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-2">
                        <div
                          className={`h-full rounded-full ${step.progress === 100 ? "bg-emerald-400" : "bg-blue-500"}`}
                          style={{ width: `${step.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tiny accent badge */}
            <div className="absolute -bottom-4 -right-4 bg-white shadow-xl rounded-2xl p-4 border border-gray-100 flex items-center space-x-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-gray-600">보안관리체계 구축/운영</p>
                <p className="text-xs font-semibold text-red-700">기록물내 개인정보 보호</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
