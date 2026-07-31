import { profileApi } from '../services/profileApi';
import { UserProfile } from '../types/profile.types';

export const profileRepository = {
    getMyProfile: async (): Promise<UserProfile> => {
        const response = await profileApi.getMyProfile();
        const dto = response.data;

        const driverInfo = dto.driver_info
            ? {
                driverStatus: dto.driver_info.driver_status,
                nationalId: dto.driver_info.national_id,
                birthdate: dto.driver_info.birthdate,
                vehicle: {
                    brand: dto.driver_info.vehicle.brand,
                    model: dto.driver_info.vehicle.model,
                    customBrandName: dto.driver_info.vehicle.custom_brand_name,
                    customModelName: dto.driver_info.vehicle.custom_model_name,
                    color: dto.driver_info.vehicle.color,
                    customColorName: dto.driver_info.vehicle.custom_color_name,
                    status: dto.driver_info.vehicle.status,
                    plateNumber: dto.driver_info.vehicle.plate_number,
                    seatsNum: dto.driver_info.vehicle.seats_num,
                    vehicleType: dto.driver_info.vehicle.vehicle_type,
                    manufactureYear: dto.driver_info.vehicle.manufacture_year,
                    images: dto.driver_info.vehicle.images,
                },
            }
            : undefined;

        return {
            id: dto.id,
            firstName: dto.first_name,
            lastName: dto.last_name,
            phone: dto.phone_number,
            role: dto.role,
            accountStatus: dto.account_status,
            profileImage: dto.profile_image,
            ratingAvg: dto.rating_avg,
            isActive: dto.is_active,
            driverInfo,
        };
    },

    requestPhoneChange: (newPhoneNumber: string) => profileApi.requestPhoneChange(newPhoneNumber),
    resendPhoneChange: () => profileApi.resendPhoneChange(),
    verifyPhoneChange: (otp: string) => profileApi.verifyPhoneChange(otp),
    changePassword: (input: { oldPassword: string; newPassword: string; confirmPassword: string }) =>
        profileApi.changePassword(input),
};