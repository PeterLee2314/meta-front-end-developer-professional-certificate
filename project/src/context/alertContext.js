import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
    details: '',
    date: '',
    time: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message, details, date, time) => setState({ isOpen: true, type, message, details, date, time}),
        onClose: () => setState({ isOpen: false, type: '', message: '', details:''}),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
