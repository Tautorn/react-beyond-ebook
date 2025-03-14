const AnyComponent= (props) => {
  console.log('Renderizando MeuComponente');
  return <div>{props.data.name}</div>;
};

function areEqual(prevProps, nextProps) => {
  // Retorne true se as props anteriores e novas forem iguais (não re-renderiza)
  return prevProps.data.name === nextProps.data.name;
}

export default React.memo(AnyComponent, areEqual);