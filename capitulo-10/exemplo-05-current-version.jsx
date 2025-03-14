import { useEffect, useState } from 'react'

interface CurrentVersionProps {
  cardClass: string
}

function CurrentVersion({ cardClass }: CurrentVersionProps) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchCards = async (id: string) => {
      const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${id}`, {
        headers: {
          'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
          'X-RapidAPI-Host': `${import.meta.env.VITE_RAPID_API_HOST}`
        }
      })

      const dataResponse = await response.json()

      // O filter foi adicionado para para filtrar cards que possuam o atributo `img`, do contrário vários cards ficarão "quebrados" durante a renderização da página.
      // O slice é para poder retornar somente 20 cards para não ficar uma apresentação muito grande. Isso foi necessário uma vez que no momento da criação deste artigo a api não dispõe da possibilidade informar a quantidade de cartas para retornar. 
      setData((dataResponse.filter((card: any) => card.img)).slice(0, 19))
    }

    fetchCards(cardClass)
      .catch(console.error)

  }, [cardClass])

  const renderClasses = (card: any, key: number) => {
    return (
      <img key={key} src={card.img} alt={card.name} height="256px" />
    )
  }

  return (
    <div>
      <h2>Current Version</h2>
      {data?.map(renderClasses)}
    </div>
  )
}

export default CurrentVersion