module.exports = function count(s, pairs) {

  let N = 1;
  let answer = 0;

  for (let i = 0; i < pairs.length; i++) {
    N = N * (pairs[i][0] ** pairs[i][1]);
    if (N > 10000000)
    return 0;
  }

  for (let k = 0; k < N; k++) {
    for (let j = 0; j < s.length; j++) {
      let gcdVal = gcd(k + j, N) == 1 ? 1 : 0;
      if (gcdVal == s[j])  {
        answer++;
      } else if (gcdVal != s[j]) {
        break;
      }

    }
  }
  return answer % 1000000007;
}


function gcd(a, b) {
  if (b == 0)
      return a;
  return gcd(b, a % b);
}