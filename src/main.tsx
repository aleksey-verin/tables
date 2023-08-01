import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import ProviderNotification from './components/ProviderNotification.tsx';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProviderNotification>
        <App />
      </ProviderNotification>
    </Provider>
  </React.StrictMode>
);
