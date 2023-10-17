import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
