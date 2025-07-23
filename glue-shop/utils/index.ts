export const formatTime = (seconds: number): string => {
  const minutes = String(Math.floor(seconds / 60)); // 1.7 -> 1
  const remainingSeconds = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
};
