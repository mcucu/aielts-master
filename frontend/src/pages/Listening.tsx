
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Headphones, Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const listeningTest = {
  title: "IELTS Listening Practice Test - Conversation About Campus Facilities",
  audioSrc: "#", // Placeholder since we don't have actual audio files in this project
  transcript: `Woman: Excuse me, I'm new here. Could you tell me where I can find the main library?

Man: Oh, sure. The main library is in the Thompson Building. That's the large building with the glass front on the east side of campus.

Woman: Thanks. And do you know what time it opens?

Man: The library is open from 8 AM to midnight on weekdays, and from 10 AM to 10 PM on weekends.

Woman: That's good to know. I'll be doing a lot of evening study. Are there any quiet study areas within the library?

Man: Yes, there are several. The third floor is a designated quiet zone with individual study carrels. There's also a silent reading room on the second floor.

Woman: Perfect. And what about computing facilities? I don't have a laptop yet.

Man: The library has a computer lab on the first floor with about 50 workstations. They're available on a first-come, first-served basis. There's also a smaller lab on the fourth floor that's usually less busy.

Woman: Great. One more thing - is there a café in the library? I tend to study for long periods.

Man: Yes, there's a small café on the ground floor. They serve coffee, snacks, and sandwiches. It closes at 9 PM though, earlier than the library itself.

Woman: That sounds perfect. Thanks for your help!

Man: No problem. Good luck with your studies!`,
  questions: [
    {
      id: 1,
      question: "Where is the main library located?",
      options: [
        "In the Smith Building",
        "On the west side of campus",
        "In the Thompson Building",
        "Near the science labs"
      ],
      answer: 2
    },
    {
      id: 2,
      question: "What are the library's opening hours on weekends?",
      options: [
        "8 AM to midnight",
        "10 AM to 10 PM",
        "9 AM to 9 PM",
        "10 AM to midnight"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Which floor has individual study carrels?",
      options: [
        "First floor",
        "Second floor",
        "Third floor",
        "Fourth floor"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Where is the smaller computer lab located?",
      options: [
        "Ground floor",
        "First floor",
        "Third floor",
        "Fourth floor"
      ],
      answer: 3
    }
  ]
};

const Listening = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    listeningTest.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.answer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-semibold">IELTS Listening Practice</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Practice your listening skills with this sample conversation. Listen carefully and answer the questions below.
            </p>
            
            <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden mb-10">
              <div className="p-6 border-b border-border/50">
                <h2 className="text-xl md:text-2xl font-medium">{listeningTest.title}</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-md bg-secondary/50 rounded-xl p-4 flex flex-col items-center">
                    <div className="flex justify-center mb-4">
                      <button 
                        onClick={togglePlay}
                        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                      >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </button>
                    </div>
                    
                    <div className="w-full flex items-center gap-3 mb-2">
                      <button onClick={toggleMute} className="text-muted-foreground hover:text-foreground">
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </button>
                      <Slider
                        value={[volume]}
                        max={100}
                        step={1}
                        onValueChange={handleVolumeChange}
                        disabled={isMuted}
                        className="flex-grow"
                      />
                      <span className="text-xs text-muted-foreground w-8">{volume}%</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Note: Actual audio would play here in a real test
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="mt-6 text-sm text-primary hover:underline"
                  >
                    {showTranscript ? "Hide Transcript" : "Show Transcript (for practice only)"}
                  </button>
                  
                  {showTranscript && (
                    <div className="mt-4 p-4 bg-secondary/30 rounded-xl border border-border/50 w-full">
                      <h3 className="font-medium mb-2">Transcript:</h3>
                      <p className="whitespace-pre-line text-sm">{listeningTest.transcript}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-xl font-medium">Questions</h3>
              
              {listeningTest.questions.map((question) => (
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
                    You got <span className="font-bold text-primary">{calculateScore()}</span> out of {listeningTest.questions.length} questions correct.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Continue practicing to improve your listening skills. Try more audio samples to prepare for your IELTS exam.
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

export default Listening;
