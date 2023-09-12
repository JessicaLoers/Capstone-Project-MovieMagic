import useSWR from "swr";
import styled from "styled-components";
import Movie from "@/components/Movie";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default function MoviesList() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const {
    data: movies,
    error,
    isLoading,
  } = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);

  if (error)
    return (
      <h2>
        Sorry, we could not retreive the latest movie data at the moment. Please
        try later.
      </h2>
    );

  if (isLoading) return <h2>Loading ...</h2>;

  return (
    <List>
      {movies.results.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </List>
  );
}
