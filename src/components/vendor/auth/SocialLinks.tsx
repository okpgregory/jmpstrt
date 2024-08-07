import React from "react";
import Button from "../shared/Button";
import OrLine from "../shared/OrLine";

const socials = [
  { icon: "/svgs/socials/google.svg", name: "Google" },
  { icon: "/svgs/socials/facebook.svg", name: "Facebook" },
  { icon: "/svgs/socials/apple.svg", name: "Apple" },
];

const SocialLinks: React.FC = () => {
  return (
    <>
      <OrLine />
      <div className="flex flex-col space-y-3">
        {socials.map((social) => (
          <Button
            key={social.name}
            variant="links"
            className="flex items-center justify-center gap-4"
          >
            <img src={social.icon} alt={social.name} />
            <span>Sign up with {social.name}</span>
          </Button>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
