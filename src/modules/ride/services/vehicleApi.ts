import { apiClient } from '../../../core/network/apiClient';
import { ENDPOINTS } from '../../../core/network/endpoints';

export interface VehicleTierDto {
  id: number;
  value: string;   
  label: string;   
}

export const vehicleApi = {
  getVehicleTiers: async (): Promise<VehicleTierDto[]> => {
    const { data } = await apiClient.get<{ data: VehicleTierDto[] }>(
      ENDPOINTS.VEHICLES.TIERS,
    );
    return data.data;
  },
};