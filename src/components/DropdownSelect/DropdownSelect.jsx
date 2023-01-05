import { SelectWrapper, StyledOption, StyledSelect } from './DropdownSelect.styles'

const DropdownSelect = ({options, setState}) => <SelectWrapper>
  <StyledSelect onChange={e => setState(e.target.value)} defaultValue={options[0]}>
    {options.map((option, idx) => (<StyledOption key={idx}>{option}</StyledOption>))}
  </StyledSelect>
</SelectWrapper>


export default DropdownSelect
