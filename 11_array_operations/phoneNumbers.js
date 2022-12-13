const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (phoneNumbers) => {
  const validNumbers = phoneNumbers.filter(checkLength);
  return validNumbers;
};

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

console.log(filterLongNumbers(numbers));
console.log(filterLongNumbers(["4763687363", "7867867862"]));
console.log(filterLongNumbers([]));
