
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PreparationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  className?: string;
  className2?: string;
  delay?: number;
}

const PreparationCard = ({
  title,
  description,
  icon,
  linkTo,
  className,
  className2 = "",
  delay = 0
}: PreparationCardProps) => {
  return (
    <div 
      className={cn(
        "opacity-0 translate-y-10 transition-all duration-500 ease-out rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-md h-full",
        className,
        className2
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground flex-grow text-sm">{description}</p>
        <div className="mt-4">
          <Link
            to={linkTo}
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreparationCard;
