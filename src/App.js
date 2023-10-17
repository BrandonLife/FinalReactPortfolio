import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Projects from './views/Projects';
import Contact from './views/Contact';
import NewCard from './views/newCard';
import ErrorPage from './views/errorPage';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
    <Header/>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/new' element={<NewCard/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
