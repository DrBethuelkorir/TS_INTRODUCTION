// ============================================================
// TYPES AND INTERFACES IN TYPESCRIPT
// ============================================================
//
// TypeScript allows us to describe the kind of data our
// variables, objects, functions, and other parts of our
// application should contain.
//
// Two important tools for describing data are:
//
// 1. type
// 2. interface
//
// Both can be used to describe the structure of data,
// especially objects.
// ============================================================



// ============================================================
// PART 1: TYPES
// ============================================================
//
// A "type" allows us to give a name to a particular type
// or structure of data.
//
// Syntax:
//
// type TypeName = ...
//
// After creating a type, we can use it in our code.
// ============================================================


// ------------------------------------------------------------
// 1. SIMPLE TYPE
// ------------------------------------------------------------

// Here we create a type called "Username".

type Username = string;

// Now we can use Username instead of writing "string".

let username: Username = "Kiptoo";

console.log(username);


// The following would produce an error:
//
// let username: Username = 100;
//
// Why?
// Username represents a string,
// so it cannot contain a number.



// ------------------------------------------------------------
// 2. TYPE FOR AN OBJECT
// ------------------------------------------------------------
//
// A type can also describe the structure of an object.
//
// Here we are saying that a Student must have:
//
// name -> string
// age  -> number
// email -> string
// ------------------------------------------------------------

type Student = {
    name: string;
    age: number;
    email: string;
};


// Now we can create a student using our Student type.

const student: Student = {
    name: "Kiptoo",
    age: 20,
    email: "kiptoo@example.com"
};

console.log(student);


// If we forget a required property:
//
// const student: Student = {
//     name: "Kiptoo",
//     age: 20
// };
//
// TypeScript will give us an error because
// "email" is required by the Student type.



// ------------------------------------------------------------
// 3. TYPE WITH AN ARRAY
// ------------------------------------------------------------

// We can use our Student type to create an array
// containing multiple students.

const students: Student[] = [
    {
        name: "Kiptoo",
        age: 20,
        email: "kiptoo@example.com"
    },
    {
        name: "Brian",
        age: 21,
        email: "brian@example.com"
    }
];

console.log(students);



// ------------------------------------------------------------
// 4. UNION TYPES
// ------------------------------------------------------------
//
// A union type allows a value to have more than one type.
//
// We use the "|" symbol.
//
// For example:
//
// string | number
//
// means the value can either be a string OR a number.
// ------------------------------------------------------------

let studentId: string | number;

studentId = 1001;

console.log(studentId);

studentId = "STU-1001";

console.log(studentId);


// Both values are allowed:
//
// 1001       -> number
// "STU-1001" -> string
//
// But this would NOT be allowed:
//
// studentId = true;
//
// Because boolean is not part of our union type.



// ------------------------------------------------------------
// 5. TYPE ALIASES WITH UNION TYPES
// ------------------------------------------------------------
//
// We can give a name to a union type.

type ID = string | number;

let userId: ID;

userId = 1001;

userId = "USER-1001";

console.log(userId);



// ============================================================
// PART 2: INTERFACES
// ============================================================
//
// An interface is another way of describing the structure
// of an object.
//
// Interfaces are commonly used when working with objects,
// classes, APIs, and larger applications.
//
// Syntax:
//
// interface InterfaceName {
//     property: type;
// }
// ============================================================



// ------------------------------------------------------------
// 1. BASIC INTERFACE
// ------------------------------------------------------------

interface User {
    name: string;
    age: number;
    email: string;
}


// We can now create an object that follows the User interface.

const user: User = {
    name: "Kiptoo",
    age: 20,
    email: "kiptoo@example.com"
};

console.log(user);


// TypeScript checks that the object follows the interface.
//
// For example:
//
// const user: User = {
//     name: "Kiptoo",
//     age: "twenty",
//     email: "kiptoo@example.com"
// };
//
// This produces an error because age must be a number.



// ------------------------------------------------------------
// 2. OPTIONAL PROPERTIES
// ------------------------------------------------------------
//
// Sometimes a property should not be required.
//
// We can make a property optional using "?".

interface Employee {
    name: string;
    age: number;
    department?: string;
}


// "department" is optional,
// so this object is valid.

const employee1: Employee = {
    name: "John",
    age: 25
};


// This is also valid because department can be provided.

const employee2: Employee = {
    name: "Mary",
    age: 28,
    department: "IT"
};

console.log(employee1);
console.log(employee2);



