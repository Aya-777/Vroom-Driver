export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/v1/auth/login/',
    FORGOT_PASSWORD: '/api/v1/auth/forgot-password/',
    FORGOT_PASSWORD_VERIFY_OTP: '/api/v1/auth/forgot-password/verify-otp/',
    FORGOT_PASSWORD_RESEND_OTP: '/api/v1/auth/forgot-password/resend-otp/',
    RESET_PASSWORD: '/api/v1/auth/forgot-password/reset-password/',
  },
  DRIVER: {
    ACTIVATE_ACCOUNT: '/api/v1/drivers/activate-account/',
    ACTIVATE_ACCOUNT_VERIFY_OTP: '/api/v1/drivers/activate-account/verify-otp/',
    ACTIVATE_ACCOUNT_RESEND_OTP: '/api/v1/drivers/activate-account/resend-otp/',
  },
} as const;