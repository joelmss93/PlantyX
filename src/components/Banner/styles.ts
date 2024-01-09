import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1440px;
  max-height: 766px;

  display: flex;
  flex-direction: row;
`

export const ImageContent = styled.div`
  max-width: 35%;

  img {
    height: 100%;
    /* max-height: 766px; */
  }
`

export const SideInformation = styled.div`
  width: 65%;

  display: flex;
  flex-direction: column;

  padding: 82px 37px;

  h1 {
    font-family: Belleza;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;

    max-width: 584px;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    width: 178px;
    margin-top: 43px;
  }

  > p {
    font-family: DM Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin-top: 80px;

    max-width: 310px;
    color: ${({ theme }) => theme.colors.text};
  }

  > span {
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 250;
    line-height: normal;

    margin-top: 41px;
    color: ${({ theme }) => theme.colors.text};
  }
`
