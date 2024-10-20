// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

/**
 * 큐를 활용한 문제
 * 큐를 개별로 구현해도 되지만, shift() 연산을 사용함
 * 각 요소의 고유성을 위해 우선순위 + 인덱스 형태로 배열을 구성
 */
function solution(priorities, location) {
  const uniqueItems = priorities.map((pri, index) => ({ pri, index }));
  let count = 1;
  let maxPriority = Math.max(...priorities);
  const target = uniqueItems[location];

  while (uniqueItems.length !== 0) {
    const { pri, index } = uniqueItems[0];
    if (pri < maxPriority) {
      uniqueItems.push(uniqueItems.shift());
    } else {
      if (pri === target.pri && index === target.index) {
        return count;
      }

      uniqueItems.shift();
      count++;
      maxPriority = Math.max(...uniqueItems.map((item) => item.pri));
    }
  }
}
