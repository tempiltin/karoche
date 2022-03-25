import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import NaV from './Components/header/NaV';
import Article from './pages/Article'
function App() {
  return (
    <>
      <NaV />
      <Routes>
        <Route path='/article' element={<Article />} />
        <Route path='/' element={<Home />} />
      
      </Routes>
    </>
  );
}

export default App;
