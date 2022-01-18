import Slider from 'react-slick'

import {SliderContainer, Heading} from './styledComponents'

import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props
  return (
    <SliderContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(eachPlanetItem => (
          <PlanetItem key={eachPlanetItem.id} planetDetails={eachPlanetItem} />
        ))}
      </Slider>
    </SliderContainer>
  )
}

export default PlanetSlider
