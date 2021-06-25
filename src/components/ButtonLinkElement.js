import styled from "styled-components";

export const ButtonLink = styled.a`
  width: 90%;
  max-width: 180px;

  padding: 6px 32px;
  margin: 6px 2px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #004191;
  text-decoration: none;
  color: #efefef;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;

  // Project Section Buttons
  grid-area: ${({ webicon }) => (webicon ? 'btn-web' : 'none')};
  grid-area: ${({ githubicon }) => (githubicon ? 'btn-github' : 'none')};


  &:hover {
    background: #efefef;
    color: #0d0d0d;
  }
  @media screen and (min-width: 321px) {
    padding: 8px 32px;
    margin: 10px 2px;
    font-size: 16px;
  }
`;