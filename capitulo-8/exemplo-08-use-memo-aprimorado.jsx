return (
  <div>
    <h1>Calculadora de Empréstimo</h1>
    <div>
      <label>
        Valor do Empréstimo (R$):
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
      </label>
    </div>
    <div>
      <label>
        Taxa de Juros (% ao ano):
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
      </label>
    </div>
    <div>
      <label>
        Duração (anos):
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(parseInt(e.target.value))}
        />
      </label>
    </div>

    <h2>Valor total a pagar após {years} anos: R$ {totalAmount}</h2>
  </div>
);
}

export default LoanCalculator;