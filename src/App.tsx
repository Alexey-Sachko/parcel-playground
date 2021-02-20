import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Posts } from "./posts/Posts";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
};

export default App;
