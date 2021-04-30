export function fooBarQix(number: number): string {
  let result = "";
  const ref = number.toString();

  if (number % 3 === 0) {
    result = "Foo";
  }
  if (number % 5 === 0) {
    result += "Bar";
  }
  if (number % 7 === 0) {
    result += "Qix";
  }

  if (!result.length) {
    result = number.toString();
  }

  for (let i = 0; i < ref.length; i++) {
    if (ref[i] === "0") {
      result += "*";
    } else if (ref[i] === "3") {
      result += "Foo";
    } else if (ref[i] === "5") {
      result += "Bar";
    } else if (ref[i] === "7") {
      result += "Qix";
    }
  }

  return result;
}
