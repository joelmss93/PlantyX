import styled from 'styled-components'

interface ContainerProps {
  available: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 368px;
  height: 410px;

  opacity: ${({ available }) => (available ? 1 : 0.6)};

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > img {
      width: 368px;
      height: 577px;
      flex-shrink: 0;
    }

    > p {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: DM Sans;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`
