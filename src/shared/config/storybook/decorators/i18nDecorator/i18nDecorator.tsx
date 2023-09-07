import { StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

export const i18nDecorator = (Story: StoryFn) => (
    <Suspense fallback={<PageLoader />}>
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>
    </Suspense>
);
