import { useContext, useLayoutEffect } from "react";
import Post from "./Post";
import { PostsData } from "../store/post-list-store";

const PostList = () => {
  const contextObj = useContext(PostsData);
  const postList = contextObj.postList;

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
