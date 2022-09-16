import { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const AddUserInput = ({ onAddUser }) => {
  const [enteredName, setEnteredName] = useState(null);
  const [enteredAge, setEnteredAge] = useState(null);
  const [isValidLength, setIsValidLength] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  const userNameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageInputHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName === null) {
      setIsValidLength(!isValidLength);
      return;
    }
    if (enteredAge < 0 || enteredAge === null) {
      setIsValidAge(!isValidAge);
      return;
    }
    onAddUser({ name: enteredName, age: enteredAge });
  };

  return (
    <>
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
      {!isValidLength && (
        <Modal
          title='Invalid Input'
          buttonType='button'
          buttonContent='Okay'
          defaultOpen='false'
        >
          Please enter a valid name and age (non-emptyValues).
        </Modal>
      )}
      {!isValidAge && (
        <Modal
          title='Invalid Input'
          buttonType='button'
          buttonContent='Okay'
          defaultOpen='false'
        >
          Please enter a valid age ( &gt; 0).
        </Modal>
      )}
    </>
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
