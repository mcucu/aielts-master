
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Pencil, Clock, Award } from "lucide-react";

const Hero = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const features = featuresRef.current?.querySelectorAll(".feature");
    features?.forEach((feature) => {
      observer.observe(feature);
    });

    return () => {
      features?.forEach((feature) => {
        observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <section className="relative pt-20 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-6 py-16 md:py-24 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
            Persiapan Test IELTS Writing
          </span>
          
          <h1 className="animate-slideUp text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Tingkatkan Skor IELTS <span className="text-primary">Writing</span> Anda
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slideUp opacity-0" style={{ animationDelay: "100ms" }}>
            Platform latihan yang dirancang untuk meningkatkan kemampuan menulis Anda untuk ujian IELTS dengan simulasi yang realistis, penilaian, dan panduan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-slideUp opacity-0" style={{ animationDelay: "200ms" }}>
            <Link 
              to="/practice" 
              className="px-6 py-3 text-base font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center"
            >
              Mulai Latihan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="px-6 py-3 text-base font-medium rounded-full border border-border bg-background hover:bg-secondary transition-all duration-300"
            >
              Pelajari Selengkapnya
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 md:py-16">
          <div className="feature opacity-0 translate-y-10 transition-all duration-500 ease-out p-6 rounded-2xl border border-border/50 bg-card hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Pencil className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Latihan Realistis</h3>
            <p className="text-muted-foreground">
              Latihan dengan soal yang serupa dengan format ujian IELTS sebenarnya untuk Task 1 dan Task 2.
            </p>
          </div>
          
          <div className="feature opacity-0 translate-y-10 transition-all duration-500 ease-out delay-100 p-6 rounded-2xl border border-border/50 bg-card hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Timer Ujian</h3>
            <p className="text-muted-foreground">
              Berlatih dengan batasan waktu yang sama seperti ujian sebenarnya untuk meningkatkan kecepatan menulis Anda.
            </p>
          </div>
          
          <div className="feature opacity-0 translate-y-10 transition-all duration-500 ease-out delay-200 p-6 rounded-2xl border border-border/50 bg-card hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Contoh Jawaban</h3>
            <p className="text-muted-foreground">
              Akses contoh jawaban berkualitas tinggi untuk memahami teknik penulisan yang efektif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
