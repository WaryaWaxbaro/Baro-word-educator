import {useState, useEffect} from 'react';

export const useKeyPressState = initialVal => {
  let val = initialVal;
  const [random, setRandom] = useState(2);
  const [currentVal, setCurrentVal] = useState(random);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const spaceKeyPress = () => {
      window.addEventListener('keypress', e => {
        if(e.keyCode === 32){
          //Set a random number
          setRandom(() => {
            let newRan = random;
            console.log('initial val', newRan);
            try {
              //Try not to have previous random number to same again
              while(newRan === random){
                newRan = Math.floor(Math.random() * val);
                //console.log('new ran', newRan, ' old ran ', random);
              }
            }
            catch(e){
              newRan = Math.floor(Math.random() * val);
              //console.log('inside catch random ', newRan);
            }
            console.log('final val ', newRan);
            return newRan;
          });
          console.log('key pressed');
        }
      });
    }

    spaceKeyPress();
  }, []);

  return [random];
}