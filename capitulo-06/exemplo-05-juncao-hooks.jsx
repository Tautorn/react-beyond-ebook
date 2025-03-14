const [state, setState] = useState() 
// Pode ser qualquer nome, mas chamei de state por ficar mais claro que é o estado do componente. É uma mera semelhança ao nome utilizado quando utilizamos classe com React 


const handleBilling = (values) => {
  // utilizando apenas um Hook e realizando uma única renderização na página
  setState({
    user: values.user,
    value: values.value,
    payments: ['values'],
    notifcation: 'anything'
  })
}

