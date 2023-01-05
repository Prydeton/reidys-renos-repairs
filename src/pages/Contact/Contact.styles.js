import { styled } from 'goober'

export const ContactWrapper = styled('div')`
  margin: 2em 3% 0px 3%;

  form {
    border-left: 1px solid var(--text);
    padding: 2em;

    @media (max-width: 1200px) {
      border: 0;
      padding: 0;
    }
  }
`

export const ContactDetail = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7em;
  margin: 2em 0px;
  
  @media (max-width: 1620px) {
    gap: 3%;
  }

  @media (max-width: 1200px) {
    grid-template-rows: 1.1fr min-content;
    grid-template-columns: none;
    gap: 1em;
  }
`

export const ContactMethodsList = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const ContactMethod = styled('a')`
  display: flex;
  gap: 1em;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin: 0;
  background: none;
  border: 0;
  -webkit-tap-highlight-color: transparent;
`

export const ContactForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 2em;

  div {
    display: flex;
    justify-content: space-between;
    gap: 2em;

    div {
      width: 100%;
    }
  }
`
