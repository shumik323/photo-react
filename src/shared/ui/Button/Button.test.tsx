import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('render default cmp', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test(`render cmp with ${ButtonTheme.CLEAR} themes`, () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass(ButtonTheme.CLEAR);
        // screen.debug();
    });
});
