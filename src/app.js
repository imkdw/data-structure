// TODO: 최적화 전략 찾아보기

function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let seconds = 0;

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        seconds += 1;
      }
    }
    result.push(seconds);
  }

  return result;
}

console.log(solution([1, 2, 3, 2, 3]));
