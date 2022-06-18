import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { Body2 } from './Pages/Body/Body2';
import { Body3 } from './Pages/Body/Body3';
import { Interships } from "./Pages/Interships/Intership"
import { Jobs } from './Pages/Jobs/Jobs';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <AllRoutes/>
      {/* <Body2/> */}
      {/* <Body3/>
      <Footer/> */}
      
       {/* <Interships/> */}
       {/* <Jobs/> */}
    </div>
  );
}

export default App;
