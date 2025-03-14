import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// Layout Financeiro
function FinanceiroLayout() {
  return (
    <div>
      <header>
        <h1>Financeiro</h1>
        <nav>
          <ul>
            <li>
              <Link to="/financeiro/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/financeiro/relatorios">Relatórios</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}