import { GameResult } from "../constants/enums";

export default (user: string, device: string): string => {
  let result: string = "🙈";

  if (user === device) return GameResult.Tie;

  // User
  if (user === "paper" && device === "rock") return GameResult.UserWin;

  if (user === "scissor" && device === "paper") return GameResult.UserWin;

  if (user === "rock" && device === "scissor") return GameResult.UserWin;

  // Device
  if (device === "paper" && user === "rock") return GameResult.DeviceWin;

  if (device === "scissor" && user === "paper") return GameResult.DeviceWin;

  if (device === "rock" && user === "scissor") return GameResult.DeviceWin;

  return result;
};
