import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Movies from "./pages/Movies"
import Navbar from "./component/Navbar"
import MovieDetails from "./pages/MovieDetails"
function App(){

return (

  <BrowserRouter>
  <Navbar />
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/movies" element={<Movies/>} />
<Route path="/about" element={<About/>} />
<Route path="/movies/:id" element={<MovieDetails/>}  />

  </Routes>

  
  </BrowserRouter>


);

}

export default App;
