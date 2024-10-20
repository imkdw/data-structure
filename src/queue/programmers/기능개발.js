// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function calculateTimes(progresses, speeds) {
  return progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
}

/**
 * 큐를 활용한 문제풀이지만 일반적인 구현문제로 판단됨
 * 1. 전체적으로 시간이 얼마나 걸리는지 계산함 -> O(n)
 * 2. 걸린 시간에서 하루에 배포 가능한 수를 구함 -> O(n)
 */
function solution(progresses, speeds) {
  const times = calculateTimes(progresses, speeds);

  const result = [];
  let count = 0;
  let maxDay = times[0];
  times.forEach((time) => {
    if (time <= maxDay) {
      count += 1;
    } else {
      result.push(count);
      count = 1;
      maxDay = time;
    }
  });

  result.push(count);
  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
