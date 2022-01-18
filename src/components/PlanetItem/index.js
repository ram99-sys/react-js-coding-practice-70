import {
  PlanetItemContainer,
  ImageContainer,
  Image,
  PlanetName,
  Description,
} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  // console.log(planetDetails)
  const {name, imageUrl, description} = planetDetails

  return (
    <PlanetItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`planet ${name}`} />
      </ImageContainer>
      <PlanetName>{name}</PlanetName>
      <Description>{description}</Description>
    </PlanetItemContainer>
  )
}

export default PlanetItem
