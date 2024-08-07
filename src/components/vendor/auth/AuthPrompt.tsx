interface AuthPromptProps {
  text: string;
  link: string;
  linkText: string;
}

const AuthPrompt = ({ text, link, linkText }: AuthPromptProps) => {
  return (
    <p className="text-gray-1">
      {text}{" "}
      <a href={link} className="text-blue-link">
        {linkText}
      </a>
    </p>
  );
};

export default AuthPrompt;
