import { Label } from "../ui/label";
import RequiredIndicator from "../ui/requiredIndicator";

const FormLabel = ({ text, htmlFor }: { text: string; htmlFor?: string }) => {
  return (
    <Label className="text-sm leading-tiny text-gray-1" htmlFor={htmlFor}>
      {text} <RequiredIndicator />
    </Label>
  );
};

export default FormLabel;
