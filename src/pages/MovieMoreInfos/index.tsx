import { CircularProgress, Container } from "@mui/material";
import { useGetMovieById } from "../../api/movies";
import { useParams } from "react-router-dom";

type genreType = {
  id: number;
  name: string;
};
type companyType = {
  id: number;
  name: string;
  logo_path: string;
};

const MovieInfo = () => {
  const { movieId } = useParams();

  const movieInfos = useGetMovieById(Number(movieId));
  console.log(movieInfos, "movieInfos");

  const movieImage = `https://image.tmdb.org/t/p/w500${movieInfos.data?.poster_path}`;
  return (
    <Container>
      {movieInfos.isLoading && <CircularProgress />}
      {movieInfos.isSuccess && (
        <div>
          <h1>{movieInfos.data?.title}</h1>
          <img src={movieImage} alt={movieInfos.data?.title} />
          <p>{movieInfos.data?.overview}</p>
          <div>
            <h3>Genres</h3>
            <ul>
              {movieInfos.data?.genres.map((genre: genreType) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Production Companies</h3>
            <ul>
              {movieInfos.data?.production_companies.map(
                (company: companyType) => (
                  <>
                    <li key={company.id}>{company.name}</li>

                    <img
                      src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                    />
                  </>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </Container>
  );
};

export default MovieInfo;
