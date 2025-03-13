
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookText, Search, Check, X } from "lucide-react";

interface VocabularyWord {
  id: number;
  word: string;
  definition: string;
  example: string;
  category: string;
}

const vocabularyWords: VocabularyWord[] = [
  {
    id: 1,
    word: "Controversial",
    definition: "Giving rise or likely to give rise to controversy or public disagreement.",
    example: "The government's policy on immigration has been highly controversial.",
    category: "Writing"
  },
  {
    id: 2,
    word: "Prosperity",
    definition: "The state of being prosperous; success or wealth.",
    example: "The country has enjoyed a long period of economic prosperity.",
    category: "Writing"
  },
  {
    id: 3,
    word: "Consensus",
    definition: "General agreement or concord.",
    example: "There is a growing consensus that climate change requires urgent action.",
    category: "Writing"
  },
  {
    id: 4,
    word: "Phenomenon",
    definition: "A fact or situation that is observed to exist or happen.",
    example: "The phenomenon of global warming has been extensively researched.",
    category: "Writing"
  },
  {
    id: 5,
    word: "Inevitable",
    definition: "Certain to happen; unavoidable.",
    example: "The decline of traditional industries seems inevitable.",
    category: "Writing"
  },
  {
    id: 6,
    word: "Dilemma",
    definition: "A situation in which a difficult choice has to be made between two or more alternatives.",
    example: "The government faces a dilemma over whether to increase taxes or cut public services.",
    category: "Speaking"
  },
  {
    id: 7,
    word: "Accommodate",
    definition: "Provide lodging or sufficient space for; adapt or harmonize.",
    example: "The hotel can accommodate up to 500 guests.",
    category: "Speaking"
  },
  {
    id: 8,
    word: "Elaborate",
    definition: "Involving many carefully arranged parts or details; to develop or present in further detail.",
    example: "Could you elaborate on your reasons for wanting this job?",
    category: "Speaking"
  },
  {
    id: 9,
    word: "Significant",
    definition: "Sufficiently great or important to be worthy of attention; notable.",
    example: "There has been a significant increase in the number of women in senior management positions.",
    category: "Reading"
  },
  {
    id: 10,
    word: "Sustainable",
    definition: "Able to be maintained at a certain rate or level; conserving an ecological balance.",
    example: "Sustainable development is essential for protecting the environment.",
    category: "Reading"
  },
  {
    id: 11,
    word: "Comprehensive",
    definition: "Including or dealing with all or nearly all elements or aspects of something.",
    example: "The book provides a comprehensive introduction to the subject.",
    category: "Reading"
  },
  {
    id: 12,
    word: "Substantial",
    definition: "Of considerable importance, size, or worth.",
    example: "They've made substantial progress in reducing crime.",
    category: "Listening"
  },
  {
    id: 13,
    word: "Clarification",
    definition: "The action of making a statement or situation less confused and more comprehensible.",
    example: "I'd like to ask for clarification on a few points.",
    category: "Listening"
  },
  {
    id: 14,
    word: "Beneficial",
    definition: "Resulting in good; favorable or advantageous.",
    example: "Regular exercise is beneficial for your health.",
    category: "Listening"
  },
  {
    id: 15,
    word: "Initiative",
    definition: "The ability to assess and initiate things independently; an act or strategy intended to resolve a difficulty or improve a situation.",
    example: "The government has announced a new initiative to reduce unemployment.",
    category: "General"
  }
];

const categories = ["All", "Writing", "Speaking", "Reading", "Listening", "General"];

