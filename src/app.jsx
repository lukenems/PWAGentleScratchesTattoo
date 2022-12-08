import { Switch, Route } from 'wouter/preact';
import './app.css';
import Nav from './components/Nav';
import Landing from './pages/landing';
import Login from './pages/login';
import CustomTattooForm from './components/CustomTattooForm';
import EnsureAdmin from './protected/EnsureAdmin';
import CustomReqThanks from './pages/customReqThanks';
import Home from './pages/home';

export function App() {

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/custom'>
          <CustomTattooForm />
        </Route>
        <Route exact path='/admin'>
          <EnsureAdmin />
        </Route>
        <Route exact path='/custom/thank-you-custom'>
          <CustomReqThanks />
        </Route>  
      </Switch>
    </>
  );
}
