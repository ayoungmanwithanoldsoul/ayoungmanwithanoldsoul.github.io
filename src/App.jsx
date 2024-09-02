import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Books } from "./components/Books";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import SwitchComponent from "./components/Switch";
import CursorComponent from './components/utils/CursorComponent';
import emailjs from '@emailjs/browser';
import { ThemeProvider } from './components/utils/ThemeProvider';
import { Music } from "./components/Music";


function App() {
  emailjs.init(import.meta.env.VITE_APP_PUBLIC_KEY)
  return (
    <ThemeProvider>
      <div className="App">
        <CursorComponent />
        <NavBar />
        <Banner />
        <Music />
        {/* <Skills /> */}
        <Projects />
        <Books />
        <Contact />
        <Footer />
        <SwitchComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
