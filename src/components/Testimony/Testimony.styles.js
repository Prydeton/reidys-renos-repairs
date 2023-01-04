import { styled } from 'goober'

export const TestimonyContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  padding: 1em;
`

export const TestimonyContent = styled('div')`
  position: relative;
  padding: 1em 1.2em;
  
  p {
    color: white;
    font-weight: bold;
    margin: 0;
  }

  span {
    position: absolute;
    color: var(--brand-orange);
    font-size: 2em;
  }

  span:first-of-type {
    top: 0;
    left: 0;
  }

  span:last-of-type {
    bottom: -15px;
    right: 0;
  }
`
