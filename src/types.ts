export interface MapItem {
  id: string;
  LGA: string;
  DAILY_AVG: number;
  GENERAL_SUPPLY: string;
  LAT: number;
  LONG: number;
}
export type MapData = {
  type: string;
  features: MapItem[];
};
