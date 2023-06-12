import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './countSlice';

//configureStore()는 별도의 메서드 없이 바로 미들웨어 추가 가능합니다.
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    // middleware: [...middlewares]
})

export default store;