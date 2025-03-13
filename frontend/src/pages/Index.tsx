
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Headphones, MessageSquare, Pencil, BookText, ChevronRight } from "lucide-react";
import PreparationCard from "@/components/PreparationCard";

const Index = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate cards when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el) => {
              el.classList.add("opacity-100", "translate-y-0");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">IELTS Preparation Assistant</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Prepare for all sections of the IELTS exam with our comprehensive resources and practice tests.
            </p>

            <div 
              ref={cardsRef}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              <PreparationCard
                title="Reading"
                description="Practice reading passages and answer various question types to improve your reading skills."
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                linkTo="/reading"
                className="animate-on-scroll"
                delay={0}
              />
              
              <PreparationCard
                title="Listening"
                description="Enhance your listening skills with authentic test-like audio materials and exercises."
                icon={<Headphones className="h-8 w-8 text-primary" />}
                linkTo="/listening"
                className="animate-on-scroll"
                delay={100}
              />
              
              <PreparationCard
                title="Speaking"
                description="Prepare for the speaking interview with practice questions and sample answers."
                icon={<MessageSquare className="h-8 w-8 text-primary" />}
                linkTo="/speaking"
                className="animate-on-scroll"
                delay={200}
              />
              
              <PreparationCard
                title="Writing"
                description="Practice writing tasks with timed tests and get tips to improve your writing score."
                icon={<Pencil className="h-8 w-8 text-primary" />}
                linkTo="/writing-test"
                className="animate-on-scroll"
                delay={300}
              />
              
              <PreparationCard
                title="Vocabulary"
                description="Build your vocabulary with essential IELTS words and phrases for all sections."
                icon={<BookText className="h-8 w-8 text-primary" />}
                linkTo="/vocabulary"
                className="animate-on-scroll"
                delay={400}
                className2="sm:col-span-2 lg:col-span-4"
              />
            </div>
            
            <div className="mt-12">
              <Link
                to="/practice"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Start Practicing Now
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
