import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 159px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 50px;
  background: ${({ theme }) => theme.colors.backgroundDimmed};
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.444px;
  }

  color: ${({ theme }) => theme.colors.text};
`

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 33px;
  color: ${({ theme }) => theme.colors.text};

  > svg {
    color: ${({ theme }) => theme.colors.text};
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`
