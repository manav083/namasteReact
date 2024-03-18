
// writing test cases.
// test function will have two arguments i.e. a string with description
// and a callback function with actual implementation.
import { sum } from "../sum";


// test case for sum function. we will call the function with
// arguments and write a statement expect(result).toBe(expected result)
// this line is called as assertion.
test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(3,4);

    // this below line is known as assertion.
    expect(result).toBe(7);
})