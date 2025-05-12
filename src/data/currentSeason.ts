
// This would normally be determined dynamically based on the current date
// For demonstration purposes, we're hardcoding a season
// In a real app, you'd implement logic to determine the current season based on date

const getCurrentSeason = (): "summer" | "winter" | "monsoon" | "spring" => {
  const month = new Date().getMonth();
  
  // Simple season determination based on month
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 9) return "monsoon";
  return "winter"; // Oct - Feb
};

export const currentSeason = getCurrentSeason();
