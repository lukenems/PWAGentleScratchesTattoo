import { hydrate, render } from 'preact'
import { App } from './app'
import './index.css'
import { AuthContextProvider } from './context/AuthContext';
// render(<App />, document.getElementById('app'))


const rootElement = document.getElementById('app');
if (rootElement.hasChildNodes()) {
  hydrate(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>, rootElement
  );
} else {
  render (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>, rootElement
  );
}
