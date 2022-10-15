// Write your code here
import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  const {imageUrl, description, name} = itemDetails
  console.log(imageUrl)
  return (
    <div className="PlanetItemContainer">
      <h1 className="plantes">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="url" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
