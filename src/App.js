import AddUserInput from './Components/AddUserInput';
import './App.css';
import { useState } from 'react';
import AddUserList from './Components/AddUserList';
import Modal from './UI/Modal';

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [addedUser, setAddedUser] = useState(false);

  const AddUserHandler = (enteredText) => {
    setUserInfo((prevText) => {
      const updatedText = [...prevText];
      updatedText.push({
        name: enteredText.name,
        age: enteredText.age,
        id: Math.random().toString(),
      });
      setAddedUser(true);
      return updatedText;
    });
  };

  return (
    <>
      <div className='App'>
        <section className='AddUser-form'>
          <AddUserInput onAddUser={AddUserHandler} />
        </section>
        <section className='User-List'>
          <AddUserList onAddUser={addedUser} items={userInfo} />
        </section>
      </div>
      <Modal title='Invalid Input' buttonType='button' buttonContent='Okay'>
        Please enter a valid name and age (non-emptyValues).
      </Modal>
    </>
  );
}

export default App;
