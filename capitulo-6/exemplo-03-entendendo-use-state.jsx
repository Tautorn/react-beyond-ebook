import { useState } from 'react'

function Gallery() {
  const [picture, setPicture] = useState('250')

  console.log("Re-render", picture)

  const changeDogPicture = (dog) => setPicture(dog)

  return (
    <div>
      <h1> Hey, look at me! </h1>
      <img src={`https://placedog.net/${picture}`} alt="dog-picture" />

      <h2>Click below to choose another picture</h2>
      <button onClick={() => changeDogPicture(250)}>
        Super Dog
      </button>
      <button onClick={() => changeDogPicture(100)}>
        Dog 100
      </button>
      <button onClick={() => changeDogPicture(200)}>
        Dog 200
      </button>
      <button onClick={() => changeDogPicture(300)}>
        Dog 300
      </button>
    </div>
  )
}