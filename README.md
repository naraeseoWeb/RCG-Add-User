# React Complete Guide 
`Add User 부분 스스로 구현하기!`

---

## 9월 16일

### 1. 문제 발견
- 리스트 구현 시 빈 칸의 객체가 들어가는 것 확인

![image](https://user-images.githubusercontent.com/94629063/190535726-480cd29b-a8fc-473f-9b5d-557e5175eaaf.png)
![image](https://user-images.githubusercontent.com/94629063/190535769-d5fc6fa2-358c-4e7e-91b0-40676f6183ef.png)

### 2. 이유 확인
```JavaScript
App.jsx

function App() {
  const [userInfo, setUserInfo] = useState([
    { name: null, age: null, id: null },
  ]);
  const [addedUser, setAddedUser] = useState(false);
  ...
```
- userInfo에 초기값으로 null을 셋팅해 놓은것이 디폴트로 입력되는 것 확인함

### 3. 문제 해결
```JavaScript
App.jsx

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [addedUser, setAddedUser] = useState(false);
  ...
```
- 배열의 내용을 제거하고 빈 배열을 입력하여 초기값을 빈 값으로 변환함
