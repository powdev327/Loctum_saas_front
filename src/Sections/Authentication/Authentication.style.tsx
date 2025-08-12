import styled from "styled-components";

const AuthenticationStyleWrapper = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 25%, #2d1b69 50%, #1e3a8a 75%, #0c0a09 100%);
  overflow: hidden;

  @keyframes glassmorphGlow {
    0%, 100% { 
      background-position: 0% 50%; 
      opacity: 0.4;
    }
    25% { 
      background-position: 100% 50%; 
      opacity: 0.7;
    }
    50% { 
      background-position: 50% 100%; 
      opacity: 0.5;
    }
    75% { 
      background-position: 50% 0%; 
      opacity: 0.8;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.15) 0%, transparent 50%);
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }

  .auth-form-section {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    position: relative;
    max-width: 50vw;
    width: 50%;
    min-width: 600px;
    overflow: visible;
    padding: 40px 60px;
    height: auto;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(255, 255, 255, 0.05);
    border-radius: 32px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, 
        rgba(102, 126, 234, 0.3) 0%, 
        rgba(255, 255, 255, 0.1) 25%,
        rgba(118, 75, 162, 0.3) 50%,
        rgba(255, 255, 255, 0.1) 75%,
        rgba(102, 126, 234, 0.3) 100%);
      background-size: 400% 400%;
      border-radius: 34px;
      animation: glassmorphGlow 8s ease-in-out infinite;
      opacity: 0.6;
      z-index: -1;
    }
    &::-webkit-scrollbar {
      display: none;
    }

    .auth-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    .form-group {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      margin-bottom: 18px;
    }
    span.error {
      color: #ff6b6b !important;
      position: absolute;
      right: 0 !important;
      top: calc(100% + 4px) !important;
      font-size: 12px !important;
      left: 140px !important;
      text-transform: none !important;
      font-weight: 500;
      background: rgba(255, 107, 107, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 107, 107, 0.3);
      padding: 4px 8px;
      border-radius: 4px;
      z-index: 10;
    }
    input.error {
      border-color: #ff6b6b !important;
      background: rgba(255, 107, 107, 0.08) !important;
      box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2) !important;
    }
    input.error:focus {
      background: rgba(255, 107, 107, 0.12) !important;
      border-color: #ff6b6b !important;
      box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.3) !important;
    }
    .progress {
      margin-top: -10px;
      height: 6px;
      border-radius: 3px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      
      .progress-bar {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 3px;
      }
    }
    .suggestion {
      font-size: 13px !important;
      margin-top: 12px !important;
      margin-bottom: 16px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
    }
    /* Category-based background images */
    &.professional-signup::after {
      content: "";
      position: absolute;
      top: 50px;
      right: -50px;
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, rgba(108, 117, 125, 0.04) 0%, rgba(173, 181, 189, 0.02) 100%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }
    
    &.professional-signup::before {
      content: "👨‍⚕️";
      position: absolute;
      top: 180px;
      right: 80px;
      font-size: 140px;
      opacity: 0.06;
      pointer-events: none;
      z-index: 0;
    }

    &.institution-signup::after {
      content: "";
      position: absolute;
      top: 50px;
      right: -50px;
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, rgba(108, 117, 125, 0.04) 0%, rgba(173, 181, 189, 0.02) 100%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }
    
    &.institution-signup::before {
      content: "🏥";
      position: absolute;
      top: 180px;
      right: 80px;
      font-size: 140px;
      opacity: 0.06;
      pointer-events: none;
      z-index: 0;
    }

    &.default-signup::after {
      content: "";
      height: 800px;
      width: 800px;
      background: linear-gradient(
        135deg,
        rgba(102, 126, 234, 0.08) 0%,
        rgba(118, 75, 162, 0.05) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 50%;
      left: -250px;
      top: 100px;
      position: absolute;
      pointer-events: none;
      z-index: 0;
    }
    form {
      position: relative;
      z-index: 1;
    }
    h4 {
      margin-bottom: 24px;
      font-weight: 700;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.95);
      text-align: center;
    }
    h2 {
      margin-bottom: 8px;
      font-size: 28px;
      color: rgba(255, 255, 255, 0.95);
    }
    label {
      text-transform: none;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 0;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.5px;
      min-width: 140px;
      width: 140px;
      flex-shrink: 0;
    }
    select {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.95);
      transition: all 0.3s ease;
      cursor: pointer;
      margin-bottom: 0;
      &:focus {
        outline: none;
        border-color: rgba(102, 126, 234, 0.6);
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 
          0 0 0 3px rgba(102, 126, 234, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
      &:hover {
        border-color: rgba(255, 255, 255, 0.25);
      }
      option {
        background: rgba(30, 30, 30, 0.95);
        color: rgba(255, 255, 255, 0.95);
      }
    }
    input {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      flex: 1;
      padding: 12px 16px;
      margin-bottom: 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.95);
      transition: all 0.3s ease;
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
      }
      &:focus {
        outline: none;
        border-color: rgba(102, 126, 234, 0.6);
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 
          0 0 0 3px rgba(102, 126, 234, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
      &:hover {
        border-color: rgba(255, 255, 255, 0.25);
      }
    }

    /* Modern Checkbox Styling */
    input[type="checkbox"] {
      appearance: none;
      width: 20px !important;
      height: 20px !important;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      cursor: pointer;
      position: relative;
      transition: all 0.3s ease;
      margin: 0 !important;
      
      &:hover {
        border-color: rgba(102, 126, 234, 0.6);
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
      }
      
      &:checked {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
        border-color: rgba(102, 126, 234, 0.8);
        
        &::after {
          content: "✓";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(255, 255, 255, 0.95);
          font-size: 12px;
          font-weight: bold;
        }
      }
      
      &:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
      }
    }

    /* Checkbox container styling */
    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.3s ease;
      cursor: pointer;
      
      &:hover {
        background: rgba(102, 126, 234, 0.1);
      }
      
      label {
        cursor: pointer;
        margin: 0;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.9);
        font-size: 14px;
        text-transform: none;
      }
    }

    /* Specialty selection styling */
    .specialty-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
      margin-top: 16px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .specialty-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: all 0.3s ease;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.9);
      
      &:hover {
        border-color: rgba(102, 126, 234, 0.6);
        background: rgba(255, 255, 255, 0.12);
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
      }
      
      &.selected {
        border-color: rgba(102, 126, 234, 0.8);
        background: rgba(102, 126, 234, 0.15);
      }
    }

    /* Selected specialties display */
    .selected-specialties {
      margin-top: 16px;
      padding: 12px 16px;
      background: rgba(102, 126, 234, 0.1);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-radius: 8px;
      border-left: 4px solid rgba(102, 126, 234, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.9);
      
      .specialty-tag {
        display: inline-block;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: rgba(255, 255, 255, 0.95);
        padding: 4px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 500;
        margin: 2px 4px;
      }
    }

    .form-primary-btn {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      padding: 14px 20px;
      width: 100%;
      font-weight: 700;
      font-size: 15px;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.95);
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 
        0 4px 15px rgba(102, 126, 234, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.05);
      margin-top: 8px;
      &:hover {
        transform: translateY(-2px);
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
        box-shadow: 
          0 8px 25px rgba(102, 126, 234, 0.4),
          inset 0 1px 0 rgba(255, 255, 255, 0.3),
          0 0 0 1px rgba(255, 255, 255, 0.1);
      }
      &:active {
        transform: translateY(0);
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        background: rgba(108, 117, 125, 0.3);
        box-shadow: 
          0 4px 15px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
    }

    .form-primary-btn-compact {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      padding: 12px 16px;
      flex: 1;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.95);
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 
        0 4px 15px rgba(102, 126, 234, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.05);
      margin-top: 0;
      &:hover {
        transform: translateY(-2px);
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
        box-shadow: 
          0 8px 25px rgba(102, 126, 234, 0.4),
          inset 0 1px 0 rgba(255, 255, 255, 0.3),
          0 0 0 1px rgba(255, 255, 255, 0.1);
      }
      &:active {
        transform: translateY(0);
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        background: rgba(108, 117, 125, 0.3);
        box-shadow: 
          0 4px 15px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
    }

    .social-signup-inline {
      display: flex;
      gap: 12px;
      margin-top: 16px;
      margin-bottom: 16px;
      align-items: center;
    }

    .social-btn-inline {
      width: 48px;
      height: 48px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: rgba(102, 126, 234, 0.6);
        background: rgba(255, 255, 255, 0.12);
        transform: translateY(-2px);
        box-shadow: 
          0 4px 15px rgba(102, 126, 234, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }
      
      &:active {
        transform: translateY(0);
      }
      
      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        transform: none;
      }
      
      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
    }

    .secondary-btn {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 16px 24px;
      width: 100%;
      font-weight: 600;
      font-size: 15px;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 24px;
      transition: all 0.3s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      img {
        width: 20px;
        height: 20px;
      }
      &:hover {
        border-color: rgba(102, 126, 234, 0.5);
        background: rgba(255, 255, 255, 0.12);
        box-shadow: 
          0 4px 15px rgba(102, 126, 234, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        transform: translateY(-1px);
      }
      &:active {
        transform: translateY(0);
      }
    }

    /* Social login section */
    .social-login-section {
      margin-top: auto;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      flex-shrink: 0;
      
      .social-login-label {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 16px;
      }
      
      .social-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        
        .social-btn {
          width: 50px;
          height: 50px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          
          &:hover {
            border-color: rgba(102, 126, 234, 0.6);
            background: rgba(255, 255, 255, 0.12);
            transform: translateY(-2px);
            box-shadow: 
              0 4px 15px rgba(102, 126, 234, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }
          
          &:active {
            transform: translateY(0);
          }
          
          &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
            transform: none;
          }
          
          img {
            width: 22px;
            height: 22px;
            object-fit: contain;
          }
        }
      }
    }

    .or-section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 32px 0;
      p {
        text-transform: none;
        color: #6c757d;
        font-weight: 500;
        font-size: 14px;
        background: ${({ theme }) => theme.colors.whiteColor};
        padding: 0 16px;
        margin: 0;
      }
      &::after {
        content: "";
        height: 1px;
        background: linear-gradient(90deg, transparent 0%, #e9ecef 50%, transparent 100%);
        flex: 1;
        pointer-events: none;
      }
      &::before {
        content: "";
        height: 1px;
        background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
        flex: 1;
      }
    }

    .auth-link {
      font-weight: 600;
      font-size: 14px;
      line-height: 1.5;
      text-decoration: none !important;
      color: rgba(102, 126, 234, 0.8);
      margin-bottom: 20px;
      transition: all 0.3s ease;
      text-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
      &:hover {
        color: rgba(118, 75, 162, 0.9);
        text-decoration: underline !important;
        text-shadow: 0 0 15px rgba(118, 75, 162, 0.4);
      }
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 32px;
      text-align: center;

      a {
        font-weight: 600;
        font-size: 14px;
        line-height: 1.5;
        text-decoration: none !important;
        color: rgba(102, 126, 234, 0.8);
        margin-bottom: 0px;
        transition: all 0.3s ease;
        text-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
        &:hover {
          color: rgba(118, 75, 162, 0.9);
          text-decoration: underline !important;
          text-shadow: 0 0 15px rgba(118, 75, 162, 0.4);
        }
      }
    }
  }

  .auth-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
    padding: 0 8px;
    flex-shrink: 0;
    
    .logo {
      display: inline-block;
      padding: 6px 10px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-1px);
      }
      
      img {
        height: 28px;
        width: auto;
        filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
      }
    }
    
    .auth-header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
      
      .language-switcher-auth {
        transform: scale(0.9);
        
        /* Override default language switcher styling for auth pages */
        .language-toggle-simple {
          background: rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(10px) !important;
          -webkit-backdrop-filter: blur(10px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 6px !important;
          padding: 6px 10px !important;
          min-width: 90px !important;
          
          &:hover {
            background: rgba(255, 255, 255, 0.08) !important;
            border-color: rgba(255, 255, 255, 0.2) !important;
            transform: translateY(-1px) !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
          }
          
          &:focus {
            border-color: rgba(102, 126, 234, 0.6) !important;
            box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2) !important;
          }
          
          &:active {
            transform: translateY(0) !important;
            background: rgba(255, 255, 255, 0.12) !important;
          }
          
          .flag-container {
            width: 16px !important;
            height: 16px !important;
          }
          
          .language-code {
            font-size: 10px !important;
            font-weight: 600 !important;
          }
          
          .language-name {
            font-size: 9px !important;
            font-weight: 400 !important;
          }
        }
      }
    }
    
    .back-link {
      font-weight: 600;
      font-size: 13px;
      line-height: 1.4;
      text-align: right;
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.3s ease;
      padding: 6px 10px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      &:hover {
        color: rgba(255, 255, 255, 0.95);
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
      }
      svg {
        font-size: 16px;
        color: inherit;
      }
    }
  }
  
  .auth-content {
    position: relative;
    z-index: 1;
  }

  /* Category selection buttons styling */
  .category-selection {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
    justify-content: center;
    
    .category-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      transition: all 0.3s ease;
      cursor: pointer;
      text-align: left;
      
      &:hover {
        border-color: rgba(102, 126, 234, 0.5);
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 
          0 8px 25px rgba(102, 126, 234, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
      }
      
      .category-content {
        display: flex;
        align-items: center;
        gap: 20px;
        
        .category-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .category-text {
          h3 {
            margin: 0 0 8px 0;
            font-size: 18px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.95);
          }
          
          p {
            margin: 0;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.4;
          }
        }
      }
      
      .category-arrow {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease;
      }
      
      &:hover .category-arrow {
        color: rgba(102, 126, 234, 0.8);
        transform: translateX(4px);
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .auth-page-header {
      margin-bottom: 16px;
    }
    .auth-form-section {
      max-width: 55vw;
      width: 55%;
      min-width: 500px;
      padding: 32px 48px;
    }
  }

  @media screen and (max-width: 991px) {
    .auth-form-section {
      max-width: 65vw;
      width: 65%;
      min-width: 450px;
      padding: 28px 40px;
      
      label {
        min-width: 120px;
        width: 120px;
        font-size: 13px;
      }
      
      .form-group {
        gap: 12px;
      }
    }
    
    .category-selection .category-btn {
      padding: 20px 24px;
      
      .category-content {
        gap: 16px;
        
        .category-icon {
          width: 50px;
          height: 50px;
          font-size: 20px;
        }
        
        .category-text h3 {
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .auth-form-section {
      max-width: 90vw;
      width: 90%;
      min-width: auto;
      padding: 24px 32px;
      margin: 10px;
      border-radius: 20px;
      max-height: calc(100vh - 20px);
      
      .form-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
      
      label {
        width: 100%;
        min-width: auto;
        margin-bottom: 4px;
      }
      
      input, select {
        width: 100% !important;
        flex: none;
      }
      
      span.error {
        left: 0 !important;
        top: calc(100% + 2px) !important;
      }
      
      .social-login-section {
        padding-top: 16px;
        
        .social-login-label {
          font-size: 13px;
          margin-bottom: 12px;
        }
        
        .social-buttons {
          gap: 16px;
          
          .social-btn {
            width: 42px;
            height: 42px;
            
            img {
              width: 18px;
              height: 18px;
            }
          }
        }
      }
    }
    
    .auth-page-header {
      margin-bottom: 12px;
    }
    
    .category-selection .category-btn {
      padding: 18px 20px;
      
      .category-content {
        gap: 12px;
        
        .category-icon {
          width: 45px;
          height: 45px;
          font-size: 18px;
        }
        
        .category-text {
          h3 {
            font-size: 15px;
          }
          
          p {
            font-size: 13px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .auth-form-section {
      max-width: 95vw;
      width: 95%;
      padding: 20px 24px;
      margin: 8px;
      border-radius: 16px;
      max-height: calc(100vh - 16px);
      
      h4 {
        font-size: 20px;
        margin-bottom: 16px;
      }
      h2 {
        font-size: 22px;
        margin-bottom: 6px;
      }
      
      .form-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
        margin-bottom: 16px;
      }
      
      label {
        width: 100%;
        min-width: auto;
        margin-bottom: 4px;
        font-size: 13px;
      }
      
      input, select {
        width: 100% !important;
        flex: none;
        padding: 10px 14px;
        font-size: 13px;
      }
      
      span.error {
        left: 0 !important;
        top: calc(100% + 2px) !important;
        font-size: 11px !important;
      }
      
      .social-login-section {
        padding-top: 12px;
        
        .social-login-label {
          font-size: 12px;
          margin-bottom: 10px;
        }
        
        .social-buttons {
          gap: 12px;
          
          .social-btn {
            width: 38px;
            height: 38px;
            
            img {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
    
    .auth-page-header {
      margin-bottom: 8px;
      padding: 0 4px;
    }
    
    .category-selection .category-btn {
      padding: 16px 18px;
      
      .category-content {
        gap: 10px;
        
        .category-icon {
          width: 40px;
          height: 40px;
          font-size: 16px;
        }
        
        .category-text {
          h3 {
            font-size: 14px;
          }
          
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export default AuthenticationStyleWrapper;
