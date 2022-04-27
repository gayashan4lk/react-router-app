import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import NotFound from "./routes/notFound";
import Invoice from "./routes/invoice";
import InvoicesIndex from "./routes/invoicesIndex";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />}> </Route>
          <Route path="invoices" element={<Invoices />}>
            <Route index  element={<InvoicesIndex />}></Route>
            <Route path=":invoiceId" element={<Invoice />}> </Route>
          </Route>
          <Route path="*" element={<NotFound />}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
