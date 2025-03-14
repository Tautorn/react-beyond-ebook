import { useEffect, useState } from "react"
import { ReactComponent as Sun } from "./sun.svg"
import { ReactComponent as House } from "./house.svg"
import { ReactComponent as Moon } from "./moon.svg"

const KWH = 1.57

export default function SolarSystem() {
  const [hour, setHour] = useState(6)
  const [isActive, setIsActive] = useState(false)
  const [energy, setEnergy] = useState(0)

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setHour(hour + 1)
    }, 1000)

    if (hour > 23) {
      setHour(0)
    }

    return () => clearInterval(interval)
  }, [hour])

  useEffect(() => {
    if (hour > 5 && hour < 19) {
      setIsActive(true)
      setEnergy(energy + KWH)
    } else {
      setIsActive(false)
    }

    if (hour === 24) {
      setEnergy(0)
    }
  }, [hour])

  return (
    <div>
      <h1>Geração de Energia Solar </h1>
      <h2>Hora do dia: {hour}h </h2>
      {isActive ? <Sun height="100px" /> : <Moon height="100px" />}
      <div>
        <House height="100px" />
        <p>Quantidade de energia gerada no dia: {energy.toFixed(2)} kw/h</p>
      </div>
    </div>
  )
}