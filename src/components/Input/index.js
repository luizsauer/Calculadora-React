
import { InputContainer } from './styles';

const Input = ({value, operationSummary }) => {
    return (
      <InputContainer>
        <input disabled value={value}/>
        <span>{operationSummary}</span>
      </InputContainer>
    );
  }
  
  export default Input;