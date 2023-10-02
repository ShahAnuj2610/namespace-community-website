import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AllEvents from "./Pages/AllEvents/AllEvents";
import { Web } from "./Pages/AllResources/Web";
import { HTML } from "./Pages/AllResources/webALL/html";

import { Javascript } from "./Pages/AllResources/webALL/javascript";
import AllTeams from "./Pages/AllTeams/AllTeams";
import Projects from "./Pages/Projects/Projects";
import Resources from "./Pages/Resources/Resources";
import Hero from "./Sections/Hero/Hero";
import NotFound from "./Pages/Error/NotFound";
import Android from "./Pages/AllResources/Android";
import ARVR from "./Pages/AllResources/ARVR";
import Programs from "./Pages/Programs/Programs";
import { DevOps } from "./Pages/AllResources/Devops";

const Container = styled.div`
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Hero />} />
              <Route path='team' element={<AllTeams />} />
              <Route path='events' element={<AllEvents />} />
              <Route path='programs' element={ <Programs /> } />
              <Route path='projects' element={ <Projects /> } />
              <Route path='resources' element={ <Resources /> } />
              <Route path='webd' element={<Web /> } />
              <Route path='arvr' element={<ARVR/>} />
              <Route path='android' element={<Android/>} />
              <Route path='html' element={ <HTML /> } />
              <Route path='js' element={ <Javascript /> } />
              <Route path='devops' element={ <DevOps /> } />
              <Route path='*' element={ <NotFound /> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;