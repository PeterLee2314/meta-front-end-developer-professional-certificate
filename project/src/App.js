import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./components/Header";
import Main from "./components/Main";
import Meta from "./components/Meta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import './App.css';
import { AlertProvider } from "./context/alertContext";
import Alert from './components/Alert';

function App() {
  return (
  <ChakraProvider>
    <AlertProvider>
      <Main />
      <Meta />
      <Header />
      <Hero />
      <Highlights />
      <Footer />
      <Alert />
    </AlertProvider>
  </ChakraProvider>
  );
}

export default App;
