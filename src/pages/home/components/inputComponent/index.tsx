import { ContainerComponent, ContainerIcon, Input } from "./styled"

interface inputTypes {
  placeholder: string
  type: string
  name: string
  setName: any
}

const InputComponent = (props : inputTypes) => {
  const { placeholder, type, name, setName } = props;

  return (
    <ContainerComponent>
      <Input placeholder={placeholder} type={type} value={name} onChange={setName} />
      <ContainerIcon>
        x
      </ContainerIcon>
    </ContainerComponent>
  )
};

export default InputComponent;