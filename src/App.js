
import './App.css';
import {Header} from './Components/Header/Header.jsx'
import {StepOne} from './Components/Steps/StepOne.jsx'
import {StepTwo} from './Components/Steps/StepTwo.jsx'
import {Success} from './Components/Steps/Success.jsx'
import {Home} from './Components/Home/Home.jsx'
import {Footer} from './Components/Footer/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './Components/Home/home.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div>
        <Header/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/stepOne" element={<StepOne />} />
          <Route path="/stepTwo" element={<StepTwo />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;