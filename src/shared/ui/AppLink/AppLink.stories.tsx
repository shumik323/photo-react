import type { Meta, StoryObj } from '@storybook/react';

import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text Primary Link',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text Secondary Link',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        children: 'Text Red Link',
        theme: AppLinkTheme.RED,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text Primary Dark Link',
        theme: AppLinkTheme.PRIMARY,
    },
};

PrimaryDark.decorators = [ThemesDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        children: 'Text Secondary Dark Link',
        theme: AppLinkTheme.SECONDARY,
    },
};

SecondaryDark.decorators = [ThemesDecorator(Theme.DARK)];

export const RedDark: Story = {
    args: {
        children: 'Text Red Dark Link',
        theme: AppLinkTheme.RED,
    },
};

RedDark.decorators = [ThemesDecorator(Theme.DARK)];
