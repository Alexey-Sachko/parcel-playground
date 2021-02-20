import React from "react";
import { PostData } from "../model/posts.dto";
import { FetchHookValue } from "../../common/fetch-hook.type";
import { postsRepo } from "../repo/posts.repo";

export function usePostsList(): FetchHookValue<PostData[]> {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    setLoading(true);
    postsRepo
      .getPosts()
      .then((posts) => setData(posts))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    error: error,
    loading,
  };
}
