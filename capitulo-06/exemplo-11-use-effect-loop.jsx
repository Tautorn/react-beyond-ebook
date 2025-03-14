const [name, setName] = useState('tautorn')
useEffect(() => {
  setName('bruno')
}, [name])