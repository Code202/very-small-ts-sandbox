import { fooBarQix } from "./bootstrap";

it("should run", function () {
  expect(fooBarQix(3)).toEqual("FooFoo");
  expect(fooBarQix(5)).toEqual("BarBar");
  expect(fooBarQix(7)).toEqual("QixQix");
});

it("should run whit different digits", function () {
  expect(fooBarQix(15)).toEqual("FooBarBar");
  expect(fooBarQix(30)).toEqual("FooBarFoo*");
  expect(fooBarQix(35)).toEqual("BarQixFooBar");
  expect(fooBarQix(4)).toEqual("4");
});
