import { StoryFn } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

const initial: DeepPartial<StateScheme> = {
    counter: { value: 10 },
};

export const reduxDecorator = (Story: StoryFn) => (
    <StoreProvider initialState={initial}>
        <Story />
    </StoreProvider>
);