const Vocabulary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredWords, setFilteredWords] = useState<VocabularyWord[]>(vocabularyWords);
  const [testWords, setTestWords] = useState<VocabularyWord[]>([]);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isTestMode, setIsTestMode] = useState(false);
  const [testScore, setTestScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    let result = vocabularyWords;
    
    if (selectedCategory !== "All") {
      result = result.filter(word => word.category === selectedCategory);
    }
    
    if (searchTerm) {
      const termLower = searchTerm.toLowerCase();
      result = result.filter(word => 
        word.word.toLowerCase().includes(termLower) || 
        word.definition.toLowerCase().includes(termLower)
      );
    }
    
    setFilteredWords(result);
  }, [searchTerm, selectedCategory]);

  const startTest = () => {
    // Randomly select 5 words from the filtered list
    const shuffled = [...filteredWords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setTestWords(selected);
    setCurrentTestIndex(0);
    setIsTestMode(true);
    setUserAnswer("");
    setIsCorrect(null);
    setTestScore({ correct: 0, total: 0 });
  };

  const checkAnswer = () => {
    const current = testWords[currentTestIndex];
    const isMatch = userAnswer.toLowerCase() === current.word.toLowerCase();
    setIsCorrect(isMatch);
    
    if (isMatch) {
      setTestScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    }
    
    setTestScore(prev => ({ ...prev, total: prev.total + 1 }));
  };

  const nextQuestion = () => {
    if (currentTestIndex < testWords.length - 1) {
      setCurrentTestIndex(prev => prev + 1);
      setUserAnswer("");
      setIsCorrect(null);
    } else {
      // End of test
      setIsTestMode(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookText className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-semibold">IELTS Vocabulary</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Expand your vocabulary with these essential IELTS words and phrases. Use the filters to find words by category.
            </p>
            
            {!isTestMode ? (
              <>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search words..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full h-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                          selectedCategory === category 
                            ? "bg-primary text-white" 
                            : "bg-secondary text-foreground hover:bg-primary/10"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredWords.length} words
                  </p>
                  <button
                    onClick={startTest}
                    disabled={filteredWords.length < 5}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Test Your Vocabulary
                  </button>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredWords.map(word => (
                    <div key={word.id} className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
                      <div className="p-4 border-b border-border/50 flex justify-between items-center">
                        <h3 className="font-medium">{word.word}</h3>
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          {word.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <p className="text-sm mb-3">
                          <span className="font-medium">Definition:</span> {word.definition}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Example:</span> {word.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {filteredWords.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No words found matching your criteria.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border/50">
                  <h2 className="text-xl font-medium">Vocabulary Test</h2>
                  <p className="text-sm text-muted-foreground">
                    Read the definition and type the correct word.
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Question {currentTestIndex + 1} of {testWords.length}
                      </span>
                      <span className="text-sm font-medium">
                        Score: {testScore.correct}/{testScore.total}
                      </span>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentTestIndex + 1) / testWords.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary/30 rounded-lg p-4 mb-6">
                    <h3 className="font-medium mb-2">Definition:</h3>
                    <p>{testWords[currentTestIndex]?.definition}</p>
                    
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Example:</h3>
                      <p className="text-muted-foreground">
                        {testWords[currentTestIndex]?.example.replace(
                          testWords[currentTestIndex]?.word, 
                          "________"
                        )}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="answer" className="block text-sm font-medium mb-2">Your Answer:</label>
                    <input
                      id="answer"
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      disabled={isCorrect !== null}
                      className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      placeholder="Type the word..."
                    />
                  </div>
                  
                  {isCorrect === null ? (
                    <button
                      onClick={checkAnswer}
                      disabled={!userAnswer.trim()}
                      className="w-full px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <div>
                      <div className={`p-4 rounded-lg mb-4 flex items-center ${
                        isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                      }`}>
                        {isCorrect ? (
                          <>
                            <Check className="h-5 w-5 mr-2 text-green-600" />
                            <span>Correct! Well done.</span>
                          </>
                        ) : (
                          <>
                            <X className="h-5 w-5 mr-2 text-red-600" />
                            <span>
                              Incorrect. The correct word is <strong>{testWords[currentTestIndex].word}</strong>.
                            </span>
                          </>
                        )}
                      </div>
                      
                      <button
                        onClick={nextQuestion}
                        className="w-full px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        {currentTestIndex < testWords.length - 1 ? "Next Question" : "Finish Test"}
                      </button>
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

export default Vocabulary;
