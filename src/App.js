import './App.css';
import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
