import { createSlice } from '@reduxjs/toolkit';
import { CounterScheme } from '../types/counterScheme';

const initialsState: CounterScheme = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialsState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
} = counterSlice;
