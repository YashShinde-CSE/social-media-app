import { useContext, useRef } from "react";
import { PostsData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostsData);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postTextElement = useRef();
  const rectionElement = useRef();
  const tagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postTextElement.current.value;
    const views = rectionElement.current.value;
    const tags = tagElement.current.value.split(" ");

    addPost(userId, title, body, views, tags);
  };

  return (
    <>
      <form className="create-Post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIdElement}
            placeholder="your user Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitleElement}
            placeholder="enter title.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content:
          </label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            id="body"
            ref={postTextElement}
            placeholder="enter text.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="views" className="form-label">
            User views:
          </label>
          <input
            type="text"
            className="form-control"
            id="views"
            ref={rectionElement}
            placeholder="how many people reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Tags:
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagElement}
            placeholder="Please enter tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
