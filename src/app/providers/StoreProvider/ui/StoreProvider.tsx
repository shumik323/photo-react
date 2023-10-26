import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateScheme } from '../config/StateScheme';

interface StoreProviderProps {
    children?: ReactNode | any,
    initialState?: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(
        initialState as StateScheme,
        asyncReducers as ReducersMapObject<StateScheme>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
