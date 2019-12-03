import React, { createContext } from "react";
import { useLanguageState } from "../Hooks/useLanguageState";
import { languages } from "../helpers/languages";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lan, setLan] = useLanguageState('EN');

  const setOption = lang => {
    switch(lang){
      case 'EN':
        return languages[0]
      case 'FI':
        return languages[1]
      case 'SO':
        return languages[2]
      default:
        return languages[0]
    }
  }

  let currentOption = setOption(lan);
  return (
    <LanguageContext.Provider value={{setLan, currentOption, lan}}>
      {children}
    </LanguageContext.Provider>
  );
}
