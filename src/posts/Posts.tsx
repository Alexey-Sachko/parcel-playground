import React from "react";
import { useQuery } from "react-query";
import { PostItem } from "./PostItem";
import { postsRepo } from "./repo/posts.repo";

export const Posts = React.memo(() => {
  const { data } = useQuery("posts", () => postsRepo.getPosts(), {
    initialData: [],
  });

  return (
    <ul>
      {data.map((post) => (
        <PostItem data={post} key={post.id} />
      ))}
    </ul>
  );
});

Posts.displayName = "Posts";
