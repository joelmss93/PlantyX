import styled, { keyframes } from 'styled-components'

interface MenuProps {
  visible: boolean
}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(320px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`

const disappearToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to{

    opacity: 0;
    transform: translateX(320px);
  }
`

export const Overlay = styled.div<MenuProps>`
  width: 100%;
  height: 100%;

  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

export const Container = styled.div<MenuProps>`
  display: flex;
  max-width: 25.25rem;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0rem 0.5rem 1.5rem 0rem rgba(113, 128, 150, 0.24);
  position: absolute;
  top: 4.25rem;
  right: 2rem;
  z-index: 1001;
  animation: ${({ visible }) => (visible ? appearFromLeft : disappearToLeft)} 1s;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  h4 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.6875rem;
  }
`

interface ActionButtonProps {
  selectedTheme: 'light' | 'dark'
  blank?: boolean
}

export const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  > div {
    p {
      color: ${({ theme }) => theme.colors.text};
    }

    img {
      width: 24px;
      height: 24px;
    }
  }

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid
      ${({ selectedTheme, blank }) =>
        blank
          ? 'transparent'
          : selectedTheme === 'light'
            ? 'rgba(237, 155, 64, 0.4)'
            : 'rgba(3, 94, 123, 0.4)'};

    background: ${({ selectedTheme, blank }) =>
      blank
        ? 'transparent'
        : selectedTheme === 'light'
          ? 'rgba(237, 155, 64, 0.3)'
          : 'rgba(3, 94, 123, 0.3)'};

    svg {
      color: ${({ selectedTheme }) =>
        selectedTheme === 'light' ? '#ED9B40' : '#035E7B'};
    }
  }
`
