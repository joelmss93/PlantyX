import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 114px 37px 0;
`

export const BestSellersHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 37px;
  width: 100%;

  > p {
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.text};
  }

  > h3 {
    font-family: Lora;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    max-width: 526px;
    color: ${({ theme }) => theme.colors.text};
  }

  > button {
    max-width: 134px;
    font-size: 14.77px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    width: 134px;
    padding: 10.755px 20.792px;
    justify-content: center;
    align-items: center;
  }
`

export const ProductsContainer = styled.div`
  position: relative;
  display: flex;
  height: 640px;
  max-width: 1270px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 44px;
    padding: 0px 0px 24px 0px;
    height: 640px;
    width: 100%;
    margin-top: 52px;
    max-width: 1270px;

    overflow-y: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none !important;
  }
`

interface ProductsRollButtonProps {
  side: 'right' | 'left'
}

export const ProductsRollButton = styled.button<ProductsRollButtonProps>`
  position: absolute;
  top: 355px;
  z-index: 2;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  padding: 8px;
  transition: ease-in 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ side }) =>
    side === 'right'
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}

  svg {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.secundary};
    }
  }
`
