import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateScheme } from '../config/StateScheme';

interface StoreProviderProps {
    children?: ReactNode | any, // ????
    initialState?: DeepPartial<StateScheme>,
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as StateScheme); // Передайте initialState, если это необходимо

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
