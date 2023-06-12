import {createSlice} from '@reduxjs/toolkit';

//initialState를 통해 state 의 처음 상태를 정의합니다. 
//reducers에서 액션을 설정합니다. 
//plus 와 minus를 export해서 다른 파일(app.jsx)에서 import 합니다. 
//slice는 slice.reducer로 내보냅니다. 
//sotre.js는 위 두 파일을 전부 reducer로 받습니다. 
export const countSlice = createSlice({
    name: 'counter',
    initialState: {value:0},
    reducers:{
        plus: state => {
            state.value += 1
        },
        minus: state => {
            state.value -= 1
        },
    },
});

export const {plus, minus} = countSlice.actions;
export default countSlice.reducer;