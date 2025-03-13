
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

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
        <div ref={sectionsRef}>

          {/* Essay Overview */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Essay Overview</h2>
                <p className="text-muted-foreground">
                  Tes IELTS Writing terdiri dari dua tugas dengan persyaratan yang berbeda. Memahami komponen-komponen ini penting untuk persiapan yang efektif.
                </p>
              </div>
            </div>
          </section>

          {/* Score Result */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Essay Score</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-100 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Task Achievement: score</h3>
                  <p className="text-muted-foreground mb-4">
                    Seberapa baik Anda menjawab pertanyaan dan memenuhi persyaratan tugas
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Task Achievement review
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 1</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 3</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 3</span>
                    </li>
                  </ul>
                </div>

                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-150 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Coherence & Cohesion: score</h3>
                  <p className="text-muted-foreground mb-4">
                    Bagaimana Anda mengorganisir ide dan menghubungkan mereka dengan logis.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Coherence & Cohesion review
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 1</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 2</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 3</span>
                    </li>
                  </ul>
                </div>

                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-200 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Lexical Resource: score</h3>
                  <p className="text-muted-foreground mb-4">
                    Rentang kosakata dan ketepatan penggunaannya dalam konteks.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Lexical Resource review
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 1</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 2</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 3</span>
                    </li>
                  </ul>
                </div>

                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-250 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Grammatical Range: score</h3>
                  <p className="text-muted-foreground mb-4">
                    Ketepatan dan variasi struktur tata bahasa yang digunakan.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Grammatical Range review
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 1</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 2</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Review item 3</span>
                    </li>
                  </ul>
                </div>

                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-250 p-6 rounded-xl border border-border/50 bg-card hover:shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Overall Band Score: score</h3>
                  <p className="text-muted-foreground mb-4">
                    SCORE
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Essay Correction */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Correction</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-6">Original</h2>
                  <p className="text-muted-foreground mb-6">
                    Kami memahami bahwa menulis adalah komponen yang menantang dalam tes IELTS. Banyak peserta ujian mengalami kesulitan dalam mengembangkan ide mereka secara terstruktur, menggunakan kosakata yang tepat, dan mengelola waktu dengan efektif.
                  </p>
                  <p className="text-muted-foreground">
                    Itulah mengapa kami membuat platform ini—untuk menyediakan alat yang memungkinkan peserta ujian berlatih dalam kondisi yang realistis dan menerima panduan untuk meningkatkan keterampilan menulis mereka.
                  </p>
                </div>
                <div className="animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out delay-100">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Review</h2>
                    <p className="text-muted-foreground mb-6">
                      Kami memahami bahwa menulis adalah komponen yang menantang dalam tes IELTS. Banyak peserta ujian mengalami kesulitan dalam mengembangkan ide mereka secara terstruktur, menggunakan kosakata yang tepat, dan mengelola waktu dengan efektif.
                    </p>
                    <p className="text-muted-foreground">
                      Itulah mengapa kami membuat platform ini—untuk menyediakan alat yang memungkinkan peserta ujian berlatih dalam kondisi yang realistis dan menerima panduan untuk meningkatkan keterampilan menulis mereka.
                    </p>
                </div>
              </div>
            </div>
          </section>

          {/* Essay Improved Version */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Essay Improved Version</h2>
                <p className="text-muted-foreground">
                  Tes IELTS Writing terdiri dari dua tugas dengan persyaratan yang berbeda. Memahami komponen-komponen ini penting untuk persiapan yang efektif.
                </p>
              </div>
            </div>
          </section>

          {/* Essay Vocabulary */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-section opacity-0 translate-y-10 transition-all duration-500 ease-out">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Essay Vocabulary</h2>
                <p className="text-muted-foreground">
                  Tes IELTS Writing terdiri dari dua tugas dengan persyaratan yang berbeda. Memahami komponen-komponen ini penting untuk persiapan yang efektif.
                </p>
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
