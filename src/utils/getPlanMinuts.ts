export function getPlanMinuts(plan: string): number {
  let minuts = 0;
  if (plan === "FaleMais 30") {
    minuts = 30;
  } else if (plan === "FaleMais 60") {
    minuts = 60;
  } else if (plan === "FaleMais 120") {
    minuts = 120;
  } else {
    return 0;
  }

  return minuts;
}
