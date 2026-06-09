import ConsultationForm from './components/ConsultationForm';

export default function Home() {
  const services = [
    {
      icon: "🎯",
      title: "전략 기획",
      description:
        "비즈니스 목표를 달성하기 위한 데이터 기반의 전략을 수립하고, 실행 가능한 로드맵을 설계합니다.",
      tag: "Strategy",
    },
    {
      icon: "💡",
      title: "제품 개발",
      description:
        "사용자 중심의 사고로 혁신적인 제품을 기획하고 개발하여 시장에 새로운 가치를 제공합니다.",
      tag: "Product",
    },
    {
      icon: "🤝",
      title: "고객 성공",
      description:
        "고객과의 긴밀한 협력을 통해 목표를 함께 달성하고, 장기적인 신뢰 관계를 구축합니다.",
      tag: "Success",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-background-base)" }}>

      {/* Top Navigation */}
      <header
        className="flex items-center px-5 gap-5"
        style={{
          height: "var(--nav-height)",
          background: "var(--color-background-alt)",
          borderBottom: "1px solid var(--color-border)",
          position: "sticky",
          top: 0,
          zIndex: 200,
        }}
      >
        {/* Twitch-style logo mark */}
        <div className="flex items-center gap-2">
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 0L0 4V20H5V24L9 20H12L20 12V0H2ZM18 11L15 14H11L8 17V14H4V2H18V11Z" fill="#9146ff" />
            <rect x="13" y="5" width="2" height="5" fill="#18181b" />
            <rect x="8" y="5" width="2" height="5" fill="#18181b" />
          </svg>
          <span className="text-base font-bold" style={{ color: "var(--color-text-base)" }}>
            Skinami
          </span>
        </div>

        <nav className="hidden sm:flex gap-1 ml-2">
          <a href="#services" className="nav-link">서비스</a>
          <a href="#contact" className="nav-link">문의</a>
        </nav>

        <div className="flex-1" />

        <a href="#contact" className="btn-primary" style={{ padding: "6px 14px", fontSize: "12px" }}>
          문의하기
        </a>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section
          className="px-8 py-28 text-center relative overflow-hidden"
          style={{ background: "var(--color-background-base)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(145,70,255,0.18) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-3xl mx-auto relative">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="live-badge">LIVE</span>
              <span className="text-xs font-medium" style={{ color: "var(--color-text-alt)" }}>
                Team Skinami
              </span>
            </div>

            <h1
              className="text-5xl font-bold leading-tight mb-6"
              style={{ color: "var(--color-text-base)", letterSpacing: "-0.02em" }}
            >
              더 나은 내일을 <br />
              <span style={{ color: "var(--color-twitch-purple)" }}>함께 만들어갑니다</span>
            </h1>

            <p
              className="text-base leading-relaxed max-w-xl mx-auto mb-10"
              style={{ color: "var(--color-text-alt)" }}
            >
              저희 팀은 고객의 성공을 최우선으로 생각하며, 전문성과 열정으로 최고의 결과를 만들어냅니다.
            </p>

            <div className="flex items-center justify-center gap-3">
              <a href="#services" className="btn-primary">서비스 보기</a>
              <a href="#contact" className="btn-secondary">문의하기</a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-8 py-20" style={{ background: "var(--color-background-base)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-2">
              <div className="h-px flex-1 max-w-16" style={{ background: "var(--color-border)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-twitch-purple-light)" }}
              >
                Our Services
              </span>
              <div className="h-px flex-1 max-w-16" style={{ background: "var(--color-border)" }} />
            </div>

            <h2
              className="text-2xl font-bold text-center mb-2"
              style={{ color: "var(--color-text-base)", letterSpacing: "-0.01em" }}
            >
              우리 팀이 하는 일
            </h2>
            <p className="text-sm text-center mb-12" style={{ color: "var(--color-text-alt-2)" }}>
              세 가지 핵심 영역에서 탁월한 가치를 제공합니다
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((service) => (
                <div key={service.title} className="service-card">
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-base font-semibold" style={{ color: "var(--color-text-base)" }}>
                      {service.title}
                    </h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5"
                      style={{
                        background: "var(--color-background-input)",
                        color: "var(--color-text-alt)",
                        borderRadius: "var(--radius-pill)",
                      }}
                    >
                      {service.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-alt)" }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="px-8 py-24 relative overflow-hidden"
          style={{ background: "var(--color-background-alt)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(69,16,147,0.35) 0%, rgba(145,70,255,0.15) 50%, transparent 100%)",
            }}
          />

          <div className="max-w-xl mx-auto relative">
            <div className="text-center mb-8">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 mb-4"
                style={{
                  background: "rgba(145,70,255,0.2)",
                  color: "var(--color-twitch-purple-light)",
                  borderRadius: "var(--radius-pill)",
                  border: "1px solid rgba(145,70,255,0.3)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-twitch-purple)" }} />
                함께 시작해요
              </div>
              <h2
                className="text-3xl font-bold mb-3"
                style={{ color: "var(--color-text-base)", letterSpacing: "-0.02em" }}
              >
                함께 시작할 준비가 되셨나요?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-alt)" }}>
                어떤 문의든 환영합니다. 저희 팀이 빠르게 답변드리겠습니다.
              </p>
            </div>

            <ConsultationForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="px-8 py-5 flex items-center justify-between text-xs"
        style={{
          background: "var(--color-background-alt)",
          borderTop: "1px solid var(--color-border)",
          color: "var(--color-text-alt-2)",
        }}
      >
        <span>© 2026 Skinami. All rights reserved.</span>
        <a
          href="mailto:hjun@skinami.co.kr"
          style={{ color: "var(--color-text-link)" }}
        >
          hjun@skinami.co.kr
        </a>
      </footer>
    </div>
  );
}
