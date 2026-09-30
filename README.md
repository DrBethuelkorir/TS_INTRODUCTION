# Introduction to TypeScript

## 📌 What is TypeScript?

**TypeScript (TS)** is a programming language developed by Microsoft.

It is built on top of JavaScript and adds features such as:

* Static typing
* Interfaces
* Type aliases
* Generics
* Enums
* Better developer tooling
* Compile-time error checking

TypeScript code is eventually converted (compiled) into JavaScript, which can then run in a browser or in environments such as Node.js.

### JavaScript Example

```javascript
let username = "Kiptoo";

username = 25;
```

JavaScript allows the value of `username` to change from a string to a number.

### TypeScript Example

```typescript
let username: string = "Kiptoo";

username = 25;
```

TypeScript will report an error because `username` was declared as a `string`.

---

# 🛠️ Prerequisites

Before working with TypeScript, make sure you have **Node.js** and **npm** installed.

You can check whether they are installed using:

```bash
node --version
```

and:

```bash
npm --version
```

Example:

```text
v22.14.0
10.9.2
```

If these commands work, you are ready to continue.

---

# 📥 Installing TypeScript

There are two common ways to install TypeScript:

1. Globally
2. Locally inside a project

---

# 1️⃣ Installing TypeScript Globally

To install TypeScript globally, run:

```bash
npm install -g typescript
```

After installation, check the version:

```bash
tsc --version
```

Example:

```text
Version 5.x.x
```

The `-g` means **global**.

This makes the TypeScript compiler available from different projects on your computer.

---

# 2️⃣ Installing TypeScript Locally

A better approach for most projects is to install TypeScript **locally inside the project**.

First, create a project:

```bash
mkdir typescript-introduction
```

Move into the project:

```bash
cd typescript-introduction
```

Initialize npm:

```bash
npm init -y
```

Then install TypeScript as a development dependency:

```bash
npm install --save-dev typescript
```

You can also write:

```bash
npm install -D typescript
```

Both commands do the same thing.

After installation, your `package.json` will contain something similar to:

```json
{
  "devDependencies": {
    "typescript": "^5.x.x"
  }
}
```

---

# ⭐ Which Installation Should You Use?

### Recommended: Local Installation

For real projects, **local TypeScript installation is recommended**.

Use:

```bash
npm install -D typescript
```

### Why?

Different projects may require different TypeScript versions.

For example:

```text
Project A → TypeScript 5.x
Project B → TypeScript 6.x
```

If TypeScript is installed locally, each project can use its own version.

It also makes the project easier for another developer to clone and run.

### Global Installation

Global installation:

```bash
npm install -g typescript
```

is useful when you are learning TypeScript or when you want the `tsc` command available everywhere.

However, **you do not need a global installation to work on a project that already has TypeScript installed locally.**

### My recommendation

For projects:

```bash
npm install -D typescript
```

For learning/testing TypeScript quickly:

```bash
npm install -g typescript
```

You can also have both installed.

---

# 📁 Creating Your First TypeScript File

Create a file called:

```text
index.ts
```

Inside it, write:

```typescript
const message: string = "Hello TypeScript!";

console.log(message);
```

Your project can now look like this:

```text
typescript-introduction/
│
├── node_modules/
├── index.ts
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Creating a TypeScript Configuration File

A TypeScript project normally uses a configuration file called:

```text
tsconfig.json
```

Create it using:

```bash
npx tsc --init
```

This creates a `tsconfig.json` file.

Your project will now look like:

```text
typescript-introduction/
│
├── node_modules/
├── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

# ▶️ How to Run TypeScript

There are several ways to work with TypeScript.

## Method 1: Compile TypeScript to JavaScript

The TypeScript compiler is called:

```bash
tsc
```

Run:

```bash
npx tsc
```

TypeScript will compile your `.ts` files into `.js` files according to your `tsconfig.json`.

For example:

```text
index.ts
   ↓
TypeScript Compiler
   ↓
index.js
```

You can then run the JavaScript file using Node.js:

```bash
node index.js
```

---

# ▶️ Method 2: Compile a Specific File

You can compile a specific TypeScript file:

```bash
npx tsc index.ts
```

This will generate:

```text
index.js
```

Then run:

```bash
node index.js
```

---

# ▶️ Method 3: Use `tsc --watch`

During development, you can tell TypeScript to watch your files for changes.

Run:

```bash
npx tsc --watch
```

or:

```bash
npx tsc -w
```

Now TypeScript will automatically recompile your code whenever you save changes.

Example:

```text
index.ts
   ↓
Save file
   ↓
TypeScript detects change
   ↓
index.js updated
```

Press:

```text
Ctrl + C
```

to stop the watcher.

---

# 📦 Running the Local TypeScript Compiler

If TypeScript was installed locally:

```bash
npm install -D typescript
```

you should use:

```bash
npx tsc
```

instead of depending on a globally installed `tsc`.

`npx` allows npm to find and execute the TypeScript compiler installed inside the project.

---

# 🧑‍💻 How to Clone This Project

If the project is hosted on GitHub, another developer can download it using Git.

First, make sure Git is installed:

```bash
git --version
```

Then clone the repository:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Replace:

```text
USERNAME
```

and:

```text
REPOSITORY
```

with the actual GitHub username and repository name.

For example:

```bash
git clone https://github.com/example/typescript-introduction.git
```

---

# 📂 Move Into the Project

After cloning:

```bash
cd typescript-introduction
```

You can check the project files using:

```bash
dir
```

on Windows.

On Linux/macOS:

```bash
ls
```

---

# 📥 Install Project Dependencies

When you clone a project, the `node_modules` folder is normally **not included** in GitHub.

You therefore need to install the dependencies.

Run:

```bash
npm install
```

