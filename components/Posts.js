import Post from "./Post";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { onSnapshot } from "firebase/firestore/dist/firestore";

const posts = [
  {
    id: "123",
    username: "dgrcic",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "This is dope!",
  },
  {
    id: "123",
    username: "dgrcic",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "This is dope!",
  },
];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
