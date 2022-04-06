
import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Services from "./components/Pages/Services/Services";
import News from "./components/Pages/News/News";
import Contacts from "./components/Pages/Contacts/Contacts";
import Notfound from "./components/Pages/Notfound/Notfound";

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
