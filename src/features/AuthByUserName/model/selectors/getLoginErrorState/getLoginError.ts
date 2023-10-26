import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError = (state: StateScheme) => getLoginState(state)?.error || '';
