import styled from "styled-components";
import MoviesList from "@/components/MoviesList";

const Headline = styled.h1`
  width: 100%;
  margin: 0;
  padding: 20px;
  text-align: center;
`;

export default function HomePage() {
  return (
    <main>
      <Headline>Movie Magic ✨</Headline>
      <MoviesList />
    </main>
  );
}
