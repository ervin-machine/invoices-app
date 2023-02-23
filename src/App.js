import React from "react"
import Invoices from "./Features/Invoices";
import Sellers from "./Features/Sellers";
import Customers from "./Features/Customers";
import Menu from "./Layout/Menu";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Menu />
        <Routes>
        <Route path="/" element={<Navigate to="/invoices" />} />
        <Route exact path="/invoices" element={<Invoices />} />
        <Route exact path="/sellers" element={<Sellers />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/invoices/:id" element={<Invoices />} />
        <Route exact path="/customers/:id" element={<Customers />} />
        <Route exact path="/sellers/:id" element={<Sellers />} />
      </Routes>
      
    </div>
  );
}

export default App;
