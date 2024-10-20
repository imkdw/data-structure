// https://school.programmers.co.kr/learn/courses/30/lessons/12906

/**
 * 스택을 활용한 풀이 방법
 * 1. 스택이 비어있다면 데이터를 바로 추가함 -> O(1)
 * 2. 스택이 비어있지 않고, 반복문의 현재 요소와 이전 요소가 다를때만 데이터를 추가함 -> O(1)
 * 3. arr에 대한 순회가 필요 -> O(n)
 */
function solution(arr) {
  const stack = [];
  arr.forEach((a) => {
    if (stack.length === 0) {
      stack.push(a);
    } else {
      if (stack[stack.length - 1] !== a) {
        stack.push(a);
      }
    }
  });

  return stack;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
