
import { useState, useRef, useEffect } from "react";
import { Save, Check, Clock, BookOpen } from "lucide-react";
import Timer from "./Timer";
import { useToast } from "@/components/ui/use-toast";

interface WritingTestProps {
  taskType: 'task1' | 'task2';
  prompt: string;
  timeMinutes: number;
  onFinish?: (text: string) => void;
}

const WritingTest = ({ taskType, prompt, timeMinutes, onFinish }: WritingTestProps) => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [showTips, setShowTips] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Calculate word count
    const words = text.trim().split(/\s+/).filter(word => word !== "");
    setWordCount(words.length);
  }, [text]);

  useEffect(() => {
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleTimeUp = () => {
    toast({
      title: "Waktu habis!",
      description: "Waktu untuk menulis telah habis. Jawaban Anda telah disimpan.",
      duration: 5000,
    });
    handleSave();
  };

  const handleSave = () => {
    localStorage.setItem(`ielts-${taskType}-draft`, text);
    setIsSaved(true);
    toast({
      title: "Tersimpan!",
      description: "Jawaban Anda telah disimpan.",
      duration: 3000,
    });
    setTimeout(() => setIsSaved(false), 3000);

    if (onFinish) {
      onFinish(text);
    }
  };

  const getWordCountColor = () => {
    const minWords = taskType === 'task1' ? 150 : 250;
    
    if (wordCount < minWords * 0.8) return "text-red-500";
    if (wordCount < minWords) return "text-yellow-500";
    return "text-green-500";
  };

  const tips = {
    task1: [
      "Tulisan Anda harus minimal 150 kata.",
      "Jelaskan data utama dan tren yang signifikan.",
      "Jangan memberi pendapat pribadi untuk Task 1.",
      "Gunakan variasi kata dan struktur kalimat.",
      "Bagi tulisan menjadi paragraf yang jelas.",
    ],
    task2: [
      "Tulisan Anda harus minimal 250 kata.",
      "Nyatakan posisi Anda dengan jelas di paragraf pembuka.",
      "Dukung argumen dengan contoh spesifik.",
      "Buat kesimpulan yang singkat dan kuat.",
      "Pastikan tata bahasa dan kosakata beragam.",
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden transition-all duration-300">
      <div className="p-6 border-b border-border/50 flex justify-between items-center">
        <div>
          <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
            {taskType === 'task1' ? 'Task 1' : 'Task 2'}
          </span>
          <h2 className="text-xl font-medium mt-2">Writing {taskType === 'task1' ? 'Task 1' : 'Task 2'}</h2>
        </div>
        <Timer minutes={timeMinutes} onTimeUp={handleTimeUp} />
      </div>

      <div className="p-6 border-b border-border/50 bg-secondary/50">
        <div className="flex items-start space-x-2">
          <div className="mt-1">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium mb-2">Instruksi:</h3>
            <p className="text-foreground/90 whitespace-pre-line">{prompt}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Mulai menulis di sini..."
          className="w-full min-h-[300px] p-4 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 resize-none bg-background"
        />

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              Sisa waktu: <span className="font-medium">{timeMinutes} menit</span>
            </span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className={`text-sm font-medium ${getWordCountColor()}`}>
              {wordCount} kata
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowTips(!showTips)}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              {showTips ? "Sembunyikan Tips" : "Tampilkan Tips"}
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors flex items-center"
            >
              {isSaved ? (
                <>
                  <Check className="mr-1 h-4 w-4" /> Tersimpan
                </>
              ) : (
                <>
                  <Save className="mr-1 h-4 w-4" /> Simpan
                </>
              )}
            </button>
          </div>
        </div>

        {showTips && (
          <div className="mt-6 p-4 rounded-lg border border-border bg-secondary/50 animate-fadeIn">
            <h4 className="font-medium mb-2">Tips Menulis:</h4>
            <ul className="space-y-1 text-sm">
              {tips[taskType].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritingTest;
