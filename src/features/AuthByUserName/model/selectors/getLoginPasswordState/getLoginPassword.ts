import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginPassword = (state: StateScheme) => getLoginState(state)?.password || '';
