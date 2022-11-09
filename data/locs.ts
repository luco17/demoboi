export interface Loc {
  id: number;
  locationName?: string;
  visited?: boolean;
}

export const places: Loc[] = [
  {
    id: 0,
    locationName: "Arasaka Academy",
    visited: false,
  },
  {
    id: 1,
    locationName: "Santo Domingo",
    visited: true,
  },
  {
    id: 2,
    locationName: "Max Tac HQ",
    visited: false,
  },
];
