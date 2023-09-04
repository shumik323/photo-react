import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string,
}
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('loader', {}, [className])}>
        <span className="loader" />
    </div>
);

export default Loader;
