
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimerProps {
  minutes: number;
  onTimeUp?: () => void;
  className?: string;
}

const Timer = ({ minutes, onTimeUp, className }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && onTimeUp) {
      onTimeUp();
    }
    
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(minutes * 60);
  };

  const getProgressColor = () => {
    const totalSeconds = minutes * 60;
    const percentage = (timeLeft / totalSeconds) * 100;
    
    if (percentage > 50) return "bg-green-500";
    if (percentage > 20) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-full bg-secondary rounded-full h-2.5 mb-2 overflow-hidden">
        <div 
          className={`h-2.5 rounded-full transition-all duration-1000 ease-linear ${getProgressColor()}`}
          style={{ width: `${(timeLeft / (minutes * 60)) * 100}%` }}
        ></div>
      </div>
      
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-lg font-mono font-medium">
            {formatTime(timeLeft)}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={handleToggle}
            className="text-xs px-3 py-1 rounded-full border border-border font-medium hover:bg-secondary transition-colors"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={handleReset}
            className="text-xs px-3 py-1 rounded-full border border-border font-medium hover:bg-secondary transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
