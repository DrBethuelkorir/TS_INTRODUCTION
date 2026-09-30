// ============================================================
// UNION AND INTERSECTION TYPES IN TYPESCRIPT
// ============================================================
//
// TypeScript gives us two very useful operators:
//
// 1. Union Type       -> |
// 2. Intersection Type -> &
//
// They may look similar, but they mean very different things.
//
// UNION (|)
// ---------
// Means:
// "This value can be THIS type OR THAT type."
//
// INTERSECTION (&)
// ----------------
// Means:
// "This value must satisfy THIS type AND THAT type."
// ============================================================



// ============================================================
// PART 1: UNION TYPES
// ============================================================
//
// A union type allows a variable to contain more than one
// possible type.
//
// We use the "|" symbol to create a union.
//
// Example:
//
// string | number
//
// This means:
// The value can be a string OR a number.
// ============================================================


// ------------------------------------------------------------
// 1. SIMPLE UNION
// ------------------------------------------------------------

let userId: string | number;


// Because userId is a union of string and number,
// both of these values are allowed:

userId = 1001;

console.log(userId);

userId = "USER-1001";

console.log(userId);


// But this is NOT allowed:
//
// userId = true;
//
// Why?
// Because boolean is not part of our union.
//
// userId can only contain:
//
// string OR number
//



// ============================================================
// PART 2: UNION WITH A TYPE ALIAS
// ============================================================
//
// We can give our union a name using "type".
//
// This makes our code easier to read and reuse.
// ============================================================

type ID = string | number;


let studentId: ID;

studentId = 1001;

console.log(studentId);

studentId = "STU-1001";

console.log(studentId);



// ============================================================
// PART 3: UNION OF SPECIFIC VALUES
// ============================================================
//
// A union does not have to contain different data types.
//
// We can also create a union containing specific values.
//
// This is sometimes called a literal union type.
// ============================================================

type Status = "pending" | "approved" | "rejected";


let applicationStatus: Status;


applicationStatus = "pending";

console.log(applicationStatus);

applicationStatus = "approved";

console.log(applicationStatus);

applicationStatus = "rejected";

console.log(applicationStatus);


// This would produce an error:
//
// applicationStatus = "completed";
//
// Why?
//
// "completed" was not included in the Status type.
//
// Status only allows:
//
// "pending"
// "approved"
// "rejected"



// ============================================================
// PART 4: UNION WITH FUNCTIONS
// ============================================================
//
// A function parameter can also have a union type.
//
// This means the function can accept different types
// of values.
// ============================================================

function printId(id: string | number): void {
    console.log(`Your ID is: ${id}`);
}


printId(1001);

printId("STU-1001");


// Both calls work because the function accepts:
//
// string | number



// ============================================================
// PART 5: TYPE NARROWING
// ============================================================
//
// When a variable has a union type, TypeScript may not know
// which type of value it currently contains.
//
// We can check the type using "typeof".
//
// This is called TYPE NARROWING.
//
// We narrow a value from:
//
// string | number
//
// to either:
//
// string
//
// or:
//
// number
// ============================================================

