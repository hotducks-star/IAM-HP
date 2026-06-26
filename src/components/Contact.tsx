import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ChevronRight, Copy, RefreshCw } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    title: "",
    message: "",
    agreed: false
  });

  const [copiedText, setCopiedText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("개인정보 수집 및 이용에 동의하셔야 문의 접수가 가능합니다.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xwvdoknw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          title: formData.title,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error("Formspree 전송 오류가 발생했습니다.");
      }

      setIsSubmitted(true);
      // Reset Form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        title: "",
        message: "",
        agreed: false
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setSubmitError("문의를 전송하는 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 직접 대표 메일/전화로 연락 부탁드립니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">CONTACT US</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            기록관리 디지털 전환의 첫 걸음
          </p>
          <div className="mt-4 h-1 w-12 bg-blue-600 mx-auto rounded" />
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
            비전자 기록물의 실태 조사부터 DB 이관까지 상세 사안을 맞춤 상담해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block - Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900">본사 및 연락처 정보</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-normal">
                주식회사 아이엠은 수원 현대테라타워에 위치해 있으며, 상담을 요청하시면 기록물관리전문가가 연락 또는 방문하여 도움을 드립니다.
              </p>

              <div className="space-y-5 pt-2">
                {/* Address Item */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-400">본사 주소</p>
                    <p className="text-sm font-semibold text-gray-800 mt-1 leading-relaxed">
                      경기도 수원시 영통구 신원로250번길 13, 에이동 1512호 (현대테라타워영통)
                    </p>
                    <button
                      onClick={() => handleCopy("경기도 수원시 영통구 신원로250번길 13, 에이동 1512호", "address")}
                      className="inline-flex items-center text-xs font-bold text-blue-600 mt-2 hover:underline"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      {copiedText === "address" ? "복사 완료!" : "주소 텍스트 복사"}
                    </button>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-400">이메일 문의</p>
                    <p className="text-sm font-extrabold text-blue-600 mt-1">
                      ysookim@iamai.co.kr
                    </p>
                    <button
                      onClick={() => handleCopy("ysookim@iamai.co.kr", "email")}
                      className="inline-flex items-center text-xs font-bold text-blue-600 mt-2 hover:underline"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      {copiedText === "email" ? "복사 완료!" : "이메일 복사"}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-400">대표 연락처</p>
                    <div className="text-sm font-semibold text-gray-800 mt-1 space-y-1">
                      <p>전화: <span className="font-bold text-gray-900">031-212-2816</span></p>
                      <p>핸드폰: <span className="font-bold text-gray-900">010-2624-3802</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Dynamic Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl shadow-blue-50/20">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900">문의가 정상 접수되었습니다!</h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                    작성해 주신 이메일(<span className="font-semibold text-gray-700">{formData.email}</span>) 및 대표번호로 담당 실무 전문가가 신속하게 검토 후 기재해주신 연락처로 즉시 회신드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-left border-b border-gray-100 pb-4 mb-6">
                    <h3 className="text-xl font-extrabold text-gray-900">기록관리 온라인 간편 문의</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      필수 입력 항목은 꼼꼼히 채워주시면 한층 명확한 설계 지원이 가능합니다.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-700 block">
                        담당자 이름 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="홍길동"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-700 block">
                        소속 기관 / 기업명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="OO광역시청, (주)아이엠"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-700 block">
                        이메일 주소 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="gildong@domain.com"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-700 block">
                        연락처 대표번호 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="010-1234-5678"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 block">
                      문의 제목 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      placeholder="비전자 기록물 이관 및 DB구축 견적 요청의 건"
                      className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 block">
                      상세 문의 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="기록물의 종류(문서, 도면, 시청각 등), 보관 수량, OCR 구축 희망 여부 등을 기재해주시면 한층 정밀한 상담이 가능합니다."
                      className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Agreement checkbox */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-gray-100 space-y-3">
                    <div className="flex items-start">
                      <input
                        id="agreed-checkbox"
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded mt-0.5 focus:ring-blue-500 focus:ring-1"
                      />
                      <label htmlFor="agreed-checkbox" className="ml-2.5 text-xs text-gray-500 font-medium leading-relaxed cursor-pointer select-none">
                        개인정보 수집 및 이용에 동의합니다. <span className="text-red-500 font-bold">(필수)</span>
                      </label>
                    </div>
                    <div className="text-[10px] text-gray-400 leading-relaxed max-h-16 overflow-y-auto font-normal">
                      주식회사 아이엠은 문의하신 사항에 대한 성실한 답변 제공 및 상세 견적 조율을 목적으로 성명, 연락처, 이메일, 소속 정보를 수집하며, 관계 법령에 의거하여 안전하게 보관 후 목적 달성 즉시 복구 불가능한 방법으로 폐기합니다.
                    </div>
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <p className="text-sm font-semibold text-red-500 text-center">{submitError}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? "bg-blue-400 cursor-not-allowed shadow-none"
                        : "bg-blue-600 hover:bg-blue-700 shadow-blue-100"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4.5 h-4.5 animate-spin mr-2" />
                        <span>전송 중...</span>
                      </>
                    ) : (
                      <>
                        <span>온라인 전문 문의 등록하기</span>
                        <ChevronRight className="w-4.5 h-4.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
