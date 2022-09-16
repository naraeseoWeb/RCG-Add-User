import styled from 'styled-components';

const AddUserItem = ({ children }) => {
  return <Li>{children}</Li>;
};

const Li = styled.li`
  border: 1px solid #ccc;
  line-height: 20px;
  list-style: none;
  padding: 4px;
  font-size: 14px;
  margin-top: 5px;
`;

export default AddUserItem;
