import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoToBack = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 18px;
  padding: 3px 10px;
  border: 0.5px solid lightgray;
`;

export const Container = styled.div`
  max-width: calc(100vw - 48px);
  margin: 0 16px 50px 16px;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 25px;
  justify-content: start;
  align-items: center;
  top: 0;
  height: 80px;
  width: 100%;
  transition: top 0.2s linear;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 30px;

  &.active {
    color: white;
    background-color: orange;
  }
`;
