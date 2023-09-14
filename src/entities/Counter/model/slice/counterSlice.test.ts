import { CounterScheme } from '../types/counterScheme';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('call increment return value+1', () => {
        const state: CounterScheme = { value: 10 };

        expect(
            counterReducer(state, counterActions.increment()),
        )
            .toEqual({ value: 11 });
    });
    test('call increment return value-1', () => {
        const state: CounterScheme = { value: 10 };

        expect(
            counterReducer(state, counterActions.decrement()),
        )
            .toEqual({ value: 9 });
    });
    test('work reducer with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        )
            .toEqual({ value: 1 });
    });
});
