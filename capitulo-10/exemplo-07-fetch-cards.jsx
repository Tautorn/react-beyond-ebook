const fetchCards = cache(async (id: string) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${id}`, {
  // something
})