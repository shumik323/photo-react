import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { PageError } from './PageError';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {};
export const Dark: Story = {};

Dark.decorators = [ThemesDecorator(Theme.DARK)];
