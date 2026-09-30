
// ============================================================
// ENUMS IN TYPESCRIPT
// ============================================================
//
// An enum is a way of giving names to a group of related
// constant values.
//
// Instead of writing values such as:
//
// "admin"
// "teacher"
// "student"
//
// throughout our application, we can create an enum:
//
// UserRole.Admin
// UserRole.Teacher
// UserRole.Student
//
// This makes our code easier to read and maintain.
// ============================================================



// ============================================================
// PART 1: CREATING A SIMPLE ENUM
// ============================================================
//
// We create an enum using the "enum" keyword.
//
// Syntax:
//
// enum EnumName {
//     Value1,
//     Value2,
//     Value3
// }
// ============================================================

enum UserRole {
    Admin,
    Teacher,
    Student
}


// We can now use the enum values.

let role: UserRole = UserRole.Student;

console.log(role);


// TypeScript automatically assigns numbers to enum members.
//
// By default:
//
// Admin   -> 0
// Teacher -> 1
// Student -> 2
//
// Therefore:
//
// console.log(UserRole.Admin);   // 0
// console.log(UserRole.Teacher); // 1
// console.log(UserRole.Student); // 2



// ============================================================
// PART 2: WHY USE ENUMS?
// ============================================================
//
// Imagine we do NOT use an enum.
//
// We might write:
//
// let role = "admin";
// let role2 = "teacher";
// let role3 = "student";
//
// This works, but we can accidentally make spelling mistakes:
//
// let role = "admn";
//
// TypeScript cannot know that "admn" was supposed to be
// "admin" if we are simply using normal strings.
//
// Enums give us predefined values.
//
// Example:
//
// UserRole.Admin
// UserRole.Teacher
// UserRole.Student
//
// We don't have to remember or manually type the strings.
// ============================================================



// ============================================================
// PART 3: ACCESSING ENUM VALUES
// ============================================================

console.log(UserRole.Admin);

console.log(UserRole.Teacher);

console.log(UserRole.Student);


// We can also assign an enum value to a variable.

const currentRole: UserRole = UserRole.Teacher;

console.log(currentRole);



// ============================================================
// PART 4: ENUMS WITH EXPLICIT NUMBERS
// ============================================================
//
// We can manually specify the values of enum members.
//
// This can be useful when the numbers have a specific meaning.
// ============================================================

enum StatusCode {
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500
}


console.log(StatusCode.Success);

console.log(StatusCode.NotFound);

console.log(StatusCode.ServerError);


// Now the values are:
//
// Success     -> 200
// BadRequest  -> 400
// Unauthorized -> 401
// NotFound    -> 404
// ServerError -> 500



// ============================================================
// PART 5: STRING ENUMS
// ============================================================
//
// Enums do not have to use numbers.
//
// We can assign strings to enum members.
//
// String enums are often easier to understand when looking
// at the value in logs, databases, or API responses.
// ============================================================

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}


const playerDirection: Direction = Direction.Up;

console.log(playerDirection);


// Output:
//
// UP



// ============================================================
// PART 6: ENUMS WITH USER ROLES
// ============================================================
//
// This is a common real-world example.
//
// Imagine we have a system with different types of users.
// ============================================================

enum Role {
    Admin = "ADMIN",
    Teacher = "TEACHER",
    Student = "STUDENT"
}


const userRole: Role = Role.Student;

console.log(userRole);


// The value of userRole is:
//
// "STUDENT"



// ============================================================
// PART 7: USING ENUMS IN FUNCTIONS
// ============================================================
//
// We can use enums as function parameter types.
//
// This means the function can only accept values
// from the enum.
// ============================================================

function checkRole(role: Role): void {

    console.log(`User role: ${role}`);
}


checkRole(Role.Admin);

checkRole(Role.Teacher);

checkRole(Role.Student);


// This would produce an error:
//
// checkRole("ADMIN");
//
// Depending on the enum and TypeScript configuration,
// a plain string is not automatically the same thing
// as the enum member.
//
// We should use:
//
// checkRole(Role.Admin);



// ============================================================
// PART 8: USING ENUMS WITH IF STATEMENTS
// ============================================================
//
// Enums become very useful when we need to perform
// different actions depending on a value.
// ============================================================

function showDashboard(role: Role): void {

    if (role === Role.Admin) {

        console.log("Opening admin dashboard...");

    } else if (role === Role.Teacher) {

        console.log("Opening teacher dashboard...");

    } else if (role === Role.Student) {

        console.log("Opening student dashboard...");

    }
}


showDashboard(Role.Admin);

showDashboard(Role.Teacher);

showDashboard(Role.Student);



// ============================================================
// PART 9: ENUMS WITH SWITCH
// ============================================================
//
// A switch statement works very well with enums.
// ============================================================

function getDashboard(role: Role): string {

    switch (role) {

        case Role.Admin:
            return "Admin Dashboard";

        case Role.Teacher:
            return "Teacher Dashboard";

        case Role.Student:
            return "Student Dashboard";

        default:
            return "Unknown Dashboard";
    }
}


console.log(getDashboard(Role.Admin));

console.log(getDashboard(Role.Student));



// ============================================================
// PART 10: ENUMS INSIDE OBJECTS
// ============================================================
//
// We can use enums as the type of an object property.
// ============================================================

interface User {

    name: string;

    email: string;

    role: Role;
}


const user: User = {

    name: "Kiptoo",

    email: "kiptoo@example.com",

    role: Role.Student
};


console.log(user);


// The "role" property must contain a value from Role.
//
// Valid:
//
// role: Role.Student
//
// Invalid:
//
// role: "student"
//



// ============================================================
// PART 11: ENUM FOR ORDER STATUS
// ============================================================
//
// Let's look at a practical example.
//
// Imagine we are building an online shopping system.
//
// An order can have different statuses:
// ============================================================

enum OrderStatus {

    Pending = "PENDING",

    Processing = "PROCESSING",

    Shipped = "SHIPPED",

    Delivered = "DELIVERED",

    Cancelled = "CANCELLED"
}


let orderStatus: OrderStatus = OrderStatus.Pending;

console.log(orderStatus);


// Later, the order status can change:

orderStatus = OrderStatus.Processing;

console.log(orderStatus);

orderStatus = OrderStatus.Shipped;

console.log(orderStatus);

orderStatus = OrderStatus.Delivered;

console.log(orderStatus);



// ============================================================
// PART 12: FUNCTION USING ORDER STATUS
// ============================================================

function displayOrderStatus(status: OrderStatus): void {

    switch (status) {

        case OrderStatus.Pending:

            console.log("Your order is waiting to be processed.");

            break;


        case OrderStatus.Processing:

            console.log("Your order is being prepared.");

            break;


        case OrderStatus.Shipped:
    }}