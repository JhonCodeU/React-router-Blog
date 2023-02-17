import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Post from './components/Post';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error404';
import Styled from 'styled-components';
import { ContextTheme } from './context/contextTheme';

const App = () => {

  const { theme } = useContext(ContextTheme);

  return (
    <BrowserRouter>
      <MainContainer>

        <Header />
        <Main theme={theme}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/post/:id' element={< Post />} />
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
  font-size: ${props => props.theme ? props.theme.fuente + 'px' : '16px'};
  text-align: ${props => props.theme ? props.theme.alineado : 'right'};
  background - color: #fff;
  padding: 40px;
  border - radius: 10px;
  box - shadow: 0 0 10px rgba(129, 129, 129, 0.1);
`;

export default App;