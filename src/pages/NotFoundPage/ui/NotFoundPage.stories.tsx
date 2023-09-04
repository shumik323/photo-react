import type { Meta, StoryObj } from '@storybook/react';

import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {};
export const Dark: Story = {};

Dark.decorators = [ThemesDecorator(Theme.DARK)];
