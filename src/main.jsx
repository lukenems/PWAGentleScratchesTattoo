import { hydrate, render } from 'preact'
import { App } from './app'
import './index.css'
import { AuthContextProvider } from './context/AuthContext';
import { FlashContextProvider } from './context/FlashContext';
// render(<App />, document.getElementById('app'))


const rootElement = document.getElementById('app');
if (rootElement.hasChildNodes()) {
  hydrate(
    <AuthContextProvider>
      <FlashContextProvider>
        <App />
      </FlashContextProvider>
    </AuthContextProvider>, rootElement
  );
} else {
  render (
    <AuthContextProvider>
      <FlashContextProvider>
        <App />
      </FlashContextProvider>
    </AuthContextProvider>, rootElement
  );
}
