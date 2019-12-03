import {useState} from 'react';

export const useLanguageState = (initialVal) => {
  const [state, setState] = useState(initialVal);
  const setLanguage = e => {
    e.stopPropagation();
    setState(e.target.textContent.toUpperCase());
  }

  return [state, setLanguage];
};
