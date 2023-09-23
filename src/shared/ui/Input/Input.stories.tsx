import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'enter.username',
        value: 'value',
    },
};

export const Autofocus: Story = {
    args: {
        placeholder: 'enter.username',
        autofocus: true,
        value: 'value',
    },
};

export const PrimaryDark: Story = {
    args: {
        type: 'text',
        placeholder: 'enter.username',
        value: 'value',
    },
};

PrimaryDark.decorators = [ThemesDecorator(Theme.DARK)];
