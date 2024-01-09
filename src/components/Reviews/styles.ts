import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  /* max-width: 1440px; */
  max-width: 35%;
  padding: 114px 37px;
`

export const ShopReview = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 302px;

  h5 {
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 2px;
    margin-bottom: 26px;
  }

  > div {
    p {
      font-family: DM Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 350;
      line-height: normal;
      margin-bottom: 14px;
    }

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 15px;
      gap: 17px;

      > div {
        display: flex;
        gap: 4px;
      }

      span {
        font-family: DM Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      svg {
        color: #ed9b40;
      }
    }
  }

  > span {
    font-family: DM Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
