// ============================================================
// TYPE ANNOTATIONS IN TYPESCRIPT
// ============================================================
//
// A type annotation tells TypeScript what type of value
// a variable is expected to contain.
//
// The general syntax is:
//
//     let variableName: type = value;
//
// The ":" is used to specify the type.
//
// Examples:
//     string  -> text
//     number  -> numbers
//     boolean -> true or false
// ============================================================


// ------------------------------------------------------------
// 1. STRING TYPE ANNOTATION
// ------------------------------------------------------------

// We use ": string" to tell TypeScript that
// the variable "username" must contain text.

let username: string = "Kiptoo";

console.log(username);

// This would produce a TypeScript error:
//
// username = 25;
//
// Why?
// Because "username" was declared as a string,
// but 25 is a number.


// ------------------------------------------------------------
// 2. NUMBER TYPE ANNOTATION
// ------------------------------------------------------------

// ": number" tells TypeScript that the variable
// must contain a number.

let age: number = 20;

console.log(age);

// This would produce an error:
//
// age = "twenty";
//
// Why?
// Because "age" expects a number,
// but "twenty" is a string.


// ------------------------------------------------------------
// 3. BOOLEAN TYPE ANNOTATION
// ------------------------------------------------------------

// ": boolean" tells TypeScript that the variable
// can only contain true or false.

let isStudent: boolean = true;

console.log(isStudent);

// This would produce an error:
//
// isStudent = "yes";
//
// Why?
// Because "yes" is a string,
// while "isStudent" expects a boolean.


// ------------------------------------------------------------
// 4. ARRAY TYPE ANNOTATION
// ------------------------------------------------------------

// We can also specify the type of values
// that an array is allowed to contain.
//
// "string[]" means:
// An array containing only strings.

let fruits: string[] = ["Apple", "Mango", "Banana"];

console.log(fruits);

// This would produce an error:
//
// fruits.push(100);
//
// Why?
// Because the array was declared as "string[]",
// meaning it should only contain strings.


// ------------------------------------------------------------
// 5. NUMBER ARRAY
// ------------------------------------------------------------

// "number[]" means that the array can only
// contain numbers.

let marks: number[] = [70, 85, 90, 65];

console.log(marks);

// This would produce an error:
//
// marks.push("100");
//
// Why?
// Because "100" is a string, not a number.


// ------------------------------------------------------------
// 6. OBJECT TYPE ANNOTATION
// ------------------------------------------------------------

// We can specify the types of properties
// inside an object.
//
// Here:
// name -> must be a string
// age  -> must be a number

let student: {
    name: string;
    age: number;
} = {
    name: "Kiptoo",
    age: 20
};

console.log(student);


// This would produce an error:
//
// student.age = "twenty";
//
// Why?
// Because the "age" property was declared as a number.


// ------------------------------------------------------------
// 7. FUNCTION PARAMETER TYPE ANNOTATION
// ------------------------------------------------------------

// We can also use type annotations with functions.
//
// Here, "name: string" means that the function
// expects the "name" parameter to be a string.

function greet(name: string) {
    console.log(`Hello ${name}`);
}

greet("Kiptoo");

// This would produce an error:
//
// greet(25);
//
// Why?
// Because the function expects a string,
// but 25 is a number.


// ------------------------------------------------------------
// 8. FUNCTION RETURN TYPE ANNOTATION
// ------------------------------------------------------------

// We can tell TypeScript what type of value
// a function should return.
//
// ": number" after the parentheses means:
// This function must return a number.

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));

// The function receives:
// a -> number
// b -> number
//
// And it returns:
// number


// ------------------------------------------------------------
// 9. BOOLEAN FUNCTION RETURN TYPE
// ------------------------------------------------------------

// We can also specify that a function
// must return a boolean.

function isAdult(age: number): boolean {
    return age >= 18;
}

console.log(isAdult(20));


// ------------------------------------------------------------
// 10. TYPE ANNOTATION WITH CONSTANTS
// ------------------------------------------------------------

// Type annotations also work with "const".

const country: string = "Kenya";

console.log(country);


// ------------------------------------------------------------
// IMPORTANT
// ------------------------------------------------------------
//
// Type annotations are mainly used to tell TypeScript:
//
// "This variable should contain this type of value."
//
// Examples:
//
// string
// number
// boolean
// string[]
// number[]
//
// TypeScript then checks our code and warns us
// when we try to use an incorrect type.
//
// ============================================================