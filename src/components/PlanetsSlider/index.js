// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem itemDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
