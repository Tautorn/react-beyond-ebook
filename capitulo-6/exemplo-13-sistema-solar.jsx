import { ReactComponent as Sun } from "./sun.svg";
import { ReactComponent as House } from "./house.svg";

export default function SolarSystem() {

  return (
    <div stlye={{ display: "flex" }}>
      <h1>Geração de Energia Solar </h1>
      <Sun height="100px" />
      <div>
        <House height="100px" />
      </div>
    </div>
  )
}