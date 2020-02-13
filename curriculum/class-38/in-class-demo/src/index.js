import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { VideosProvider } from './hooks/videos';

render(
  <VideosProvider>
    <App />
  </VideosProvider>,
  document.getElementById('root')
);
