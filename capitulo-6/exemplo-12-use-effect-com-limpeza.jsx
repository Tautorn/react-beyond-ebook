export default function Hello() {
  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      console.log("Yupiiii")
    }, 1000)

    // Desmontando o componente ao sair da página
    return () => clearInterval(interval);
  }, [])
}