import { useTranslation } from "react-i18next";

const {t} = useTranslation('driverFound')
export const driverMock = {
  name: 'Alex Driver',
  avatar:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  statusMessage: t("driverOnHisWay"),
  car: {
    model: 'Mercedes-Benz S-Class',
    color: 'Silver',
    plate: 'NY-772-DX',
  },
};