import React, { useState } from 'react';
import '../../assets/styles/otp-style.css';
import toast from "react-hot-toast";

const OtpModal = ({ isOpen, onClose, email, onVerify, onResend }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = async () => {
        const success = await onVerify(otp.join(""));
        if (success) {
            toast.success('OTP has been verified');
            onClose();
        }else {
            toast.error("Otp verification failed try another one");
        }
    };


    const isOtpComplete = otp.every((val) => val.trim() !== "");

    if (!isOpen) return null;

    return (
        <div className="otp-modal-overlay">
            <div className="otp-modal">
                <h2 className="otp-title">Patient Login</h2>
                <p className="otp-subtitle">
                    Enter the OTP sent to <span className="highlight">{email}</span>
                </p>

                <div className="otp-input-group">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(e.target, index)}
                            className="otp-input"
                        />
                    ))}
                </div>

                <div className="otp-footer">
                    <button onClick={onResend} className="otp-link">
                        Didn't get OTP try other one !
                    </button>

                    <button
                        className="otp-button"
                        onClick={handleSubmit}
                        disabled={!isOtpComplete}
                    >
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpModal;
