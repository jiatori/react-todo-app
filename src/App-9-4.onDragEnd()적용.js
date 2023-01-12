import React, {useState} from 'react';
import Lists from './components/Lists'; // 7-7
import Form from './components/Form'; // 8
export default function App() {
  

  //4-1.
  const [todoList, setTodoList] = useState([]);

  const [value, setValue] = useState('');

  // 4-4
  const btnSubmit = (e) => {
    e.preventDefault();
    
    let newTodo = {  //입력할 때 마다 변하는 값이므로 let 사용
      id: Date.now(),
      title: value, //입력한 값
      completed: false //할일 아직 안한거니까 체크표시안함=false
    }
    
    setTodoList(prev => [...prev, newTodo]) //전개연산자 사용하여 prev에 새로운 newTode를 복제해라

    setValue(''); //입력창에 입력한 값이 다시 초기값으로 돌아가도록 함
  }


  



  return (
    <div className='container'>
      <div className="todoBlock">
        <div className="title">
          <h1>To Do List</h1>
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