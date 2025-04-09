import { useState } from 'react';

const useForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [forgotPasswordError, setForgotPasswordError] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const resetState = () => {
        setEmail('');
        setForgotPasswordError('');
        setShowMessage(false);
        setIsSubmitting(false);
    };

    return {
        email,
        setEmail,
        forgotPasswordError,
        setForgotPasswordError,
        showMessage,
        setShowMessage,
        isSubmitting,
        setIsSubmitting,
        resetState,
    };
};

export default useForgotPassword;
