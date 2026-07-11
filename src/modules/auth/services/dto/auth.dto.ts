export interface ActivateAccountRequestDTO {
    phone_number: string;
    password: string;
    confirm_password: string;
}

export interface ActivateAccountResponseDTO {
    message: string;
}

export interface VerifyOtpRequestDTO {
    phone_number: string;
    otp: string;
}

export interface VerifyOtpResponseDTO {
    message: string;
    data: {
        refresh: string;
        access: string;
        user: {
            id: number;
            phone_number: string;
            first_name: string;
            last_name: string;
            role: string;
            profile_image: string | null;
        };
    };
}

export interface ResendOtpRequestDTO {
    phone_number: string;
}

export interface LoginRequestDTO {
    phone_number: string;
    password: string;
    expected_role: 'driver';
}

export interface LoginResponseDTO {
    status_code: number;
    message: string;
    data: {
        refresh: string;
        access: string;
        user: {
            id: number;
            phone_number: string;
            first_name: string;
            last_name: string;
            role: string;
            profile_image: string | null;
            account_status: string;
        };
    };
}

export interface ForgotPasswordRequestDTO {
    phone_number: string;
    expected_role: 'driver';
}

export interface ForgotPasswordRequestResponseDTO {
    status_code: number;
    message: string;
    data: null;
}

export interface ForgotPasswordVerifyOtpRequestDTO {
    phone_number: string;
    expected_role: 'driver';
    otp: string;
}

export interface ForgotPasswordVerifyOtpResponseDTO {
    status_code: number;
    data: {
        reset_token: string;
    };
}

export interface ForgetPasswordResendOtpRequestDTO {
    phone_number: string;
}

export interface ResetPasswordRequestDTO {
    phone_number: string;
    expected_role: 'driver';
    reset_token: string;
    new_password: string;
    confirm_password: string;
}