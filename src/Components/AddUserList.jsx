import styled from 'styled-components';
import AddUserItem from './AddUserItem';

const AddUserList = ({ items, onAddUser }) => {
  return (
    <>
      {onAddUser && (
        <Ul>
          {items.map((user) => (
            <AddUserItem key={user.id} id={user.id}>
              {user.name} ({user.age} years old)
            </AddUserItem>
          ))}
        </Ul>
      )}
    </>
  );
};

const Ul = styled.ul`
  background-color: #fff;
  width: 30rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export default AddUserList;
