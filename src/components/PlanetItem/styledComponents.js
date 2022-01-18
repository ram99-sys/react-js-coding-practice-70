import styled from 'styled-components'

export const PlanetItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageContainer = styled.div`
  background-color: #000000;
  height: 300px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 200px;
  width: 250px;
  background-color: transparent;
`
export const PlanetName = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  color: #f8fafc;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #f1f5f9;
  text-align: center;
`
