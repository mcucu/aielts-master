
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, BookOpen, Clock, Check, Lightbulb } from "lucide-react";

const About = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

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

    const sections = sectionsRef.current?.querySelectorAll(".animate-section");
    sections?.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections?.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
                Tentang Platform Kami
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 animate-slideUp">Membantu Anda Sukses dalam IELTS Writing</h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slideUp opacity-0" style={{ animationDelay: "100ms" }}>
                Kami membuat platform latihan IELTS Writing dengan tujuan membantu peserta tes mencapai skor terbaik mereka melalui latihan yang terfokus dan realistis.
              </p>
            </div>
          </div>
        </section>

        <div ref={sectionsRef}>
          {/* Mission Section */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Misi Kami
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-6">Mengapa Kami Membuat Platform Ini</h2>
                  <p className="text-muted-foreground mb-6">
                    Kami memahami bahwa menulis adalah komponen yang menantang dalam tes IELTS. Banyak peserta ujian mengalami kesulitan dalam mengembangkan ide mereka secara terstruktur, menggunakan kosakata yang tepat, dan mengelola waktu dengan efektif.
                  </p>
                  <p className="text-muted-foreground">
                    Itulah mengapa kami membuat platform ini—untuk menyediakan alat yang memungkinkan peserta ujian berlatih dalam kondisi yang realistis dan menerima panduan untuk meningkatkan keterampilan menulis mereka.
                  </p>
                </div>
                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                      <BookOpen className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-medium text-lg mb-2">Berbasis Penelitian</h3>
                      <p className="text-sm text-muted-foreground">
                        Pendekatan kami didasarkan pada penelitian tentang teknik penulisan efektif dan kriteria penilaian IELTS.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                      <Clock className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-medium text-lg mb-2">Persiapan Realistis</h3>
                      <p className="text-sm text-muted-foreground">
                        Simulasi ujian kami dirancang untuk mengikuti format dan batasan waktu yang sama dengan ujian IELTS sebenarnya.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                      <Award className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-medium text-lg mb-2">Contoh Berkualitas</h3>
                      <p className="text-sm text-muted-foreground">
                        Contoh jawaban berkualitas tinggi disediakan untuk menunjukkan standar yang diperlukan untuk skor tinggi.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                      <Lightbulb className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-medium text-lg mb-2">Tips Strategi</h3>
                      <p className="text-sm text-muted-foreground">
                        Tips praktis untuk membantu mengembangkan strategi menulis yang efektif untuk ujian IELTS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* IELTS Writing Overview */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Panduan IELTS
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Memahami Komponen IELTS Writing</h2>
                <p className="text-muted-foreground">
                  Tes IELTS Writing terdiri dari dua tugas dengan persyaratan yang berbeda. Memahami komponen-komponen ini penting untuk persiapan yang efektif.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-100 p-8 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Task 1
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Academic Task 1</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Mendeskripsikan dan merangkum informasi visual (grafik, tabel, diagram, peta)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Minimal 150 kata</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Waktu yang disarankan: 20 menit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Fokus pada tren utama, perbandingan, dan informasi kunci</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Jangan memberikan opini pribadi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Struktur: pendahuluan, gambaran umum, detail, (tidak perlu kesimpulan)</span>
                    </li>
                  </ul>
                </div>

                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-200 p-8 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Task 2
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Academic Task 2</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Menulis esai dalam menanggapi argumen, masalah, atau sudut pandang</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Minimal 250 kata</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Waktu yang disarankan: 40 menit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Mengembangkan argumen yang koheren dengan posisi yang jelas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Berikan contoh spesifik untuk mendukung poin Anda</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Struktur: pendahuluan, 2-3 paragraf tubuh, kesimpulan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Scoring Criteria */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Kriteria Penilaian
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Bagaimana IELTS Writing Dinilai</h2>
                <p className="text-muted-foreground">
                  Memahami kriteria penilaian IELTS Writing dapat membantu Anda fokus pada area yang tepat saat berlatih dan meningkatkan keterampilan menulis Anda.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-100 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Task Achievement</h3>
                  <p className="text-muted-foreground mb-4">
                    Seberapa baik Anda menjawab pertanyaan dan memenuhi persyaratan tugas.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Menjawab semua bagian pertanyaan</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Mengembangkan ide dengan jelas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Menulis dengan jumlah kata minimum</span>
                    </li>
                  </ul>
                </div>

                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-150 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Coherence & Cohesion</h3>
                  <p className="text-muted-foreground mb-4">
                    Bagaimana Anda mengorganisir ide dan menghubungkan mereka dengan logis.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Organisasi paragraf yang logis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Penggunaan kata penghubung yang efektif</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Alur ide yang jelas</span>
                    </li>
                  </ul>
                </div>

                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-200 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Lexical Resource</h3>
                  <p className="text-muted-foreground mb-4">
                    Rentang kosakata dan ketepatan penggunaannya dalam konteks.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Kosakata yang beragam</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Diksi yang tepat dan akurat</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Kesadaran akan kolokasi</span>
                    </li>
                  </ul>
                </div>

                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-250 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Grammatical Range</h3>
                  <p className="text-muted-foreground mb-4">
                    Ketepatan dan variasi struktur tata bahasa yang digunakan.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Struktur kalimat yang bervariasi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Kontrol tenses yang tepat</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Minim kesalahan tata bahasa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
