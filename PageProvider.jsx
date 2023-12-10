import { createContext, useContext, useState, useEffect } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const isBrowser = typeof window !== 'undefined';

  // Retrieve initial value from local storage or use a default value
 
  const [darkMood, setDarkMood] = useState(false);
  const [language,setLanguage]=useState(false); //false ENG true arabic
  // Update local storage whenever darkMode changes (only on the client side)
  useEffect(() => {
    if (isBrowser) {
      
    }
  }, [darkMood, isBrowser]);

  return (
    <PageContext.Provider value={{ darkMood, setDarkMood ,language,setLanguage}}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
