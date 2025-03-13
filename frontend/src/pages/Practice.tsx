
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaskCard from "@/components/TaskCard";
import WritingTest from "@/components/WritingTest";
import { ChartBar, BookText, Headphones, BookOpen, MessageSquare, Pencil } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Practice = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Define sample tasks
  const task1Prompt = `The chart below shows the number of men and women in further education in Britain in three periods and whether they were studying full-time or part-time.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`;

  const task2Prompt = `Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations.

Discuss both these views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`;

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

  const handleFinishTest = (text: string) => {
    toast({
      title: "Jawaban tersimpan!",
      description: "Jawaban Anda telah disimpan dan dapat diakses nanti.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pb-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fadeIn">
                IELTS Practice
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 animate-slideUp">Choose Your Practice</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slideUp opacity-0" style={{ animationDelay: "100ms" }}>
                Select the IELTS skill you want to practice from the options below.
              </p>
            </div>

            {/* Skill Cards */}
            <div 
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative z-10"
            >
              <TaskCard
                title="Reading"
                description="Practice reading passages with various question types to improve your reading comprehension and speed."
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                linkTo="/reading"
                className="animate-on-scroll"
                delay={0}
              />
              
              <TaskCard
                title="Listening"
                description="Enhance your listening skills with realistic audio recordings and practice answering various question types."
                icon={<Headphones className="h-8 w-8 text-primary" />}
                linkTo="/listening"
                className="animate-on-scroll"
                delay={100}
              />
              
              <TaskCard
                title="Speaking"
                description="Prepare for the speaking interview with practice questions and tips for all three parts of the test."
                icon={<MessageSquare className="h-8 w-8 text-primary" />}
                linkTo="/speaking"
                className="animate-on-scroll"
                delay={200}
              />
              
              <TaskCard
                title="Writing Task 1"
                description="Practice describing graphs, charts, diagrams and other visual information to improve your writing skills."
                icon={<ChartBar className="h-8 w-8 text-primary" />}
                linkTo="/writing-test"
                className="animate-on-scroll"
                delay={300}
              />
              
              <TaskCard
                title="Writing Task 2"
                description="Practice writing essays on various topics to develop your argument and critical thinking skills."
                icon={<Pencil className="h-8 w-8 text-primary" />}
                linkTo="/writing-test"
                className="animate-on-scroll"
                delay={400}
              />
              
              <TaskCard
                title="Vocabulary"
                description="Build your vocabulary with essential IELTS words and phrases for all sections of the test."
                icon={<BookText className="h-8 w-8 text-primary" />}
                linkTo="/vocabulary"
                className="animate-on-scroll"
                delay={500}
              />
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/dashboard" className="text-primary hover:underline font-medium">
                View All Preparation Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Sample Test Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Try a Sample Writing Test</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience our IELTS Writing practice platform with this sample test below.
              </p>
            </div>
            
            <div className="mt-8">
              <WritingTest
                taskType="task1"
                prompt={task1Prompt}
                timeMinutes={20}
                onFinish={handleFinishTest}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Practice;
