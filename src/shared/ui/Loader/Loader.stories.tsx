import type { Meta, StoryObj } from '@storybook/react';

import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {};
export const Dark: Story = {};

Dark.decorators = [ThemesDecorator(Theme.DARK)];
