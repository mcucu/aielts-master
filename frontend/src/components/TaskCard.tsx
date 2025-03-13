
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface TaskCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  className?: string;
  delay?: number;
}

const TaskCard = ({
  title,
  description,
  icon,
  linkTo,
  className,
  delay = 0
}: TaskCardProps) => {
  return (
    <div 
      className={cn(
        "opacity-0 translate-y-10 transition-all duration-500 ease-out rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-md",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl md:text-2xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <div className="mt-6">
          <Link
            to={linkTo}
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Mulai Latihan
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
