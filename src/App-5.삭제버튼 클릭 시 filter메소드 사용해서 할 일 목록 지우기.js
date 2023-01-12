import React, {useState} from 'react'

export default function App() {
  //리스트 스타일
  const listStyle = {
    padding: "10px",
    borderBottom : '1px #ccc dotted',
    textdecoration : 'none'
  }
  //버튼 스타일
  const btnStyle = {
    color : '#fff',
    border : 'none',
    padding : '5px 9px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
  }

  //4-1.
  const [todoList, setTodoList] = useState([]);

  //2-2. textChange 함수
  const textChange = (e) => { 
    // console.log('e', e.target.value)
    setValue(e.target.value);
  }
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

  // 5.
  const btnClick = (id) => {
    let newTodoList = todoList.filter(data => data.id !== id)
    
    //console.log('newTodoList', newTodoList);
    setTodoList(newTodoList);
  }



  return (
    <div className='container'>
      <div className="todoBlock">
        <div className="title">
          <h1>To Do List</h1>
        </div>

        {/* 1-2. map() 메소드를 이용해 배열내의 요소를 호출한 결과를 모아 새로운 배열로 반환. (App-1과 동일한 결과 나옴!) */}
        {todoList.map((data) =>
          <div style={listStyle} key={data.id}>
            <input type="checkbox" defaultChecked={false} />
            {data.title}
            <button style={btnStyle} onClick={() => btnClick(data.id)}>X</button>
          </div>
        )}

        {/* 2-1. 할일목록 추가 입력창 만들기 */}
        <form style= {{display:'flex'}} onSubmit={btnSubmit}>
          <input type="text" name='value' style={{flex:'10', padding:'5px'}}placeholder='해야할 일을 입력하세요' onChange={textChange} value={value} />
          {/* 4-2. */}
          <input type="submit" value='입력' style={{flex:1}} />
        </form>
      </div>
    </div>
  )
}