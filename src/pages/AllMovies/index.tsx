import { Box, Button, CircularProgress, Container } from "@mui/material";
import { useGetAllMoviesByInfiniteQuery } from "../../api/movies";
import MovieCard from "./MovieCard";
import movieType from "../../types/movie";

const AllMovies = () => {
  const movies = useGetAllMoviesByInfiniteQuery();

  return (
    <Container maxWidth="xl">
      {movies.isError && <div>Error</div>}
      {movies.isSuccess && (
        <>
          {movies.data.pages.map((page) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  gap: 2,
                  marginTop: 2,
                }}
                key={page.page}
              >
                {page.results.map((movie: movieType) => {
                  return (
                    <MovieCard
                      key={movie.id}
                      movieTitle={movie.title}
                      movieSynopsis={movie.overview}
                      movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                  );
                })}
              </Box>
            );
          })}
        </>
      )}
      <Box sx={{ display: "flex", justifyContent: "center", margin: 8 }}>
        {movies.hasNextPage && (
          <CircularProgress onMouseEnter={() => movies.fetchNextPage()} />
        )}
      </Box>
    </Container>
  );
};

export default AllMovies;
