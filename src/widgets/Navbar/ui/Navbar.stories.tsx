import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator/storeDecorator';
import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [
        StoreDecorator({}),
    ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemesDecorator(Theme.DARK)];

export const AuthUserNavbar: Story = {};
AuthUserNavbar.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];
