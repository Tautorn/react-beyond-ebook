import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React, { Suspense } from "react";

const Layout = () => (
  <div>
    <h1>Crypto Dashboard</h1>
    <p>Bem-vindo ao painel de Crypto Moedas</p>
    <Suspense fallback={<p>Carregando...</p>}>
      <Outlet />
    </Suspense>
  </div>
);

// Rotas
let routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route
      path="bitcoin"
      lazy={() => import("./pages/BitcoinDetails")}
    />
    <Route
      path="ethereum"
      lazy={() => import("./pages/EthereumDetails")}
    />
    <Route
      path="portfolio"
      lazy={() => import("./pages/Portfolio")}
    />
  </Route>
);

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;