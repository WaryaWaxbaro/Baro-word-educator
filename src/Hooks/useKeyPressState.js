import { useState, useEffect } from "react";

export const useKeyPressState = initialVal => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * initialVal));

  useEffect(() => {
    let max = initialVal;
    window.addEventListener("keypress", e => {
      if (e.keyCode === 32) {
        setRandom(Math.floor(Math.random() * max));
        setTimeout(() => {
          setIsKeyPressed(false);
          // console.log("keyPressed");
        }, 500);
      }
      setIsKeyPressed(true);
      // console.log("keyPress false");
    });
  }, [initialVal]);

  return [isKeyPressed, random];
};
