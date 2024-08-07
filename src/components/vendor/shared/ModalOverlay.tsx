import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ModalOverlay = ({ children, onClick }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add("active-modal");
    return () => document.body.classList.remove("active-modal");
  }, []);

  return (
    <div
      className="fixed h-screen w-screen top-0 bottom-0 left-0 right-0"
      onClick={onClick}
    >
      <div className="fixed h-screen w-screen top-0 bottom-0 left-0 right-0 bg-[rgba(49,49,49,0.8)]"></div>

      {children}
    </div>
  );
};

export default ModalOverlay;
