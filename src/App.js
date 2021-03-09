import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Attorneys from './components/pages/Attorneys';
import Appointments from './components/pages/Appointments.js';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/Attorneys' exact component={Attorneys}/>
          {/* <Route path='/AboutUs' exact component={AboutUs}/>
          <Route path='/Appointments' exact component={Appointments}/>
          <Route path='/ContactUs' exact component={ContactUs}/>
          <Route path='/Attorneys' exact component={Attorneys}/> */}
        </Switch>
      </Router>

  );
}

export default App;
