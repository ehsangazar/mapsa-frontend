import styled from "@emotion/styled"
import { BsFillPinAngleFill, BsPinFill } from "react-icons/bs"

const ImageListStyled = styled.ul`
  margin: 0;
  padding: 0;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      position: relative;
      img {
        width: 100%;
      }
    }
  }
`

const ButtonStyled = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: var(--primary-color);
  }
`


const ImageList = ({data = []}) => {
  return (
    <ImageListStyled>
      <ul>
        {data && data.map((item,index) => (
          <li key={`ImageList-${index}`}>
            <img src={data.image} alt="image" />
            <ButtonStyled>
              <BsPinFill />
              <BsFillPinAngleFill />             
            </ButtonStyled>
          </li>
        ))}
      </ul>
    </ImageListStyled>
  )
}

export default ImageList