import { Switch, Route } from 'wouter/preact';
import './app.css';
import Nav from './components/Nav';
import Landing from './pages/landing';
import LoginForm from './components/LoginForm';
import CustomTattooForm from './components/CustomTattooForm';

export function App() {

  return (
    <>
      <Nav />
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/custom'>
          <CustomTattooForm />
        </Route>
      </Switch>
    </>
  );
}
