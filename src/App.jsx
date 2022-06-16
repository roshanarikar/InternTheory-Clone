
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Body2 } from './Pages/Body/Body2';
import { Body3 } from './Pages/Body/Body3';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body2/>
      <Body3/>
      <Footer/>
    </div>
  );
}

export default App;
