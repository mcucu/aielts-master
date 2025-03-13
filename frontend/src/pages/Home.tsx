
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { BookOpen, Pencil, Clock, Award, ChevronRight } from "lucide-react";

const Home = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    const testimonials = testimonialsRef.current?.querySelectorAll(".testimonial");
    testimonials?.forEach((testimonial) => {
      observer.observe(testimonial);
    });

    return () => {
      testimonials?.forEach((testimonial) => {
        observer.unobserve(testimonial);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        <Hero />
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Bagaimana Cara Kerjanya</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Platform kami dirancang untuk membantu Anda mempersiapkan tes IELTS Writing secara efektif melalui proses yang sederhana.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Pencil className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Pilih Jenis Tugas</h3>
                <p className="text-muted-foreground">
                  Pilih antara Task 1 (diagram/grafik) atau Task 2 (esai) sesuai kebutuhan latihan Anda.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Latihan dengan Timer</h3>
                <p className="text-muted-foreground">
                  Menulis dengan batasan waktu seperti kondisi ujian nyata untuk mengembangkan kecepatan dan efisiensi.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Lihat Contoh Jawaban</h3>
                <p className="text-muted-foreground">
                  Pelajari dari contoh jawaban berkualitas tinggi dan tingkatkan keterampilan menulis Anda.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link
                to="/practice"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Mulai Berlatih Sekarang
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10" ref={testimonialsRef}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Apa Kata Pengguna Kami</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lihatlah apa yang dikatakan pengguna kami tentang pengalaman mereka menggunakan platform IELTS Writing kami.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="testimonial opacity-0 translate-y-10 transition-all duration-500 ease-out p-6 rounded-2xl border border-border/50 bg-card hover:shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">A</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Ahmad Fajar</h4>
                    <p className="text-sm text-muted-foreground">IELTS 7.5 Overall</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Platform ini sangat membantu persiapan saya untuk IELTS. Latihan task yang realistis dan timer sangat berguna untuk mensimulasikan kondisi ujian nyata."
                </p>
              </div>
              
              <div className="testimonial opacity-0 translate-y-10 transition-all duration-500 ease-out delay-100 p-6 rounded-2xl border border-border/50 bg-card hover:shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">S</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Siti Rahmawati</h4>
                    <p className="text-sm text-muted-foreground">IELTS 8.0 Writing</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Contoh jawaban yang disediakan sangat membantu saya memahami apa yang diharapkan untuk mendapatkan skor tinggi. Berkat platform ini, saya mendapat skor 8.0 di Writing."
                </p>
              </div>
              
              <div className="testimonial opacity-0 translate-y-10 transition-all duration-500 ease-out delay-200 p-6 rounded-2xl border border-border/50 bg-card hover:shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">B</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Budi Santoso</h4>
                    <p className="text-sm text-muted-foreground">IELTS 7.0 Overall</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Interface yang bersih dan intuitif membuat fokus menulis menjadi lebih mudah. Tips yang disediakan juga sangat membantu meningkatkan kualitas tulisan saya."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Siap Untuk Meningkatkan Keterampilan IELTS Writing Anda?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Mulai latihan sekarang dan lihat peningkatan dalam kemampuan menulis IELTS Anda.
            </p>
            <Link
              to="/practice"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg text-lg font-medium"
            >
              Mulai Latihan Gratis
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
