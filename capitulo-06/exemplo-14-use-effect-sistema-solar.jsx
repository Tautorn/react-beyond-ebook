import { useEffect, useState } from "react"
import { ReactComponent as Sun } from "./sun.svg"
import { ReactComponent as House } from "./house.svg"
import { ReactComponent as Moon } from "./moon.svg"

export default function SolarSystem() {
  const [hour, setHour] = useState(6)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval = null

    interval = setInterval(() => {
      setHour(hour + 1)
    }, 1000)

    if (hour > 23) {
      setHour(0)
    }

    return () => clearInterval(interval)
  }, [hour])

  return (
    <div>
      <h1>Geração de Energia Solar </h1>
      <h2>Hora do dia: {hour}h </h2>
      {isActive ? <Sun height="100px" /> : <Moon height="100px" />}
      <div>
        <House height="100px" />
      </div>
    </div>
  )
}