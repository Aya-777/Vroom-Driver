export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/v1/auth/login/',
    REFRESH_TOKEN: '/api/v1/auth/token/refresh/',
    FORGOT_PASSWORD: '/api/v1/auth/forgot-password/',
    FORGOT_PASSWORD_VERIFY_OTP: '/api/v1/auth/forgot-password/verify-otp/',
    FORGOT_PASSWORD_RESEND_OTP: '/api/v1/auth/forgot-password/resend-otp/',
    RESET_PASSWORD: '/api/v1/auth/forgot-password/reset-password/',
  },
  DRIVER: {
    ACTIVATE_ACCOUNT: '/api/v1/drivers/activate-account/',
    ACTIVATE_ACCOUNT_VERIFY_OTP: '/api/v1/drivers/activate-account/verify-otp/',
    ACTIVATE_ACCOUNT_RESEND_OTP: '/api/v1/drivers/activate-account/resend-otp/',
    STATUS : '/api/v1/drivers/me/status/',
    TODAY_STATS : '/api/v1/drivers/me/today-stats/',
  },
  USERS: {
    ME: '/api/v1/users/me/',
    CHANGE_PHONE_REQUEST: '/api/v1/users/me/change-phone/',
    CHANGE_PHONE_RESEND: '/api/v1/users/me/change-phone/resend-otp/',
    CHANGE_PHONE_VERIFY: '/api/v1/users/me/change-phone/verify-otp/',
    CHANGE_PASSWORD: '/api/v1/users/me/change-password/',
  },
} as const;