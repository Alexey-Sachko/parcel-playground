import React from "react";
import { usePostsList } from "./hooks/usePostsList";
import { PostItem } from "./PostItem";

export const Posts = React.memo(() => {
  const { data } = usePostsList();

  return (
    <ul>
      {data.map((post) => (
        <PostItem data={post} key={post.id} />
      ))}
    </ul>
  );
});

Posts.displayName = "Posts";
