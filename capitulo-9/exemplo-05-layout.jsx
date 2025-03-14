function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas de Financeiro */}
        <Route element={<FinancialLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="relatorios" element={<Reports />} />
        </Route>

        {/* Rotas de Backoffice */}
        <Route element={<BackofficeLayout />}>
          <Route path="usuarios" element={<Users />} />
          <Route path="configuracoes" element={<Configurations />} />
        </Route>

        {/* Rotas de Marketing */}
        <Route element={<MarketingLayout />}>
          <Route path="campanhas" element={<Campaign />} />
          <Route path="estatistica" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));