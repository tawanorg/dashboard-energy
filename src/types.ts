export interface MapItem {
  type: string;
  geometry: { type: string; coordinates: number[] | undefined };
  properties: {
    id?: string;
    LGA: string;
    cluster?: boolean;
    GENERAL_SUPPLY: string;
    DAILY_AVG: number;
  };
}

export type MapData = {
  type: string;
  features: MapItem[];
};
