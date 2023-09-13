import type { Meta, StoryObj } from '@storybook/react';

import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {
    args: {
        isOpen: true,
        children: '                Lorem ipsum dolor sit amet.\n'
            + '                Lorem ipsum dolor sit amet.\n'
            + '                Lorem ipsum dolor sit amet.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: '                Lorem ipsum dolor sit amet.\n'
            + '                Lorem ipsum dolor sit amet.\n'
            + '                Lorem ipsum dolor sit amet.',
    },
};
Dark.decorators = [ThemesDecorator(Theme.DARK)];
