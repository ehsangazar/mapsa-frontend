import Head from 'next/head'
import ImageList from '../containers/ImagesList/ImagesList'
import { PostType } from '@/types/posts'
import { useState } from 'react'
import PostContext from '@/contexts/PostContext'

interface HomeType {
  data: PostType[],
  title: string
}

const Home = ({ data=[], title } : HomeType) => {
  const [pinnedItems, setPinnedItems] = useState<PostType[]>([]);

  const togglePin = (item: PostType) => {
    const pinned = !!pinnedItems.find((pinnedItem) => pinnedItem.id === item.id)
    if (pinned) {
      const newPinnedItems = pinnedItems.filter((pinnedItem) => pinnedItem.id !== item.id)
      setPinnedItems(newPinnedItems)
    } else {
      setPinnedItems([...pinnedItems, item]);
    }
  }

  return (
    <>
      <Head>
        <title>Pinterest App</title>
        <meta name="description" content="Pinterest App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {title}
        {data.length === 0 && <p>Loading...</p>}
        <PostContext.Provider value={{ data, togglePin, pinnedItems }}>
          <ImageList />
        </PostContext.Provider>
      </div>
    </>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return { data, title:'Ehsan Gazar' }
}

export default Home


