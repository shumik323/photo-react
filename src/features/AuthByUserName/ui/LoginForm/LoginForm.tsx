import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import DynamicModulesLoader, { ReducersList } from 'shared/lib/components/DynamicModulesLoader/DynamicModulesLoader';
import { getLoginPassword } from '../../model/selectors/getLoginPasswordState/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginErrorState/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoadingState/getLoginLoading';
import { getLoginUsername } from '../../model/selectors/getLoginUsernameState/getLoginUsername';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string,
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [
        username,
        password,
        error,
        isLoading,
    ] = [
        useSelector(getLoginUsername),
        useSelector(getLoginPassword),
        useSelector(getLoginError),
        useSelector(getLoginLoading),
    ];

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModulesLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('formauth.title')} />

                {error && <Text text={t('error.auth')} theme={TextTheme.ERROR} />}

                <Input
                    autofocus
                    type="text"
                    placeholder={t('enter.username')}
                    className={cls.input}
                    onChange={onChangeUserName}
                    value={username}
                />
                <Input
                    type="text"
                    placeholder={t('enter.password')}
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('login.submit')}
                </Button>
            </div>
        </DynamicModulesLoader>
    );
});

export default LoginForm;
