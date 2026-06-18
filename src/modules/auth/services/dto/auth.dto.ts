export interface SignupRequestDTO {
    first_name: string;
    last_name: string;
    phone_number: string;
    password: string;
    confirm_password: string;
    profile_image?: any;
}

export interface SignupResponseDTO {
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