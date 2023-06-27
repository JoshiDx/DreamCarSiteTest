import './styles/App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/footer";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path={"/"} Component={Home}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
