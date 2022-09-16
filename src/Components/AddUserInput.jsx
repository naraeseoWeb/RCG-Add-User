import { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const AddUserInput = ({ onAddUser }) => {
  const [enteredName, setEnteredName] = useState(null);
  const [enteredAge, setEnteredAge] = useState(null);

  const userNameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageInputHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0) {
      window.alert('이름을 다시 입력하시오');
      return;
    }
    if (enteredAge.trim().length === 0) {
      window.alert('나이를 다시 입력하시오');
      return;
    }
    onAddUser({ name: enteredName, age: enteredAge });
  };

  return (
    <form>
      <Fieldset>
        <Label>User Name</Label>
        <Input type='text' onChange={userNameInputHandler} />
      </Fieldset>
      <Fieldset>
        <Label>Age (years)</Label>
        <Input type='text' onChange={ageInputHandler} />
      </Fieldset>
      <Button type='submit' onClick={addUserSubmitHandler}>
        Add User
      </Button>
    </form>
  );
};

const Fieldset = styled.div`
  flex-direction: column;
  padding: 10px 0;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
`;

export default AddUserInput;
