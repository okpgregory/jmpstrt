import { LoaderCircle } from "lucide-react";

interface ModalProps {
  verifyingText: string;
}

const VerificationModal = ({ verifyingText }: ModalProps) => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[rgb(31,31,31)] p-10 flex flex-col gap-[21px] items-center justify-center rounded-2xl h-[193px] w-[233px]">
      <LoaderCircle size={32} className="animate-spin text-gray-3" />
      <p className="text-sm leading-[19.6px] text-white whitespace-nowrap">
        {verifyingText}
      </p>
    </div>
  );
};

export default VerificationModal;
