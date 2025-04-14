import { useState } from 'react';

const useForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const resetState = () => {
        setEmail('');
        setShowMessage(false);
        setIsSubmitting(false);
    };

    return {
        email,
        setEmail,
        showMessage,
        setShowMessage,
        isSubmitting,
        setIsSubmitting,
        resetState,
    };
};

export default useForgotPassword;
