import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { i18nDecorator } from 'shared/config/storybook/decorators/i18nDecorator/i18nDecorator';
import { ThemesDecorator } from 'shared/config/storybook/decorators/themesDecorator/themesDecorator';
import { RouterDecorator } from 'shared/config/storybook/decorators/routerDecorator/routerDecorator';
import { StyleDecorator } from 'shared/config/storybook/decorators/styleDecorator/styleDecorator';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        // TODO: fabric decorators
        i18nDecorator,
        StyleDecorator,
        ThemesDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export default preview;
