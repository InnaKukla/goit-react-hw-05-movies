import styled from 'styled-components';

export const FilmImg = styled.img`
  display: block;
  width: 280px;
  border-radius: 5px;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 500px;
  }

  @media screen and (min-width: 1280px) {
    width: 450px;
    height: 650px;
  }
`;

export const FilmWrap = styled.div`
  display: flex;
  padding: 20px;
`;

export const FilmTitle = styled.h1`
  margin-bottom: 40px;
  margin-top: 10px;
  font-size: 2.8rem;
  word-spacing: 0.6rem;
`;
export const FilmUserScore = styled.p`
  font-size: 1.5rem;
  word-spacing: 0.2rem;
  margin-bottom: 60px;
  margin-top: 80px;
`;

export const FilmOverview = styled.p`
  margin-bottom: 70px;
  line-height: 1.6;
`;

export const FilmGenresList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

export const FilmGenresItem = styled.li`
  line-height: 1.5;
  :not(:last-child) {
    margin-right: 5px;
  }
`;
export const MoreInfoWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 20px;

  ul {
    padding: 0;
  }

  a {
    text-align: center;
    text-decoration: none;
    color: black;
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 8px 20px;

    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export const MoreInfoWrapTitle = styled.h3`
  text-align: center;
  font-size: 1.7rem;
  word-spacing: 0.6rem;
`;
