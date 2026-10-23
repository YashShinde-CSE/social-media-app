import { createContext, useReducer } from "react";

export const PostsData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = (userId, title, body, views, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId,
        title,
        body,
        views,
        tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostsData.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostsData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Building Projects, One Step at a Time",
    body: "Every project is an opportunity to learn something new. Recently, I've been focusing on improving my development skills by building practical applications, solving problems, and writing cleaner code. Consistent learning is the key to growth.",
    views: 24,
    userId: "user-yash",
    tags: ["#SoftwareDevelopment", "#LearningByDoing", "#GrowthMindset"],
  },
  {
    id: "2",
    title: "The Power of Consistency",
    body: "Success doesn't happen overnight. Small, consistent efforts compound into meaningful progress over time. Whether it's learning a new skill, working on a project, or improving your daily routine, keep showing up and trust the process.",
    views: 36,
    userId: "user-anay",
    tags: ["#Consistency", "#PersonalGrowth", "#Motivation"],
  },
  {
    id: "3",
    title: "Why Hands-On Learning Matters",
    body: "Tutorials help build a foundation, but building projects teaches you how to apply concepts, debug errors, and solve real problems. The best way to strengthen your skills is to keep experimenting and creating.",
    views: 42,
    userId: "user-yash",
    tags: ["#ProjectBasedLearning", "#WebDevelopment", "#TechJourney"],
  },
  {
    id: "4",
    title: "Teamwork Makes Better Ideas",
    body: "Great results often come from sharing ideas, learning from different perspectives, and working together toward a common goal. Collaboration helps us discover better solutions and grow beyond what we can achieve alone.",
    views: 31,
    userId: "user-anay",
    tags: ["#Teamwork", "#Collaboration", "#ProfessionalGrowth"],
  },
  {
    id: "5",
    title: "Learning from Every Challenge",
    body: "Debugging a difficult issue can be frustrating, but every challenge is a chance to understand a concept more deeply. Instead of avoiding mistakes, treat them as feedback and use them to become a better developer.",
    views: 53,
    userId: "user-yash",
    tags: ["#ProblemSolving", "#DeveloperLife", "#KeepLearning"],
  },
];

export default PostListProvider;
