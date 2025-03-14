import { useState } from 'react'
import DiscountBasic from './DiscountBasic'
import DiscountPremium from './DiscountPremium'
import DiscountVIP from './DiscountVIP'

function HomePage() {
  const [userLevel, setUserLevel] = React.useState(null)
  
  useEffect(() => {
    // Simulação de chamada de API para obter o nível do usuário (api fictícia)
    const userLevel = await fetch('https://api.com/user/level')
      .then(response => response.json())
      .then(data => setUserLevel(data.level))
      
  }, [])
  
 const getDiscountComponent = (userLevel) {
  const components = {
    basic: DiscountBasic,
    premium: DiscountPremium,
    vip: DiscountVIP
  }

  return components[userLevel] ?? <p>Não há descontos disponíveis. Verifique seu nível de usuário.</p>
}
  
  return (
    <div>
      <h1>Bem-vindo à Loja E-commerce!</h1>
      {getDiscountComponent(userLevel)}
    </div>
  )
}

export default HomePage