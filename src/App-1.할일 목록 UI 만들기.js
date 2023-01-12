import React from 'react'

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

  return (
    <div className='container'>
      <div className="todoBlock">
        <div className="title">
          <h1>To Do List</h1>
        </div>

        {/* 리스트시작 */}
        <div style={listStyle}>
          <input type="checkbox" defaultChecked={false} />
          공부하기
          <button style={btnStyle}>X</button>
        </div>
        <div style={listStyle}>
          <input type="checkbox" defaultChecked={false} />
          청소하기
          <button style={btnStyle}>X</button>
        </div>
      </div>
    </div>
  )
}
