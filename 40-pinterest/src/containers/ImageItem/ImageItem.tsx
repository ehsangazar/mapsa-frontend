
import { BsFillPinAngleFill, BsPinFill } from "react-icons/bs"
import styled from "@emotion/styled"
import { PostType } from "@/types/posts"

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
  background-color: var(--red-color);
  border-radius: 50%;
  &:hover {
    color: var(--primary-color);
  }
`

interface ImageItemType {
    item: PostType
    togglePin: (item: PostType) => void
    pinned: boolean
}

const ImageItem = ({ item, togglePin,pinned }: ImageItemType) => {
    return (
        <li>
            <img src={item.image} alt="image" />
            <ButtonStyled onClick={() => togglePin(item)}>
              {pinned ? <BsPinFill />: <BsFillPinAngleFill />}
            </ButtonStyled>
          </li>
    )
}

export default ImageItem