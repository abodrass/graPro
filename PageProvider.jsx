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
  const [headerTitel,setHeaderTitel]=useState("main page");
  const [showDelete, setShowDelete] = useState(false); // Keep an empty string for token initially
  const [appotmentId,setappotmentId]=useState();
  const [changeAprvelApp,setchangeAprvelApp]=useState(false);
  useEffect(() => {
    console.log("Loading values from AsyncStorage...");
  
    AsyncStorage.getItem(StorageKey.STORAGE_KEY_DARK_MODE)
      .then((storedDarkMode) => {
        console.log("Stored Dark Mode:", storedDarkMode);
        if (storedDarkMode !== null) {
          console.log(storedDarkMode);
          setDarkMood(JSON.parse(storedDarkMode));
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
          setLanguage(JSON.parse(storedLan));
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



  return (
    <PageContext.Provider value={{ darkMood, setDarkMood, language, setLanguage, tokenFlag, setTokenFlag, token, setToken,userRole,setUserRole,appotmentId,setappotmentId,showDelete, setShowDelete,changeAprvelApp,setchangeAprvelApp ,headerTitel,setHeaderTitel}}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
