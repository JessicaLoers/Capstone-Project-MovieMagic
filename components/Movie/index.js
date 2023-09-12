import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.5rem 0.3rem;
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Item = styled.li`
  width: 10rem;
  min-width: 10rem;
  height: 15rem;
`;

const Rate = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  color: red;
  z-index: 10;
`;

export default function Movie({ movie }) {
  const { vote_average, poster_path, title } = movie;

  return (
    <Item>
      <Figure>
        <Rate>{vote_average}</Rate>
        <StyledImage
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          fill
          alt={`Poster of the ${title}`}
        />
        <Caption>{title}</Caption>
      </Figure>
    </Item>
  );
}
