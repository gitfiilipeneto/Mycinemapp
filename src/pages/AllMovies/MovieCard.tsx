import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movieTitle: string;
  movieSynopsis: string;
  movieImage: string;
  movieId: number;
};

const MovieCard = ({
  movieTitle,
  movieSynopsis,
  movieImage,
  movieId,
}: MovieCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/movie/${movieId}`} style={{ textDecoration: "none" }}>
        <CardHeader title={movieTitle} />
      </Link>
      <CardMedia
        component="img"
        height="194"
        image={movieImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {movieSynopsis}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
