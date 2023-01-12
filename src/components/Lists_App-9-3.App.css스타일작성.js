import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd' // 9-1

//7-8 Lists.js에서 totoList 내려 받은 것 써준다
//7-10. setTodoList도 Props로 적용
export default function Lists({todoList, setTodoList}) {

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


    // 9-1. div, DragDropContext, Droppable, Draggable 로 묶기
    // 9-2. Drag and Drop 기능  구현
    return (
        <div>
            <DragDropContext>
                <Droppable droppableId='todoApp'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoList.map((data, index) =>
                                <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                                    {(provided, snapshot) => (
                                        <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                            <div className='list'>
                                                <input type="checkbox" defaultChecked={false} onChange={() => checkboxCompleted(data.id)}/>
                                                    <span className={data.completed ? 'completed': undefined}>{data.title}</span>
                                                <button className='btn' onClick={() => btnClick(data.id)}>X</button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {/* 3. 드래그시 레이아웃이 빈공간이 사라져 레이아웃이 어긋나는 것 수정을 위해 <div>영역 안에  {provided.placeholder} 작성 */}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
