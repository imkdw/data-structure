// https://school.programmers.co.kr/learn/courses/30/lessons/42583

/**
 * 큐를 사용한 문제
 * 1. truck_weight에서 마지막 트럭이 나갔다면 해당 결과값에다가 다리길이를 더하면 최종적인 시간이 산출됨
 */
function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0);
  let seconds = 0;

  while (truck_weights.length !== 0) {
    bridge.shift();
    seconds += 1;

    const bridgeSum = bridge.reduce((acc, cur) => acc + cur, 0);
    if (bridgeSum + truck_weights[0] <= weight) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return seconds + bridge_length;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
