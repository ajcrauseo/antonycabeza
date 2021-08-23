import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;

  @media screen and (min-width:400px) {
    margin: 80px 0 10px;
  }

  /* border: 1px solid red; */
`;
export const FooterLogo = styled.img`
  width: 30px;
  margin-right: 20px;
`;
export const FooterTitle = styled.p`
  font-size: 14px;
`;
