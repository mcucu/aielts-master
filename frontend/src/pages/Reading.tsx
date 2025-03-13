
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight } from "lucide-react";

const ReadingPassage = {
  title: "The Impact of Climate Change on Marine Ecosystems",
  content: `Climate change is having a profound effect on marine ecosystems around the world. Rising sea temperatures, ocean acidification, and changing currents are disrupting the delicate balance of life in our oceans.

Coral reefs, often called the rainforests of the sea, are particularly vulnerable to these changes. When water temperatures rise even slightly above normal levels, corals expel the algae living within their tissues, causing them to turn white – a phenomenon known as coral bleaching. Without these algae, which provide corals with nutrients and their vibrant colors, the corals often die.

Ocean acidification, caused by increased carbon dioxide absorption, makes it difficult for shell-forming organisms like oysters, clams, and some plankton to build their calcium carbonate structures. As these species form the base of many marine food webs, their decline can have cascading effects throughout entire ecosystems.

Changes in ocean currents due to warming waters are also altering the distribution of marine species. Some fish populations are moving toward the poles in search of cooler waters, disrupting fishing industries and the communities that depend on them.

Despite these challenges, there are reasons for hope. Marine protected areas, sustainable fishing practices, and carbon emission reductions can all help marine ecosystems adapt to changing conditions. Marine organisms have shown remarkable resilience when given the opportunity to recover from stress.

Scientists are working to identify marine species that may be more adaptable to changing conditions and to understand how these "winners" of climate change might help maintain ecosystem functions. Additionally, restoration efforts for key habitats like coral reefs, seagrass beds, and mangroves can improve the overall health and resilience of marine ecosystems.

The fate of our oceans – and the services they provide, from food production to carbon sequestration – depends on our ability to mitigate climate change and help marine ecosystems adapt to the changes already underway.`,
  questions: [
    {
      id: 1,
      question: "According to the passage, why are coral reefs particularly vulnerable to climate change?",
      options: [
        "They are located in shallow waters.",
        "They expel algae when water temperatures rise.",
        "They cannot move to cooler waters.",
        "They are overharvested by humans."
      ],
      answer: 1
    },
    {
      id: 2,
      question: "What effect does ocean acidification have on shell-forming organisms?",
      options: [
        "It makes them grow faster.",
        "It changes their color.",
        "It makes shell formation more difficult.",
        "It forces them to migrate."
      ],
      answer: 2
    },
    {
      id: 3,
      question: "The passage suggests that some fish populations are:",
      options: [
        "Increasing in number.",
        "Moving toward the poles.",
        "Becoming extinct.",
        "Adapting to warmer waters."
      ],
      answer: 1
    }
  ]
};

const Reading = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    ReadingPassage.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.answer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-semibold">IELTS Reading Practice</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Practice your reading skills with this sample passage and questions. Read carefully and answer the questions below.
            </p>
            
            <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden mb-10">
              <div className="p-6 border-b border-border/50">
                <h2 className="text-xl md:text-2xl font-medium">{ReadingPassage.title}</h2>
              </div>
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{ReadingPassage.content}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-xl font-medium">Questions</h3>
              
              {ReadingPassage.questions.map((question) => (
                <div key={question.id} className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
                  <div className="p-6">
                    <p className="font-medium mb-4">{question.id}. {question.question}</p>
                    <div className="space-y-3">
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          onClick={() => !showResults && handleAnswerSelect(question.id, index)}
                          className={`p-3 rounded-lg border cursor-pointer transition-all ${
                            selectedAnswers[question.id] === index 
                              ? "border-primary bg-primary/5" 
                              : "border-border hover:border-primary/50 hover:bg-secondary"
                          } ${
                            showResults && selectedAnswers[question.id] === index && question.answer === index 
                              ? "bg-green-50 border-green-500" 
                              : showResults && selectedAnswers[question.id] === index && question.answer !== index 
                              ? "bg-red-50 border-red-500" 
                              : showResults && index === question.answer 
                              ? "bg-green-50 border-green-500" 
                              : ""
                          }`}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                              selectedAnswers[question.id] === index 
                                ? "bg-primary text-white" 
                                : "bg-secondary text-foreground"
                            }`}>
                              <span className="text-xs">{String.fromCharCode(65 + index)}</span>
                            </div>
                            <span>{option}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {!showResults ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 mt-6 flex items-center"
                >
                  Submit Answers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              ) : (
                <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden p-6 mt-6">
                  <h3 className="text-xl font-medium mb-3">Results</h3>
                  <p className="text-lg">
                    You got <span className="font-bold text-primary">{calculateScore()}</span> out of {ReadingPassage.questions.length} questions correct.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Continue practicing to improve your reading skills. Try more passages to prepare for your IELTS exam.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reading;
