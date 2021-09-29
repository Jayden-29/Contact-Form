import './App.css';
import Referrals from './components/contact/Referrals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Enquiries from './components/contact/Enquiries';





const App = () => {
  return(
    <><Router>
      <Nav></Nav>
      <Switch>
        <Route exact path='/referrals' component={Referrals}></Route>
        <Route exact path='/enquiries' component={Enquiries}></Route>
      </Switch>
    </Router><div className="App">
        
      </div></>


       
    
      

       );
}





export default App;
