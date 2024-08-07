import { cn } from "../../../lib/utils";

interface ProgressBarProps {
  step: string;
  progress: "1/3" | "2/3" | "3/3";
}

const ProgressBar = ({ step, progress }: ProgressBarProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-gray-1 font-medium">{step}</h3>
      <div className="bg-gray-authBg h-2 max-w-[445px] rounded-lg">
        <div
          className={cn(
            "bg-blue-link2 h-2 rounded-lg transition-all duration-75",
            {
              "w-full": progress === "3/3",
              "w-2/3": progress === "2/3",
              "w-1/3": progress === "1/3",
            }
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
