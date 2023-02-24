/**
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 * - 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * - 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 *
 * - 时间复杂度：O(n)
 * - 空间复杂度：O(n)
 *
 * @param s
 * @param k
 */
export default function reverseStr(s: string, k: number): string {
  const strArr = Array.from(s);

  for (let i = 0; i < strArr.length; i += 2 * k) {
    reverse(strArr, i, Math.min(i + k, strArr.length) - 1);
  }

  return strArr.join("");
}

function reverse(arr: string[], left: number, right: number): void {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
