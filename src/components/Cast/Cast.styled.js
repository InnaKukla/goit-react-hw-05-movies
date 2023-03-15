import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin: 0;

  @media screen and (min-width: 768px) {
    max-width: 768px;
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
export const CastItem = styled.li`
  display: flex;
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

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const CastImg = styled.img`
  display: block;
  margin-right: 10px;
  width: 150px;
  height: 220px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 220px;
  }

  @media screen and (min-width: 1280px) {
    width: 150px;
    max-height: 220px;
  }
`;

export const CastName = styled.p`
  font-size: 25px;
  font-weight: 200;
`;

export const CastCharacter = styled.p`
  font-size: 20px;
`;

export const CastCharacterInfo = styled.span`
  font-size: 15px;
`;

export const CastInfo = styled.div`
  align-self: center;
`;
