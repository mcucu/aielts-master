
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, Mic, Clock, Play, ArrowRight } from "lucide-react";
import Timer from "@/components/Timer";

interface SpeakingQuestion {
  id: number;
  part: 1 | 2 | 3;
  question: string;
  followUpQuestions?: string[];
  preparationTime?: number;
  speakingTime?: number;
  sampleAnswer: string;
}

const speakingQuestions: SpeakingQuestion[] = [
  {
    id: 1,
    part: 1,
    question: "Do you work or are you a student?",
    followUpQuestions: [
      "What do you like most about your job/studies?",
      "Would you prefer to change your job/subject in the future?",
      "What are your career goals?"
    ],
    sampleAnswer: "I'm currently a student at Universitas Indonesia where I'm studying computer science. I'm in my third year of the program. I chose this field because I've always been fascinated by technology and I enjoy problem-solving."
  },
  {
    id: 2,
    part: 2,
    question: "Describe a skill that took you a long time to learn. You should say:\n- What the skill is\n- When you began learning it\n- Why you wanted to learn it\n- And explain how you felt when you finally learned it",
    preparationTime: 60,
    speakingTime: 120,
    sampleAnswer: "I'd like to talk about learning to play the guitar, which took me quite a long time to master. I started learning when I was about 15 years old after being inspired by a live concert I attended with my friends. The musician on stage made it look so effortless, and the way he connected with the audience through music was incredible.\n\nI wanted to learn the guitar because I've always loved music, and I thought it would be a great way to express myself. Additionally, I was quite shy as a teenager, and I believed that having a skill like playing an instrument might help me become more confident.\n\nLearning the guitar was much harder than I expected. At first, my fingers would hurt after practicing for just a few minutes, and I struggled to switch between chords smoothly. I practiced almost every day, starting with simple songs and gradually moving to more complex pieces. It took about two years before I felt comfortable playing in front of others.\n\nWhen I finally mastered enough skills to play complete songs fluently, I felt an immense sense of accomplishment. I remember the first time I played a song from start to finish without any mistakes – it was such a rewarding moment. Now, I enjoy playing for friends and family at gatherings, and it's become a wonderful way to relax after a busy day."
  },
  {
    id: 3,
    part: 3,
    question: "Do you think traditional skills are important in today's world?",
    followUpQuestions: [
      "Which traditional skills might be lost in the future?",
      "How can schools help to preserve traditional skills?",
      "Do you think technology has made learning skills easier or more difficult?"
    ],
    sampleAnswer: "Yes, I believe traditional skills are still quite relevant and important in today's world, despite our increasing reliance on technology. Traditional skills often represent cultural heritage and connect us to our history. Many of these skills, like cooking traditional dishes, storytelling, or certain crafts also contribute to cultural identity and diversity, which enriches our global society."
  }
];

const Speaking = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<SpeakingQuestion | null>(null);
  const [showSampleAnswer, setShowSampleAnswer] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);

  const startQuestion = (question: SpeakingQuestion) => {
    setSelectedQuestion(question);
    setShowSampleAnswer(false);
    
    if (question.preparationTime) {
      setIsPreparing(true);
      setIsTimerActive(true);
    } else {
      setIsPreparing(false);
      setIsTimerActive(true);
    }
  };

  const handlePrepTimerEnd = () => {
    setIsPreparing(false);
    setIsTimerActive(true); // Start the speaking timer
  };

  const handleSpeakingTimerEnd = () => {
    setIsTimerActive(false);
  };

  const resetPractice = () => {
    setSelectedQuestion(null);
    setShowSampleAnswer(false);
    setIsTimerActive(false);
    setIsPreparing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-semibold">IELTS Speaking Practice</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Practice your speaking skills with these sample questions from all three parts of the IELTS Speaking test.
            </p>
            
            {!selectedQuestion ? (
              <div className="space-y-8">
                {[1, 2, 3].map(part => (
                  <div key={part} className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-border/50 flex justify-between items-center">
                      <h2 className="text-xl font-medium">Part {part}</h2>
                      <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {part === 1 ? "Introduction & Interview" : part === 2 ? "Individual Long Turn" : "Two-way Discussion"}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-6">
                        {part === 1 
                          ? "The examiner will introduce themselves and ask you general questions about familiar topics."
                          : part === 2 
                          ? "You'll be given a card with a topic. You'll have 1 minute to prepare, then 2 minutes to speak."
                          : "The examiner will ask you questions related to the topic from Part 2, requiring more abstract ideas and concepts."}
                      </p>
                      
                      <div className="space-y-4">
                        {speakingQuestions.filter(q => q.part === part).map(question => (
                          <div 
                            key={question.id}
                            className="border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-secondary/30 transition-all cursor-pointer"
                            onClick={() => startQuestion(question)}
                          >
                            <div className="flex justify-between items-start">
                              <p className="font-medium">{question.question.split('\n')[0]}</p>
                              <Play className="h-5 w-5 text-primary flex-shrink-0 ml-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border/50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-medium">Part {selectedQuestion.part}</h2>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {selectedQuestion.part === 1 ? "Introduction & Interview" : selectedQuestion.part === 2 ? "Individual Long Turn" : "Two-way Discussion"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {isPreparing && selectedQuestion.preparationTime && (
                      <div className="flex items-center mr-4">
                        <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                        <span className="text-sm font-medium">Preparation: </span>
                        <Timer
                          seconds={selectedQuestion.preparationTime}
                          onTimeUp={handlePrepTimerEnd}
                          isActive={isTimerActive && isPreparing}
                        />
                      </div>
                    )}
                    
                    {!isPreparing && selectedQuestion.speakingTime && (
                      <div className="flex items-center">
                        <Mic className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm font-medium">Speaking: </span>
                        <Timer
                          seconds={selectedQuestion.speakingTime}
                          onTimeUp={handleSpeakingTimerEnd}
                          isActive={isTimerActive && !isPreparing}
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="bg-secondary/30 rounded-lg p-4 mb-6">
                    <h3 className="font-medium mb-2">Question:</h3>
                    <p className="whitespace-pre-line">{selectedQuestion.question}</p>
                  </div>
                  
                  {selectedQuestion.followUpQuestions && (
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Follow-up Questions:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedQuestion.followUpQuestions.map((q, index) => (
                          <li key={index}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-3 mt-8">
                    <button
                      onClick={() => setShowSampleAnswer(!showSampleAnswer)}
                      className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors"
                    >
                      {showSampleAnswer ? "Hide Sample Answer" : "Show Sample Answer"}
                    </button>
                    
                    <button
                      onClick={resetPractice}
                      className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors flex items-center"
                    >
                      Try Another Question
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                  
                  {showSampleAnswer && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h3 className="font-medium mb-2 text-green-700">Sample Answer:</h3>
                      <p className="text-green-800 whitespace-pre-line">{selectedQuestion.sampleAnswer}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Speaking;
