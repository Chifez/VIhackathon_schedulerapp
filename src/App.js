import React,{useState} from 'react'
import './App.css';
import AppContext from './context';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Appointment from './pages/Appointment';

function App() {
  const [myEventsList,setMyEventList] = useState([{
    title:'',
    allDay:false,
    start:'',
    end:'',
  }])

  return (
    <Router>
                  <div className="App">
                <AppContext.Provider value = {{myEventsList:myEventsList,setMyEventList:setMyEventList}}>
      <Routes>
                    <Route path ='/' element ={ <Home />} />
                    <Route path='schedule' element ={<Appointment />} />
      </Routes>
                </AppContext.Provider>
                  </div>
    </Router>
  );
}

export default App;
