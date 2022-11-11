import { Switch, Route } from 'wouter/preact';
import './app.css';
import Nav from './components/Nav';
import Landing from './pages/landing';
import LoginForm from './components/LoginForm';
import CustomTattooForm from './components/CustomTattooForm';
import EnsureAdmin from './protected/ensureAdmin';
import CustomReqThanks from './pages/customReqThanks';

export function App() {

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/login'>
          <LoginForm />
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
