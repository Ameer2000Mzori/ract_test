import Navbar from './components/navbar';
import Main from './components/main';
import About from './components/about';
import Footer from './components/footer'

import './App.css';


function App() {

  return (

    <div className="App">
        <Navbar></Navbar>
        <Main></Main>
        <About></About>
        <Footer></Footer>
    </div>
  );
}

export default App;
