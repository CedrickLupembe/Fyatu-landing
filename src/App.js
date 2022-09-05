import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'


import GlobalStyle from './styles/GlobalStyle'

// Import pages
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import About from './pages/About/About';

function App() {

  // Hamburger menu state 
  const [open, setOpen] = useState(false)


  return (
    <div className="App">

      <GlobalStyle />
      <Menu open={open} setOpen={setOpen} />

      <Routes>
        <Route path='/' element={<Home open={open} setOpen={setOpen}/>} />
        <Route path='about' element={<About open={open} setOpen={setOpen}/>} />
      </Routes>

    </div>
  );
}

export default App;
