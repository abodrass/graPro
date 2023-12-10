import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_DARK_MODE = 'darkMode';
const STORAGE_KEY_LANGUAGE = 'language';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const isBrowser = typeof window !== 'undefined';

  // Retrieve initial value from local storage or use a default value
  const [darkMood, setDarkMood] = useState(false);
  const [language, setLanguage] = useState(false); //false ENG true arabic

  useEffect(() => {
    if (isBrowser) {
      // Load stored dark mode value
      AsyncStorage.getItem(STORAGE_KEY_DARK_MODE).then((storedDarkMode) => {
        if (storedDarkMode !== null) {
          setDarkMood(JSON.parse(storedDarkMode));
        }
      });

      // Load stored language value
      AsyncStorage.getItem(STORAGE_KEY_LANGUAGE).then((storedLanguage) => {
        if (storedLanguage !== null) {
          setLanguage(JSON.parse(storedLanguage));
        }
      });
    }
  }, [isBrowser]);

  // Update local storage whenever darkMode or language changes (only on the client side)
  useEffect(() => {
    if (isBrowser) {
      AsyncStorage.setItem(STORAGE_KEY_DARK_MODE, JSON.stringify(darkMood));
      AsyncStorage.setItem(STORAGE_KEY_LANGUAGE, JSON.stringify(language));
    }
  }, [darkMood, language, isBrowser]);

  return (
    <PageContext.Provider value={{ darkMood, setDarkMood, language, setLanguage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
