function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/financeiro" element={<FinanceiroLayout />}>
          <Route path="dashboard" element={<FinanceiroDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));