import { StrictMode } from 'react';
import { registerRootComponent } from 'expo';
import './index.css';
import App from './App.jsx';

function Root() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

registerRootComponent(Root);