This reads the project's:

```text
package.json
```

and:

```text
package-lock.json
```

and installs the required dependencies.

After this, the project will have:

```text
node_modules/
```

---

# ▶️ Run the Project After Cloning

The exact command depends on how the project is configured.

For a simple TypeScript project, you can compile it with:

```bash
npx tsc
```

Then run the generated JavaScript:

```bash
node index.js
```

So the basic workflow is:

```bash
git clone <repository-url>

cd <project-folder>

npm install

npx tsc

node index.js
```

---

# 🚀 Recommended Project Setup

A simple TypeScript project can use this structure:

```text
typescript-introduction/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── node_modules/
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

The idea is:

```text
src/
```

contains your TypeScript source code.

```text
dist/
```

contains the JavaScript generated after compilation.

---

# ⚙️ Example `tsconfig.json`

A simple configuration can look like:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

With this configuration:

```text
src/index.ts
```

will be compiled into:

```text
dist/index.js
```

---

# ▶️ Running the Recommended Project

After creating the structure:

```text
src/
└── index.ts
```

put this inside `index.ts`:

```typescript
const username: string = "Kiptoo";

console.log(`Hello ${username}!`);
```

Compile the project:

```bash
npx tsc
```

You should now have:

```text
dist/
└── index.js
```

Run it:

```bash
node dist/index.js
```

You should see:

```text
Hello Kiptoo!
```

---

# 📜 Useful npm Scripts

Instead of typing:

```bash
npx tsc
```

every time, you can add scripts to `package.json`:

```json
{
  "scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "start": "node dist/index.js"
  }
}
```

Now you can use:

### Build

```bash
npm run build
```

### Watch for changes

```bash
npm run watch
```

### Run the compiled project

```bash
npm start
```

The workflow becomes:

```bash
npm run build
npm start
```

---

# 🔄 Complete Workflow

For a new TypeScript project:

```bash
mkdir typescript-introduction

cd typescript-introduction

npm init -y

npm install -D typescript

npx tsc --init
```

Create:

```text
src/index.ts
```

Add:

```typescript
const message: string = "Hello TypeScript!";

console.log(message);
```

Compile:

```bash
npx tsc
```

Run:

```bash
node dist/index.js
```

---

# 🔄 Workflow When You Clone an Existing Project

If someone gives you a TypeScript project from GitHub:

```bash
git clone <repository-url>
```

Then:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Compile:

```bash
npm run build
```

Run:

```bash
npm start
```

If the project uses a development script, you may instead use:

```bash
npm run dev
```

Always check the `scripts` section inside `package.json` to see which commands the project provides.

---

# 🧠 Important Commands

| Command                     | Purpose                                 |
| --------------------------- | --------------------------------------- |
| `node --version`            | Check Node.js version                   |
| `npm --version`             | Check npm version                       |
| `npm install -g typescript` | Install TypeScript globally             |
| `npm install -D typescript` | Install TypeScript locally              |
| `tsc --version`             | Check global TypeScript version         |
| `npx tsc --version`         | Check project TypeScript version        |
| `npx tsc --init`            | Create `tsconfig.json`                  |
| `npx tsc`                   | Compile TypeScript                      |
| `npx tsc --watch`           | Compile automatically when files change |
| `npm install`               | Install project dependencies            |
| `npm run build`             | Run the build script                    |
| `npm start`                 | Run the start script                    |
| `npm run dev`               | Run the development script              |
| `git clone <url>`           | Clone a GitHub repository               |

---

# ⚠️ Common Mistakes

## 1. Running `npm install` outside the project

If you get an error about `package.json`, make sure you are inside the project directory:

```bash
cd project-name
```

Then:

```bash
npm install
```

---

## 2. `tsc` is not recognized

If you installed TypeScript locally, use:

```bash
npx tsc
```

instead of:

```bash
tsc
```

You can also install TypeScript globally:

```bash
npm install -g typescript
```

---

## 3. Running the `.ts` file directly with Node

Normally, Node.js does not run TypeScript source files directly in a basic TypeScript setup.

Instead:

```text
index.ts
   ↓
npx tsc
   ↓
index.js
   ↓
node index.js
```

---

## 4. Installing `node_modules` manually

Do **not** clone or create `node_modules` manually.

After cloning a project, simply run:

```bash
npm install
```

npm will create it for you.

---

# 🚫 What Should Be Added to `.gitignore`?

You normally should not commit `node_modules`.

Create a `.gitignore` file:

```text
node_modules/
dist/
.env
```

This prevents unnecessary or sensitive files from being uploaded to GitHub.

---

# 🎯 Recommended Approach

For learning TypeScript:

```bash
npm install -g typescript
```

is convenient because you can use:

```bash
tsc
```

from different directories.

For actual projects, use:

```bash
npm install -D typescript
```

and run it with:

```bash
npx tsc
```

### Recommended project workflow

```text
Write TypeScript
       ↓
   src/index.ts
       ↓
    npx tsc
       ↓
    dist/index.js
       ↓
    node dist/index.js
```

For a team project, **local TypeScript installation is the recommended approach** because the project controls its TypeScript version and everyone working on the project can use the same setup.

---

# 📚 Next Topics to Learn

After learning how to install and run TypeScript, continue with:

1. Basic Types
2. Type Inference
3. Arrays
4. Objects
5. Functions
6. Interfaces
7. Type Aliases
8. Union Types
9. Enums
10. Generics
11. Classes
12. Modules
13. Type Narrowing
14. Utility Types
15. `async` / `await`
16. TypeScript with Node.js
17. TypeScript with React
18. TypeScript with Express
19. TypeScript with NestJS

---

# 👨‍💻 Author

This repository is for learning and practicing **TypeScript** from the basics.

Happy coding! 🚀
