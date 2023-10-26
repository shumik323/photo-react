import Modal from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
// import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean,
    onClose: () => void,
}
export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
        {/* <LoginForm /> */}
    </Modal>
);

export default LoginModal;
