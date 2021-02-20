import React from "react";
import { PostData } from "./model/posts.dto";

export const PostItem = React.memo<{ data: PostData }>(({ data }) => {
  return (
    <li>
      <h3>{data.title}</h3>
      <pre>{data.body}</pre>
    </li>
  );
});

PostItem.displayName = "PostItem";
