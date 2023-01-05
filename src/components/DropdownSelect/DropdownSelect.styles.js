import { styled } from 'goober'

export const StyledSelect = styled('select')`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;

  z-index: 1;

  &::-ms-expand {
    display: none;
  }

  outline: none;
`

export const StyledOption = styled('option')`

`

export const SelectWrapper = styled('div')`
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;

  select,
  &::after {
    grid-area: select;
  }

  width: max-content;
  height: min-content;

  border: 1px solid var(--brand-orange);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;

  &::after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--brand-orange);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`
