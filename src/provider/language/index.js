import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(true);

  const translate = () => {
    setLanguage(!language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
