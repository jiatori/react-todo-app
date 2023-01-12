import React from 'react'

//7-8 Lists.js에서 totoList 내려 받은 것 써준다
//7-10. setTodoList도 Props로 적용
export default function Lists({todoList, setTodoList}) {

    //7-5. 버튼 스타일 변수 App.js에서 잘라내어 여기에 붙이기
    const btnStyle = {
        color : '#fff',
        border : 'none',
        padding : '5px 9px',
        borderRadius : '50%',
        cursor : 'pointer',
        float : 'right'
    }

    //7-9
    const listStyle = (completed) => {
        return {
        padding: "10px",
        borderBottom : '1px #ccc dotted',
        textDecoration : completed ? 'line-through' : 'none'
        }
    }
    const btnClick = (id) => {
        let newTodoList = todoList.filter(data => data.id !== id)
        //console.log('newTodoList', newTodoList);
        setTodoList(newTodoList);
    }
    const checkboxCompleted = (id) => {
        let newTodoList = todoList.map(data => {
        if(data.id === id) {
            data.completed = !data.completed;
        }
        return data;
        })
        setTodoList(newTodoList);
    }



    return (
        <div>
            {/* 7-4. ui부분 가져오기 */}
            {todoList.map((data) =>
                <div style={listStyle(data.completed)} key={data.id}>
                <input type="checkbox" defaultChecked={false} onChange={() => checkboxCompleted(data.id)}/>
                {data.title}
                <button style={btnStyle} onClick={() => btnClick(data.id)}>X</button>
            </div>
        )}
        </div>
    )
}
