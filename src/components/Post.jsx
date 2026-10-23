import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PostsData } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostsData); //short form

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className=" card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <RiDeleteBin5Line />
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-light Hashtag" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-success views" role="alert">
            This post has been reacted by {post.views} people
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
