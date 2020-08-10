export function getCallValue(origin: string, destine: string): number {
  let price = 0;
  if (origin === "011" && destine === "016") {
    price = 1.9;
  } else if (origin === "016" && destine === "011") {
    price = 2.9;
  } else if (origin === "011" && destine === "017") {
    price = 1.7;
  } else if (origin === "017" && destine === "011") {
    price = 2.7;
  } else if (origin === "011" && destine === "018") {
    price = 0.9;
  } else if (origin === "018" && destine === "011") {
    price = 1.9;
  } else {
    return 10;
  }

  return price;
}
