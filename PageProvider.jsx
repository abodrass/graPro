import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from './StorageKey';
import * as SecureStore from 'expo-secure-store';
const PageContext = createContext();

export const PageProvider = ({ children }) => {
  // Retrieve initial value from local storage or use a default value
  const [language, setLanguage] = useState(false); // false for ENG, true for Arabic
  const [tokenFlag, setTokenFlag] = useState(false);
  const [darkMood, setDarkMood] = useState(false); // Set to true to match the stored value dark true 
  const [token, setToken] = useState(""); // Keep an empty string for token initially
  const [userRole,setUserRole]=useState();

  useEffect(() => {
    console.log("Loading values from AsyncStorage...");
  
    AsyncStorage.getItem(StorageKey.STORAGE_KEY_DARK_MODE)
      .then((storedDarkMode) => {
        console.log("Stored Dark Mode:", storedDarkMode);
        if (storedDarkMode !== null) {
          console.log(storedDarkMode);
          setDarkMood(Boolean(storedDarkMode));
        }
      })   
      .catch((error) => {
        console.error('Error loading dark mode from AsyncStorage:', error);
      });


      AsyncStorage.getItem(StorageKey.STORAGE_KEY_LANGUAGE)
      .then((storedLan) => {
        console.log("Stored language Mode:",storedLan);
        if (storedLan !== null) {
          console.log(storedLan);
          setLanguage(Boolean(storedLan));
        }
      })   
      .catch((error) => {
        console.error('Error loading Lan from AsyncStorage:', error);
      });

      
    SecureStore.getItemAsync(StorageKey.STORAGE_KEY_Role).then((storedRole)=>{
      console.log("Stored Role:", storedRole);
      if (storedRole !== null) {
        setUserRole(storedRole);
      }
    });
  
    AsyncStorage.getItem(StorageKey.STORAGE_KEY_TOKEN)
      .then((storedToken) => {
        console.log("Stored Token:", storedToken);
        if (storedToken !== null) {
          setToken(storedToken); // Don't parse as JSON
        }
      })
      .catch((error) => {
        console.error('Error loading token from AsyncStorage:', error);
      });
  }, []);

  useEffect(() => {
    console.log("saving dark mode to AsyncStorage:")
    AsyncStorage.setItem(StorageKey.STORAGE_KEY_DARK_MODE, JSON.stringify(darkMood))
      .catch((error) => {
        console.error('Error saving dark mode to AsyncStorage:', error);
      });
  }, [darkMood]);
  
  useEffect(() => {
    console.log("saving language to AsyncStorage")
    AsyncStorage.setItem(StorageKey.STORAGE_KEY_LANGUAGE, JSON.stringify(language))
      .catch((error) => {
        console.error('Error saving language to AsyncStorage:', error);
      });
  }, [language]);
  


  return (
    <PageContext.Provider value={{ darkMood, setDarkMood, language, setLanguage, tokenFlag, setTokenFlag, token, setToken,userRole,setUserRole }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
