import { Switch, Route } from 'react-router';
import Auth from './components/auth';
import Home from './components/home';
import './App.css';

function App() {
  return (

    <div className="flex justify-center">
      <Switch>
        <Route path="/" exact component={Auth}/>
        <Route path='/home' exact component={Home}/>
      </Switch>
    </div>

  );
}

export default App;
