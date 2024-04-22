import { ContainerComponent, ContainerIcon, Input } from "./styled"

interface inputTypes {
  ariaLabel?: string
  placeholder: string
  type?: string
  value?: string
  handleChange?: any
}

const InputComponent = (props : inputTypes) => {
  const { ariaLabel, placeholder, type, value, handleChange } = props;

  return (
    <ContainerComponent>
      <Input aria-label={ariaLabel} placeholder={placeholder} type={type} value={value} onChange={handleChange} />
      <ContainerIcon>
        x
      </ContainerIcon>
    </ContainerComponent>
  )
};

export default InputComponent;