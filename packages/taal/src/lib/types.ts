type Vibhag = {
  readonly beat: number; // Beat number in the cycle
  readonly value: string; // Clap (X), Wave (0), or other markers (2, 3, etc.)
};

export type Taal = {
  readonly name: string; // Name of the taal (e.g., Teentaal, Dadra)
  readonly beats: number; // Total beats in the cycle
  readonly vibhag: readonly Vibhag[]; // Ensuring vibhag array is read-only
  readonly notes?: readonly string[]; // Ensuring notes array is read-only
};
