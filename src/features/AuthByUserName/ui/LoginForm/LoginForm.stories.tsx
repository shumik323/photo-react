import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator/storeDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: 'asd',
    },
})];

export const Error: Story = {};

Error.decorators = [
    StoreDecorator({
        loginForm: {
            error: 'user undefined',
            username: '123',
            password: '123',
        },
    }),
];

export const Loading: Story = {};
Loading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];
