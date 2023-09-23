import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    autofocus?: boolean,
}
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        placeholder,
        onChange,
        autofocus,
        type = 'text',
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>();
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (event: any) => {
        setCaretPosition(event?.target?.selectionStart || 0);
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
    };

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        style={{ left: `${caretPosition * 7}px` }}
                        className={cls.caret}
                    />
                )}
            </div>
        </div>
    );
});

export default Input;
