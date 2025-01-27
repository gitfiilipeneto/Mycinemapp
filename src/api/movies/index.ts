import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetAllMoviesByInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9&page=${pageParam}`
      ).then((res) => res.json());
    },
    getNextPageParam: (lastPage) => {
      console.log(lastPage, 'lastPage,pages');
      return lastPage.page + 1;
    },
    initialPageParam: 1,
  });
};

export const useGetMovieById = (movieId: number) => {
  return useQuery({
    queryKey: ["movie-infos", movieId],
    queryFn: () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=a341a9d7cb2bd4eba1b729d6e957cbf9`
      ).then((res) => res.json());
    },
  });
}