const input = document.getElementById("input");

function isPalindrome() {
  const str = input.value;
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
    const bool = (cleanedStr === reversedStr);
    if (bool) {
        alert("The input is a palindrome.");
    } else {
        alert("The input is not a palindrome.");
    }
}
