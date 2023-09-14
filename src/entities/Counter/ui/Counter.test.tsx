import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// import { userEvent } from '@storybook/testing-library';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render default cmp', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('counter increasing on 1 by press on button increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('counter decreasing on 1 by press on button decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
