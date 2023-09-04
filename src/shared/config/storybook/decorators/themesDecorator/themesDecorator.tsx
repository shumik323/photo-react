import { Theme } from 'app/providers/ThemeProvider';
import { StoryFn } from '@storybook/react';

export const ThemesDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
