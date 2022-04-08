
import {Routes, Route} from "react-router-dom";


import {Navbar} from "./components/allImports";
import {Home, About, Services, News, Contacts, Notfound} from "./components/Pages/allImports";

import './App.scss';


function App() {
  return (
    <div className="app">

      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route index element = {<Home />} />
          <Route path="about" element = {<About />} />
          <Route path="services" element = {<Services />} />
          <Route path="news" element = {<News />} />
          <Route path="contacts" element = {<Contacts />} />
          <Route path="*" element = {<Notfound />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
