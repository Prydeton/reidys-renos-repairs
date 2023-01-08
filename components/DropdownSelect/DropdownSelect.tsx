import React, { FC } from 'react'

import { SelectWrapper, StyledOption, StyledSelect } from './DropdownSelect.styles'

interface DropdownSelectProps {
  options: string[],
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownSelect: FC<DropdownSelectProps> = ({options, setState}) => <SelectWrapper>
  <StyledSelect onChange={e => setState(e.target.value)} defaultValue={options[0]}>
    {options.map((option, idx) => (<StyledOption key={idx}>{option}</StyledOption>))}
  </StyledSelect>
</SelectWrapper>


export default DropdownSelect
