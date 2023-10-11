import { bindReactiveState } from "./reactivity";
export function setupCounter() {
  const countMap = bindReactiveState({
    name: "countMap",
    defaultValue: {},
  });

  const increase = ({ productId }) => {
    if (countMap[productId] === undefined) {
      countMap[productId] = 0;
    }
    countMap[productId] += 1;
    return countMap[productId];
  };

  const decrease = ({ productId }) => {
    if (countMap[productId] === undefined) {
      countMap[productId] = 0;
    }
    countMap[productId] += 1;
    return countMap[productId];
  };
  const getTotalCount = () => {
    let count = 0;
    Object.values(getCountMap()).forEach((number) => {
      count += number;
    });
    return count;
  };
  const getCountByProductId = ({ productId }) => {
    return getCountMap()[productId] || 0;
  };
  return { increase, decrease, getTotalCount, getCountByProductId };
}
