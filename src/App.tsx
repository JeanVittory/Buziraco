import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import ConcertsContainer from './components/ConcertsContainer';
import FormTickets from './components/FormTickets';
import ConcertContext from './context/ConcertContext';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <ConcertContext>
        <Router>
          <Header/>
          <Routes>
            <Route path='/conciertos' element = {<ConcertsContainer/>}/>
            <Route path = '/tickets/:concertId' element = {<FormTickets/>}/>
          </Routes>
          <Footer/>
        </Router>
      </ConcertContext>
    </div>
  );
}

export default App;
