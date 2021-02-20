import { PostData } from "../model/posts.dto";

class PostsRepo {
  private readonly baseUrl = process.env.API_BASE_URL;

  async getPosts(): Promise<PostData[]> {
    const res = await fetch(`${this.baseUrl}/posts`);
    return await res.json();
  }
}

export const postsRepo = new PostsRepo();
