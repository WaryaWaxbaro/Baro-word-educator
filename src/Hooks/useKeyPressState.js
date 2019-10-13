import {useState, useEffect} from 'react';

export default function useKeyPressState(randomValue) {
  const [state, setState] = useState(false);
  const [random, setRand] = useState(Math.floor(Math.random() * randomValue));
  
  useEffect(() => {
    let randomItems = randomValue;

    const avoidDuplicates = (random) => {
      let newRa = Math.floor(Math.random() * randomItems);
      while(random === newRa){
        newRa = Math.floor(Math.random() * randomItems);
      }
  
      return newRa;
    };

    window.addEventListener('keypress', e => {
      if(e.keyCode === 32){
        setTimeout(() => {
          setState(false);
        }, 500);
        setState(true);
        let num = Math.floor(Math.random() * randomItems);
        let newRandomVal = avoidDuplicates(num);
        setRand(newRandomVal);
        // console.log('randoom ', num);
        console.log('new random ', newRandomVal);
      }
    });
  }, []);

  return [state, random];
}