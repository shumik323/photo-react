import type { Meta, StoryObj } from '@storybook/react';

import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title Title Title Title',
        text: 'Description Description Description',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title Title Title Title',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title Title Title Title Dark',
        text: 'Description Description Description Dark',
    },
};
PrimaryDark.decorators = [ThemesDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: 'Description Description Description Dark',
    },
};
OnlyTextDark.decorators = [ThemesDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title Title Title Title Dark',
    },
};

export const ErrorLight: Story = {
    args: {
        title: 'Error title',
        text: 'error description',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Error title',
        text: 'error description',
        theme: TextTheme.ERROR,
    },
};

[PrimaryDark, OnlyTextDark, OnlyTitleDark, ErrorDark].forEach((stories) => {
    stories.decorators = [ThemesDecorator(Theme.DARK)];
});
