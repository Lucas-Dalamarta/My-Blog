import { useState, useRef, useEffect } from "react";

interface Props {
  text: string;
}

const RandomizeTextOnHover: React.FC<Props> = ({ text }: Props) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  useEffect(() => {
    const handleMouseOver = () => {
      let iteration = 0;

      clearInterval(intervalId);

      setIntervalId(
        setInterval(() => {
          const newContent = text
            .split("")
            .map((_, index) => {
              if (index < iteration) return text[index];
              return String.fromCharCode(Math.floor(Math.random() * 26) + 65).toLocaleLowerCase();
            })
            .join("");

          if (iteration >= text.length) clearInterval(intervalId);

          iteration += 1 / 3;

          if (titleRef.current) titleRef.current.innerText = newContent;
        }, 20)
      );
    };

    if (titleRef.current) {
      titleRef.current.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      if (titleRef.current) {
        titleRef.current.removeEventListener("mouseover", handleMouseOver);
      }

      clearInterval(intervalId);
    };
  }, [text, intervalId]);

  return <span className="name" ref={titleRef}>{text}</span>;
};

export default RandomizeTextOnHover;
