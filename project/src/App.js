import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./components/Header";
import Main from "./components/Main";
import Meta from "./components/Meta";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
  <ChakraProvider>
    <Main />
    <Meta />
    <Nav />
    <Header />
    <Footer />
  </ChakraProvider>
  );
}

export default App;
