// Dependencies
import React from 'react'
import { createRoot } from 'react-dom/client';

// Components
import App from './ui/App.jsx'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App/>)