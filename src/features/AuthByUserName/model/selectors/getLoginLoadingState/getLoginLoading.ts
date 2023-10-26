import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginLoading = (state: StateScheme) => getLoginState(state)?.isLoading || false;
