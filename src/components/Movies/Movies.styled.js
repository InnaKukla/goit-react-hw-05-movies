import styled from 'styled-components';

export const MovieForm = styled.form`
  margin-top: 20px;
  margin-left: 30px;

  input {
    width: 800px;
    height: 20px;
    line-height: 46px;
    font-size: 1.1em;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    padding: 10px 20px;
    border: 1px solid black;
    :active,
    :hover,
    :focus {
      border: 0.5px solid #1f75fe;
      box-shadow: 0px 0px 5px 0px #1f75fe;
      outline: none;
    }
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 44px;
    padding: 10px 26px;
    border: none;
    background-color: cyan;
    border-radius: 30px;
    font-size: 20px;
    color: #fff;
    :hover {
      transform: scale(1.1);
    }
  }
`;

export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  /* padding: 20px 20px 40px 20px; */
  margin: 0;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    //   display: flex;
    //   flex-wrap: wrap;
    margin-right: auto;
    margin-left: auto;
    gap: 32px;
    padding: 30px 25px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    gap: 0;
  }
`;
export const MovieItem = styled.li`
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;
  list-style: none;
  margin-bottom: 20px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.02);
    outline: none;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin-right: 16px;
    margin-bottom: 32px;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-last-child(-n + 3) {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const MovieImg = styled.img`
  display: block;
  width: 280px;
  height: 402px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 455px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    height: 574px;
  }
`;

export const MovieTitle = styled.h2`
  margin-left: 20px;
`;

export const MovieInfo = styled.div`
  margin-left: 20px;
`;

// -------------Home Page------------
export const HomeTitle = styled.h2`
  text-align: center;
  font-size: 3.2rem;
  word-spacing: 0.6rem;
  margin: 0 0 10px 0;
`;
