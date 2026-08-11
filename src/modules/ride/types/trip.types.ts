export enum TripStage {
  DETAILS = 'DETAILS',
  EN_ROUTE = 'EN_ROUTE',
  PIN_ENTRY = 'PIN_ENTRY',
  IN_PROGRESS = 'IN_PROGRESS',
}

export type Rider = {
  name: string;
  avatar?: string;
};
