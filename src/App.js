import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/gituhub/GithubState';

import './App.css';


const App = () =>{

  const [alert, setAlerts] = useState(null);

  // async componentDidMount() {

  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(res.data);

  //   this.setState({users: res.data, loading: false });
  // }

  // Search github users


  // get user repostiories 

  

// set alert 

const setAlert = ( msg, type ) => {

  setAlerts({msg, type});
  setTimeout(() => setAlerts(null), 2000)
}

      return (
      <GithubState>
      <Router>
      <div className="App">
        {/* <h1>Hello React</h1> */}
        <Navbar/>

        <div className="container">
          <Alert alert={alert} />

        <Switch>
          <Route exact path ='/' render= { props => (
            <Fragment>
                  <Search  
                  setAlert = {setAlert}
                />

              <Users/>
            </Fragment>
          )}/>

        <Route exact path='/about' component={About} />

        <Route exacr path='/user/:login' component={User} />

        </Switch>

         
        </div>
        
      </div>
      </Router>
      </GithubState>
    );
 
 
}

export default App;
