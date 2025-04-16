import { useState } from 'react';

const useResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [buttonText, setButtonText] = useState('Reset Password');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const resetState = () => {
        setNewPassword('');
        setConfirmPassword('');
        setError('');
        setButtonText('Reset Password');
        setIsSubmitting(false);
    };

    return {
        newPassword,
        setNewPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        setError,
        buttonText,
        setButtonText,
        isSubmitting,
        setIsSubmitting,
        resetState,
    };
};

export default useResetPassword;
