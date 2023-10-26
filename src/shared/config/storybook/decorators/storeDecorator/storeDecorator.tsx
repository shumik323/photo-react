import { StoryFn } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>,
) => (Story: StoryFn) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{
            ...defaultReducers,
            ...asyncReducers,
        }}
    >
        <Story />
    </StoreProvider>
);
