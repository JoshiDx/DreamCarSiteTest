import './styles/App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./pages/navbar";
import catalog from "./pages/catalog";
import FooterBar from "./pages/footerBar";
import Contacts from "./pages/contacts";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path={"/"} Component={Home}/>
              <Route path={"catalog"} Component={catalog}/>
              <Route path={"contacts"} Component={Contacts}/>
          </Routes>
          <FooterBar />
      </BrowserRouter>
  );
}

export default App;
