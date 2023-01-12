import React, {useState} from 'react';
import Lists from './components/Lists'; // 7-7
import Form from './components/Form'; // 8
//11.가져오기
const localTodoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];

export default function App() {
  //4-1.
  const [todoList, setTodoList] = useState(localTodoList);
  const [value, setValue] = useState('');

  // 4-4
  const btnSubmit = (e) => {
    e.preventDefault();
    
    let newTodo = {  //입력할 때 마다 변하는 값이므로 let 사용
      id: Date.now(),
      title: value, //입력한 값
      completed: false //할일 아직 안한거니까 체크표시안함=false
    }

    // 12. 경고창 만들기
    if (value.trim().length !== 0) {
      setTodoList(prev => [...prev, newTodo]);
      localStorage.setItem('todoList', JSON.stringify([...todoList, newTodo]));
      setValue('');
    } else {
      alert('해야 할 일을 입력하세요.');
    }
  }

  //10.deleteAll 모두 삭제 함수 작성
  const deleteAll = () => {
    setTodoList([]); //배열 [] 로 넣는거 주의!
    localStorage.setItem('todoList', JSON.stringify([])); //11-2
  }



  return (
    <div className='container'>
      <div className="todoBlock">
        <div className="title">
          <h1>To Do List</h1>
          {/* 10 모두삭제 버튼 작성 */}
          <button className='deleteBtn' onClick={deleteAll}>Delete All</button>
        </div>

        {/* 7-10. setTodoList도 Props로 적용 */}
        <Lists todoList={todoList} setTodoList={setTodoList}/>
        {/* 닫힘태그 / 꼭 넣어주기 */}

        {/* 8 */}
        <Form value={value} setValue={setValue} btnSubmit={btnSubmit}/>

      </div>
    </div>
  )
}