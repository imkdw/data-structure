// https://school.programmers.co.kr/learn/courses/30/lessons/12909

/**
 * 스택을 활용한 문제풀이
 * 1. 입력값이 ( 또는 ) 임을 가정하고 해결함
 * 2. ( 인 경우는 바로 스택에 저장
 * 3. ) 인 경우에 만약 배열이 비었다면 그건 잘못됬으므로 바로 false 반환
 *    배열이 존재한다면 해당 ( 데이터 제거
 * 4. 최종적으로 스택이 비어있는지에 따른 불린 반환
 * 5. s에 대해서 순회가 필요해서 O(n) 걸림
 */
function solution(s) {
  const stack = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}
