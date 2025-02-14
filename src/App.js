import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row }  from './styles';
import { useState } from 'react';

import { FaBackspace, FaEquals, FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";
import { PiPercentBold } from "react-icons/pi";
import { TbSquareRoot2 } from "react-icons/tb";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    if (number === ',') {
      setCurrentNumber(prev => prev.includes('.') ? prev : `${prev}.`);
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    }
  };


  const handleOperation = (operator) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(operator);
    } else {
      handleEquals();
      setOperation(operator);
    }
  };
  
  const handleBackspace = () => {
    setCurrentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  };
  const handleSquareRoot = () => {
    setCurrentNumber(String(Math.sqrt(Number(currentNumber))));
  };
  
  const handleSquare = () => {
    setCurrentNumber(String(Math.pow(Number(currentNumber), 2)));
  };
  
  const handleInverse = () => {
    setCurrentNumber(Number(currentNumber) !== 0 ? String(1 / Number(currentNumber)) : "Erro");
  };
  
  const handlePercentage = () => {
    setCurrentNumber(String(Number(currentNumber) / 100));
  };
  
  const handleClearEntry = () => {
    setCurrentNumber('0');
  };
  
  const handleToggleSign = () => {
    setCurrentNumber(prev => String(Number(prev) * -1));
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      let result = 0;
  
      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case '*':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case '/':
          result = Number(currentNumber) === 0 ? 'Erro' : Number(firstNumber) / Number(currentNumber);
          break;
        default:
          return;
      }
  
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} operationSummary={`${firstNumber} ${operation}`} />
        <Row>
        <Button label={<PiPercentBold size={16} />} bgColor="#282828" onClick={handlePercentage}/>
        <Button label="CE" bgColor="#282828" onClick={handleClearEntry}/>
        <Button label="C" bgColor="#282828"  onClick={handleOnClear}/>
        <Button label={<FaBackspace size={16} />} bgColor="#282828" onClick={handleBackspace}/>
        </Row>
        <Row>
        <Button label="1/x" bgColor="#282828" onClick={handleInverse}/>
        <Button label="x²" bgColor="#282828" onClick={handleSquare}/>
        <Button label={<TbSquareRoot2 size={16} />} bgColor="#282828" onClick={handleSquareRoot}/>
        <Button label={<FaDivide size={14} />} bgColor="#282828" onClick={() => handleOperation('/')}/>
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label={<FaTimes size={14} />} bgColor="#282828" onClick={() => handleOperation('*')}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label={<FaMinus size={14} />} bgColor="#282828" onClick={() => handleOperation('-')}/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label={<FaPlus size={14} />} bgColor="#282828" onClick={() => handleOperation('+')}/>
        </Row>
        <Row>
        <Button label="+/-" bgColor="#282828"  onClick={handleToggleSign}/>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="," bgColor="#282828"  onClick={() => handleAddNumber(',')}/>
        <Button label={<FaEquals size={14} />} bgColor="#289735" color="#fff"  onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
