import {  Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/Skills/Skills'
// import Projects from './Pages/Projects/Projects';
// import Resume from './Pages/Resume/Resume'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
        {/* <Route path='/projects' element={<Projects />} /> */}
        {/* <Route path='/resume' element={<Resume />} /> */}
      </Routes>
    </>
  );
}

export default App;
