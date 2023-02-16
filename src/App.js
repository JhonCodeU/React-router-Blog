import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Styled from 'styled-components';

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>

        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Main>
      </MainContainer>
    </BrowserRouter>
  );
}

const MainContainer = Styled.div`
  padding: 40px;
  with: 90%;
  max-width: 700px;
`;

const Main = Styled.main`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(129, 129, 129, 0.1);
`;

export default App;