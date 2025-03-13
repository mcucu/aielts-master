
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, BookOpen, Pencil } from "lucide-react";
import WritingTest from "@/components/WritingTest";

const WritingTestForm = () => {
  const [formStep, setFormStep] = useState<'select' | 'test'>('select');
  const [selectedTask, setSelectedTask] = useState<'task1' | 'task2' | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleTaskSelection = (task: 'task1' | 'task2') => {
    setSelectedTask(task);
    setFormStep('test');
    
    // Scroll to top when changing to test mode
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinish = (text: string) => {
    toast({
      title: "Test Completed!",
      description: `Your ${selectedTask === 'task1' ? 'Task 1' : 'Task 2'} response has been saved.`,
      duration: 5000,
    });
    
    // Store completed test in localStorage for practice
    if (selectedTask) {
      localStorage.setItem(`ielts-${selectedTask}-submission`, text);
      localStorage.setItem(`ielts-${selectedTask}-completed`, new Date().toISOString());
    }
    
    // Navigate back to selection after a brief delay
    setTimeout(() => {
      setFormStep('select');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleBack = () => {
    setFormStep('select');
    setSelectedTask(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Task prompts
  const task1Prompt = `The chart below shows the number of men and women in further education in Britain in three periods and whether they were studying full-time or part-time.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`;

  const task2Prompt = `Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations.

Discuss both these views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {formStep === 'select' ? (
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-semibold mb-6">IELTS Writing Test</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Select which IELTS writing task you would like to practice today.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Task 1 Selection Card */}
                <div 
                  className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => handleTaskSelection('task1')}
                >
                  <div className="p-6 border-b border-border/50 flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        Task 1
                      </span>
                      <h2 className="text-xl font-medium mt-2">Academic Writing Task 1</h2>
                    </div>
                    <BookOpen className="h-8 w-8 text-primary/70" />
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Describe, summarize or explain visual information (graph, table, chart, or diagram).
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      <span>20 minutes</span>
                      <span className="mx-2">•</span>
                      <span>150+ words</span>
                    </div>
                  </div>
                </div>

                {/* Task 2 Selection Card */}
                <div 
                  className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => handleTaskSelection('task2')}
                >
                  <div className="p-6 border-b border-border/50 flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        Task 2
                      </span>
                      <h2 className="text-xl font-medium mt-2">Academic Writing Task 2</h2>
                    </div>
                    <Pencil className="h-8 w-8 text-primary/70" />
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Write an essay in response to a point of view, argument or problem.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      <span>40 minutes</span>
                      <span className="mx-2">•</span>
                      <span>250+ words</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-8 flex items-center">
                <button 
                  onClick={handleBack}
                  className="text-sm font-medium px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  Back to Selection
                </button>
                <h1 className="text-2xl font-semibold ml-4">
                  IELTS Writing {selectedTask === 'task1' ? 'Task 1' : 'Task 2'}
                </h1>
              </div>
              
              <WritingTest 
                taskType={selectedTask as 'task1' | 'task2'} 
                prompt={selectedTask === 'task1' ? task1Prompt : task2Prompt}
                timeMinutes={selectedTask === 'task1' ? 20 : 40}
                onFinish={handleFinish}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WritingTestForm;
