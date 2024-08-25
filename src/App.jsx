import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Books } from "./components/Books";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import SwitchComponent from "./components/SwitchComponent";
import CursorComponent from './components/utils/CursorComponent';
import emailjs from '@emailjs/browser';


function App() {
  emailjs.init(import.meta.env.VITE_APP_PUBLIC_KEY)
  return (
    <div className="App">
      <CursorComponent />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Books />
      <Contact />
      <Footer />
      <SwitchComponent />
    </div>
  );
}

export default App;