// ------------------------------------------------------------
// 3. READONLY PROPERTIES
// ------------------------------------------------------------
//
// "readonly" means that a property cannot be changed
// after the object has been created.
// ------------------------------------------------------------

interface Product {
    readonly id: number;
    name: string;
    price: number;
}


const product: Product = {
    id: 1,
    name: "Laptop",
    price: 75000
};

console.log(product);


// We can change the name:

product.name = "HP Laptop";


// But we cannot change the id:
//
// product.id = 2;
//
// TypeScript will give an error because
// id was marked as readonly.



// ------------------------------------------------------------
// 4. INTERFACE WITH AN ARRAY
// ------------------------------------------------------------

interface Course {
    name: string;
    duration: number;
}


const courses: Course[] = [
    {
        name: "TypeScript",
        duration: 4
    },
    {
        name: "Java",
        duration: 6
    }
];

console.log(courses);



// ============================================================
// PART 3: INTERFACES WITH FUNCTIONS
// ============================================================
//
// Interfaces can also describe the structure of objects
// that contain functions.
// ============================================================

interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}


const calculator: Calculator = {
    add: (a, b) => {
        return a + b;
    },

    subtract: (a, b) => {
        return a - b;
    }
};


console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));



// ============================================================
// PART 4: EXTENDING INTERFACES
// ============================================================
//
// One interface can extend another interface.
//
// This is useful when one object should contain
// all the properties of another object plus additional
// properties.
// ============================================================

interface Person {
    name: string;
    age: number;
}


// Student extends Person.
//
// Therefore, Student automatically gets:
//
// name
// age
//
// We then add:
//
// course

interface StudentDetails extends Person {
    course: string;
}


const studentDetails: StudentDetails = {
    name: "Kiptoo",
    age: 20,
    course: "Computer Science"
};

console.log(studentDetails);



// ============================================================
// PART 5: TYPE vs INTERFACE
// ============================================================
//
// Both "type" and "interface" can describe objects.
//
// Example using type:
// ============================================================

type Car = {
    brand: string;
    model: string;
    year: number;
};


// Example using interface:

interface Vehicle {
    brand: string;
    model: string;
    year: number;
}


// Both can describe objects with the same structure.

const car: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2024
};


const vehicle: Vehicle = {
    brand: "Toyota",
    model: "Corolla",
    year: 2024
};


console.log(car);
console.log(vehicle);



// ============================================================
// WHEN SHOULD YOU USE TYPE?
// ============================================================
//
// "type" is very useful when you need:
//
// - Union types
// - Primitive type aliases
// - Object types
// - Tuples
// - More complex combinations of types
//
// Example:
//
// type Status = "pending" | "approved" | "rejected";
//
// This means Status can only be one of these three values.
// ============================================================

type Status = "pending" | "approved" | "rejected";

let applicationStatus: Status = "pending";

console.log(applicationStatus);


// This would produce an error:
//
// applicationStatus = "completed";
//
// Why?
// "completed" is not part of the Status type.



// ============================================================
// WHEN SHOULD YOU USE INTERFACE?
// ============================================================
//
// Interfaces are especially useful when describing
// the structure of objects.
//
// They are commonly used for:
//
// - Objects
// - Classes
// - API data
// - React props
// - Models
// - Extending object structures
//
// Example:
//
// interface User {
//     name: string;
//     email: string;
// }
// ============================================================



// ============================================================
// QUICK SUMMARY
// ============================================================
//
// TYPE
//
// type User = {
//     name: string;
//     age: number;
// };
//
//
// INTERFACE
//
// interface User {
//     name: string;
//     age: number;
// }
//
//
// Both can describe the structure of an object.
//
// However, "type" is more flexible for things such as
// union types:
//
// type ID = string | number;
//
// While interfaces are especially useful for describing
// and extending object structures:
//
// interface Person {
//     name: string;
// }
//
// interface Student extends Person {
//     course: string;
// }
// ============================================================



// ============================================================
// FINAL EXAMPLE
// ============================================================
//
// A realistic example combining what we have learned.
// ============================================================

interface Account {
    readonly id: number;
    username: string;
    email: string;
    role?: string;
}


const account: Account = {
    id: 1001,
    username: "kiptoo",
    email: "kiptoo@example.com",
    role: "student"
};


console.log(account);


// The id cannot be changed:
//
// account.id = 2000;
//
// The username can be changed:

account.username = "kiptoo_dev";

console.log(account);