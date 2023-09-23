import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialsState: UserSchema = {};

export const counterSlice = createSlice({
    name: 'user',
    initialState: initialsState,
    reducers: {},
});

export const {
    actions: userActions,
    reducer: userReducer,
} = counterSlice;
