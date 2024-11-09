// components/TypingEffect.tsx
import React, { useEffect, useState } from 'react';

type TypingEffectProps = {
  texts: string[];    // Array of texts to type
  typingSpeed?: number; // Speed of typing in ms (optional)
  deletingSpeed?: number; // Speed of deleting in ms (optional)
  pauseTime?: number;   // Pause between texts in ms (optional)
};

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseTime = 1000,
  

}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
      // Typing in
      setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting out
      setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (charIndex === currentText.length) {
      // Text fully typed, start deleting after a pause
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      // Text fully deleted, move to next text
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }
  }, [charIndex, isDeleting, texts, textIndex, typingSpeed, deletingSpeed, pauseTime]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
