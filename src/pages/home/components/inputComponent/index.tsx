import { ContainerComponent, ContainerIcon, Input } from "./styled"

interface inputTypes {
  placeholder: string
  type: string
  value: string
  handleChange: any
}

const InputComponent = (props : inputTypes) => {
  const { placeholder, type, value, handleChange } = props;

  return (
    <ContainerComponent>
      <Input placeholder={placeholder} type={type} value={value} onChange={handleChange} />
      <ContainerIcon>
        x
      </ContainerIcon>
    </ContainerComponent>
  )
};

export default InputComponent;