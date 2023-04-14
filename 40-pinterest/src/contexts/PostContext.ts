import { createContext } from "react";
import { PostType } from "@/types/posts"

interface PostContextType {
    data: PostType[];
    togglePin: (item: PostType) => void,
    pinnedItems: PostType[];
}

const PostContext = createContext<PostContextType>({
    data: [],
    togglePin: () => {},
    pinnedItems: []
});

export default PostContext;

