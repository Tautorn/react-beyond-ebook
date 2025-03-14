// arquivo Experimental.tsx
import { cache, use, Suspense } from "react"

interface CardsProps {
  id: string
}

interface ExperimentalVersionProps {
  cardClass: string
}

const fetchCards = cache(async (id: string) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${id}`, {
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
      'X-RapidAPI-Host': `${import.meta.env.VITE_RAPID_API_HOST}`
    }
  })

  const dataResponse = await response.json()

  // O filter foi adicionado para para filtrar cards que possuam o atributo `img`, do contrário vários cards ficarão "quebrados" durante a renderização da página.
  // O slice é para poder retornar somente 20 cards para não ficar uma apresentação muito grande. Isso foi necessário uma vez que no momento da criação deste artigo a api não dispõe da possibilidade informar a quantidade de cartas para retornar.
  return (dataResponse.filter((card: any) => card.img)).slice(0, 19)
})


function Cards({ id }: CardsProps) {
  const cards = use(fetchCards(id))

  const renderClasses = (card: any, key: number) => {
    return (
      <img key={key} src={card.img} alt={card.name} height="256px" />
    )
  }

  return (
    <div>
      {cards?.map(renderClasses)}
    </div>
  )
}


function ExperimentalVersion({ cardClass }: ExperimentalVersionProps) {
  return (
    <div>
      <h2>Experimental Version</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Cards id={cardClass} />
      </Suspense>
    </div>
  )
}

export default ExperimentalVersion

