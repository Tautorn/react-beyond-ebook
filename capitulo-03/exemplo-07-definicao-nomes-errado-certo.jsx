X Errado
function Wallet() {
   return (
      <Balance />
      <img src="avatar.png" />
   )
}

// Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?


✓ Correto
function Wallet() {
  return (
     <div>
       <Balance />
       <img src="avatar.png" />
     </div>
  )
}

