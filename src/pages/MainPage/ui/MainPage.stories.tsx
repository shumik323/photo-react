import type { Meta, StoryObj } from '@storybook/react';

import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {};
export const Dark: Story = {};

Dark.decorators = [ThemesDecorator(Theme.DARK)];
