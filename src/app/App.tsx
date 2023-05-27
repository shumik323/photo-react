import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";

const App = () => {
const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Home page</Link>
            <Link to={'/about'}>About page</Link>
            <AppRouter />
        </div>
    );
};

export default App;