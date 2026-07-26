export type VehicleImageDto = {
    id: number;
    slot: 'FRONT' | 'BACK' | 'SIDE' | 'INTERIOR';
    url: string;
};

export type VehicleDto = {
    brand: string;
    model: string;
    custom_brand_name: string | null;
    custom_model_name: string | null;
    color: string;
    custom_color_name: string | null;
    status: string;
    plate_number: string;
    seats_num: number;
    vehicle_type: string;
    manufacture_year: number;
    images: VehicleImageDto[];
};

export type DriverInfoDto = {
    driver_status: string;
    national_id: string;
    birthdate: string;
    vehicle: VehicleDto;
};

export type ProfileData = {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    role: string;
    account_status: string;
    profile_image: string | null;
    rating_avg: number;
    is_active: boolean;
    created_at: string;
    blocked_at: string | null;
    deleted_at: string | null;
    driver_info?: DriverInfoDto;
};

export type ProfileResponseDto = {
    data: ProfileData;
};