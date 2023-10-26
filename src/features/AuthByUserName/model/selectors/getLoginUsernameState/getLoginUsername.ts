import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginUsername = (state: StateScheme) => getLoginState(state)?.username || '';
