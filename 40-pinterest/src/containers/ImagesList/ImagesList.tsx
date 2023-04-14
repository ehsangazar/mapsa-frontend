import { PostType } from "@/types/posts"
import styled from "@emotion/styled"
import ImageItem from "../ImageItem/ImageItem"
import { useContext } from "react"
import PostContext from "@/contexts/PostContext"

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


const ImageList = () => {

  const { data, togglePin, pinnedItems } = useContext(PostContext)

  return (
    <ImageListStyled>
      <ul>
        {data && data.map((item) => {
          const pinned = !!pinnedItems.find((pinnedItem) => pinnedItem.id === item.id)
          return (
            <ImageItem key={item.id} item={item} togglePin={togglePin} pinned={pinned} />
          )
        })}
      </ul>
    </ImageListStyled>
  )
}

export default ImageList