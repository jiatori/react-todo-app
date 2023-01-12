import React from 'react'

export default function Form({value, btnSubmit, setValue}) {

    //2-2. textChange 함수
    const textChange = (e) => { 
        // console.log('e', e.target.value)
        setValue(e.target.value);
    }

    return (
        <div>
            {/* 2-1. 할일목록 추가 입력창 만들기 */}
            <form style= {{display:'flex'}} onSubmit={btnSubmit}>
                <input type="text" name='value' placeholder='해야할 일을 입력하세요' onChange={textChange} value={value} />
                {/* 4-2. */}
                <input type="submit" value='입력' />
            </form>
        </div>
    )
}
