import Button from "./Button";
import PageSubTitleTwo from "./PageSubTitleTwo";
import PageTitleTwo from "./PageTitleTwo";

interface ModalProps {
  buttonClasses: string;
  buttonText: string;
  titleText: string;
  subText: string;
  onClick: () => void;
}

const Modal = ({
  buttonClasses,
  buttonText,
  titleText,
  subText,
  onClick,
}: ModalProps) => {
  return (
    <div className="absolute py-14 px-4 flex flex-col items-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[430px] max-h-[428px] rounded-[17px] bg-white">
      <img
        src="/svgs/successful.gif"
        alt="successful"
        className="w-[124px] h-[124px] object-contain"
      />
      <PageTitleTwo text={titleText} className="text-center" />
      <PageSubTitleTwo>{subText}</PageSubTitleTwo>
      <Button onClick={onClick} className={buttonClasses}>
        {buttonText}
      </Button>
      <button className="absolute right-8 top-8" onClick={onClick}>
        <img src="/svgs/close.svg" alt="close" />
      </button>
    </div>
  );
};

export default Modal;
