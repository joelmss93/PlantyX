import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;

  position: relative;
  padding: 110px 37px 0;

  > p {
    color: ${({ theme }) => theme.colors.text};
    font-family: Dm Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    max-width: 676px;
  }

  > span:first-of-type {
    color: ${({ theme }) => theme.colors.text};
    font-family: Dm Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 59px;
  }

  > span {
    color: ${({ theme }) => theme.colors.text};
    font-family: Dm Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 250;
    line-height: normal;
    margin-top: 11px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 114px;
  right: 0;

  > button {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
