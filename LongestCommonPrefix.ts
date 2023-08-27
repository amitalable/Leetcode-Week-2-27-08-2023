//https://leetcode.com/problems/longest-common-prefix/submissions/
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  let final_str = "";
  for (let ch_ind in strs[0].split("")) {
    let data = true;
    for (let str of strs.slice(1)) {
      if (str[ch_ind] !== strs[0][ch_ind]) {
        data = false;
        break;
      }
    }
    if (!data) {
      break;
    }
    final_str += strs[0][ch_ind];
  }
  return final_str;
}
