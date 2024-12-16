import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
<head>
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests"
/>
{/* <link rel="icon" href={} /> */}
<title>개발자 정민우</title>
</head>

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
