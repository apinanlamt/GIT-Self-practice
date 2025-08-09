function shortestWord(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return "";
  }

  const words = sentence.split(" ");
  let shortest = words[0];

  for (let word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }

  return shortest;
}

console.log(shortestWord("The quick brown fox jumped over the lazy dog")); // "The"
console.log(shortestWord("Well, this is tricky!")); // "is
console.log(shortestWord("")); // ""
console.log(shortestWord(123)); // ""

console.log("-------------------------");

function wordCount(sentence) {
  if (typeof sentence !== "string" || sentence.trim() === "") {
    return 0;
  }

  const words = sentence.split(/\s+/);
  return words.length;
}

console.log(wordCount("The quick brown fox jumped over the lazy dog")); // 9
console.log(wordCount("Well, this is tricky!")); // 5
console.log((wordCount("   "))); // 0
console.log(wordCount(123)); // 0

console.log("-------------------------");

function reverseWords(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return "";
  }

  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("The quick brown fox jumped over the lazy dog")); // "dog lazy the over jumped fox brown quick The"
console.log(reverseWords("Well, this is tricky!")); // "tricky! is this Well,"
console.log(reverseWords("")); // ""
console.log(reverseWords(123)); // ""

console.log("-------------------------");

function charFrequency(text) {
  if (typeof text !== "string" || text.length === 0) {
    return {};
  }

  const freq = {};
  for (let char of text) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

console.log(charFrequency("aab")); // { a: 2, b: 1 }
console.log(charFrequency("Hello")); // { H: 1, e: 1, l: 2, o: 1 
console.log(charFrequency("")); // {}
console.log(charFrequency(123)); // {}

console.log("-------------------------");

function isPalindrome(word) {
  if (typeof word !== "string" || word.length === 0) {
    return false;
  }

  const lower = word.toLowerCase();
  return lower === lower.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // false
console.log(isPalindrome(123)); // false
