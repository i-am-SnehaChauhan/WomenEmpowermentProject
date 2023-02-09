import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const conntainer = document.getElementById("root");
const root = createRoot(conntainer);
root.render(
    <App />
);

