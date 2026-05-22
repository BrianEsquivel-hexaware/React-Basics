import "./Section2.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";

function Section2() {
  const jsControlStatements = [
    { Statement: "if / else", Purpose: "Execute code based on a condition", Example: "if (age > 18) { ... }" },
    { Statement: "switch", Purpose: "Execute different code for different cases", Example: "switch (day) { case 1: ... }" },
    { Statement: "try / catch", Purpose: "Handle errors in code execution", Example: "try { ... } catch (e) { ... }" },
  ];

  const jsLoops = [
    { Loop: "for", Purpose: "Loop through a block of code a fixed number of times", Syntax: "for (let i = 0; i < 5; i++)" },
    { Loop: "while", Purpose: "Loop as long as a condition is true", Syntax: "while (condition) { ... }" },
    { Loop: "forEach", Purpose: "Execute a function for each element in an array", Syntax: "arr.forEach(item => { ... })" },
  ];

  const jsVsTs = [
    { Feature: "Type System", JavaScript: "Dynamic (types at runtime)", TypeScript: "Static (types at compile time)" },
    { Feature: "Type Checking", JavaScript: "No built-in type checking", TypeScript: "Strict type checking" },
    { Feature: "Interfaces", JavaScript: "Not available", TypeScript: "Full support for interfaces" },
    { Feature: "Compilation", JavaScript: "Runs directly in browsers", TypeScript: "Must be compiled to JavaScript" },
    { Feature: "Development", JavaScript: "Faster to write, more errors at runtime", TypeScript: "Slower to write, catches errors early" },
  ];

  const tsBasicTypes = [
    { Type: "string", Example: "const name: string = 'React'", Description: "Text values" },
    { Type: "number", Example: "const age: number = 25", Description: "Numeric values" },
    { Type: "boolean", Example: "const active: boolean = true", Description: "True or false values" },
    { Type: "any", Example: "const value: any = 'anything'", Description: "Accept any type (avoid when possible)" },
    { Type: "array", Example: "const items: string[] = ['a', 'b']", Description: "Collections of values" },
  ];

  const viteSteps = [
    { Step: "1. Create Project", Command: "npm create vite@latest my-react-app -- --template react", Description: "Create a new Vite React project" },
    { Step: "2. Navigate to Directory", Command: "cd my-react-app", Description: "Enter the project folder" },
    { Step: "3. Install Dependencies", Command: "npm install", Description: "Install required packages" },
    { Step: "4. Start Dev Server", Command: "npm run dev", Description: "Run the development server" },
    { Step: "5. Open Browser", Command: "http://localhost:5173", Description: "View your app" },
  ];

  return (
    <div className="section2">
      <h1>JavaScript, TypeScript & Vite Fundamentals</h1>

      {/* JavaScript Section */}
      <section className="section-content">
        <h2>What is JavaScript?</h2>
        <p>
          JavaScript is a lightweight, versatile programming language primarily used for building interactive web applications. 
          It runs in web browsers and is the backbone of modern web development. With the rise of Node.js, JavaScript can 
          also be used for server-side development.
        </p>

        <h3>Basic Elements of a JavaScript Program</h3>
        <div className="key-points">
          <h4>Variables & Data Types</h4>
          <ul>
            <li><strong>Variables:</strong> Store data using <code>const</code>, <code>let</code>, or <code>var</code></li>
            <li><strong>Primitive Types:</strong> string, number, boolean, null, undefined</li>
            <li><strong>Objects:</strong> Complex data structures containing properties and methods</li>
            <li><strong>Arrays:</strong> Ordered collections of values</li>
          </ul>
        </div>

        <CodeBlock
          title="JavaScript Variables & Data Types"
          code={`const name = "React"; // String
let age = 25; // Number
const isActive = true; // Boolean
const skills = ["JavaScript", "React", "CSS"]; // Array

// Objects
const developer = {
  name: "John",
  age: 25,
  skills: ["React", "Node.js"]
};`}
          language="javascript"
        />

        <h3>Control Statements</h3>
        <p>Control flow statements determine how code execution progresses:</p>
        <InfoTable
          title="Control Flow Statements"
          headers={["Statement", "Purpose", "Example"]}
          data={jsControlStatements}
        />

        <CodeBlock
          title="Control Statements Examples"
          code={`// if / else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// switch
switch (dayOfWeek) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}

// try / catch
try {
  riskyFunction();
} catch (error) {
  console.log("Error caught:", error.message);
}`}
          language="javascript"
        />

        <h3>Loops</h3>
        <p>Loops allow you to execute code multiple times:</p>
        <InfoTable
          title="JavaScript Loops"
          headers={["Loop", "Purpose", "Syntax"]}
          data={jsLoops}
        />

        <CodeBlock
          title="Loop Examples"
          code={`// Traditional for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// forEach - iterate over arrays
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});`}
          language="javascript"
        />

        <h3>Functions</h3>
        <p>Functions are reusable blocks of code that perform specific tasks:</p>
        <CodeBlock
          title="Function Declarations"
          code={`// Regular function
function greet(name) {
  return "Hello, " + name;
}

// Arrow function (modern syntax)
const add = (a, b) => {
  return a + b;
};

// Arrow function (shorter)
const multiply = (a, b) => a * b;

// Using functions
console.log(greet("Alice")); // "Hello, Alice"
console.log(add(5, 3)); // 8`}
          language="javascript"
        />

        <h3>Map & Filter Methods</h3>
        <p>These array methods are essential for transforming data:</p>
        <CodeBlock
          title="Map & Filter Examples"
          code={`const numbers = [1, 2, 3, 4, 5];

// Map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter - create a new array with elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Combining map and filter
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const fruitsOver5Chars = fruits
  .filter(fruit => fruit.length > 5)
  .map(fruit => fruit.toUpperCase());
console.log(fruitsOver5Chars); // ["BANANA", "CHERRY"]`}
          language="javascript"
        />
      </section>

      {/* TypeScript Section */}
      <section className="section-content">
        <h2>JavaScript vs TypeScript</h2>
        <p>
          TypeScript is a superset of JavaScript that adds optional static typing. This means you can declare what type 
          each variable should be, helping catch errors early in development.
        </p>

        <InfoTable
          title="JavaScript vs TypeScript Comparison"
          headers={["Feature", "JavaScript", "TypeScript"]}
          data={jsVsTs}
        />

        <h3>Why Use TypeScript in React?</h3>
        <div className="difference-list">
          <li><strong>Type Safety:</strong> Catch errors during development, not in production</li>
          <li><strong>Better IDE Support:</strong> Get autocomplete and intelligent code suggestions</li>
          <li><strong>Self-Documenting:</strong> Types serve as inline documentation</li>
          <li><strong>Easier Refactoring:</strong> TypeScript warns when you break compatibility</li>
          <li><strong>Scalability:</strong> Large codebases are easier to maintain with types</li>
        </div>
      </section>

      {/* TypeScript Fundamentals */}
      <section className="section-content">
        <h2>TypeScript Fundamentals</h2>

        <h3>Basic Types in TypeScript</h3>
        <InfoTable
          title="Basic TypeScript Types"
          headers={["Type", "Example", "Description"]}
          data={tsBasicTypes}
        />

        <CodeBlock
          title="TypeScript Type Annotations"
          code={`// Basic types
const message: string = "Hello TypeScript";
const count: number = 42;
const isComplete: boolean = true;

// Arrays with types
const names: string[] = ["Alice", "Bob", "Charlie"];
const numbers: Array<number> = [1, 2, 3];

// Union types (multiple types allowed)
const id: string | number = 123; // Can be string or number

// Optional types
const nickname?: string = undefined; // Can be string or undefined`}
          language="typescript"
        />

        <h3>Interfaces in TypeScript</h3>
        <p>Interfaces define the structure of objects, ensuring consistency across your code:</p>
        <CodeBlock
          title="Interface Examples"
          code={`// Define an interface
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // Optional property
}

// Use the interface
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isAdmin: true
};

// Interface for functions
interface Greeting {
  (name: string): string;
}

const sayHello: Greeting = (name) => {
  return "Hello, " + name;
};`}
          language="typescript"
        />

        <h3>Typed Functions</h3>
        <p>Functions can have type annotations for parameters and return values:</p>
        <CodeBlock
          title="Typed Functions"
          code={`// Function with parameter and return types
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with types
const multiply = (x: number, y: number): number => x * y;

// Function with object parameter
interface Product {
  name: string;
  price: number;
  quantity: number;
}

function calculateTotal(product: Product): number {
  return product.price * product.quantity;
}

// Optional and default parameters
function greet(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name;
}

// Using typed functions
console.log(add(5, 3)); // 8
console.log(calculateTotal({ name: "Laptop", price: 999, quantity: 2 })); // 1998`}
          language="typescript"
        />

        <h3>Generics in TypeScript</h3>
        <p>Generics allow functions and classes to work with multiple types while maintaining type safety:</p>
        <CodeBlock
          title="Generics Example"
          code={`// Generic function
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstString = getFirstElement<string>(["a", "b", "c"]);
const firstNumber = getFirstElement<number>([1, 2, 3]);

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

const stringContainer: Container<string> = {
  value: "Hello",
  getValue() {
    return this.value;
  }
};`}
          language="typescript"
        />
      </section>

      {/* Vite Section */}
      <section className="section-content">
        <h2>What is Vite?</h2>
        <p>
          Vite (French for "fast") is a modern build tool and development server designed for fast development and optimized 
          production builds. It provides lightning-fast Hot Module Replacement (HMR) and is the recommended tool for building 
          React applications in 2024+.
        </p>

        <h3>Key Features of Vite</h3>
        <div className="key-points">
          <h4>Why Use Vite?</h4>
          <ul>
            <li><strong>Instant Server Start:</strong> Starts dev server in milliseconds</li>
            <li><strong>Lightning Fast HMR:</strong> Changes reflect instantly without full page reload</li>
            <li><strong>Pre-bundled Dependencies:</strong> Faster dependency resolution</li>
            <li><strong>Optimized Production Build:</strong> Uses Rollup for efficient bundling</li>
            <li><strong>Modern JavaScript:</strong> Supports ES modules natively</li>
            <li><strong>Framework Agnostic:</strong> Works with React, Vue, Svelte, and more</li>
          </ul>
        </div>

        <h3>Creating a React App with Vite</h3>
        <InfoTable
          title="Vite Setup Steps"
          headers={["Step", "Command", "Description"]}
          data={viteSteps}
        />

        <CodeBlock
          title="Complete Vite Setup with React"
          code={`# 1. Create a new Vite React project
npm create vite@latest my-react-app -- --template react

# 2. Navigate to the project
cd my-react-app

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Build for production
npm run build

# 6. Preview production build locally
npm run preview`}
          language="bash"
        />

        <h3>Vite Project Structure</h3>
        <CodeBlock
          title="Typical Vite React Project Structure"
          code={`my-react-app/
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── assets/          # Images, fonts, etc.
├── public/              # Static assets
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
├── index.html           # HTML template
└── README.md            # Project documentation`}
          language="text"
        />

        <h3>Vite Configuration</h3>
        <p>Customize Vite behavior with vite.config.js:</p>
        <CodeBlock
          title="Basic Vite Configuration"
          code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true  // Auto open browser
  },
  build: {
    outDir: 'dist',      // Output directory
    minify: 'terser'     // Minification
  }
})`}
          language="javascript"
        />

        <h3>Vite vs Other Build Tools</h3>
        <div className="comparison-section">
          <div className="comparison-box">
            <h4>Vite (Modern)</h4>
            <ul>
              <li>Native ES modules</li>
              <li>Instant HMR</li>
              <li>Faster startup</li>
              <li>Optimized for modern browsers</li>
              <li>Better DX (Developer Experience)</li>
            </ul>
          </div>
          <div className="comparison-box">
            <h4>Webpack (Traditional)</h4>
            <ul>
              <li>Requires bundling everything upfront</li>
              <li>Slower HMR</li>
              <li>Longer startup time</li>
              <li>More configuration needed</li>
              <li>Mature ecosystem</li>
            </ul>
          </div>
        </div>

        <h3>Summary</h3>
        <div className="summary-box">
          <h2>Key Takeaways</h2>
          <ul>
            <li><strong>JavaScript:</strong> Dynamic language for web development with control flow, loops, functions, and array methods</li>
            <li><strong>TypeScript:</strong> Adds static typing to JavaScript for safer, more maintainable code</li>
            <li><strong>Interfaces:</strong> Define object and function structures for type safety</li>
            <li><strong>Generics:</strong> Create reusable components that work with multiple types</li>
            <li><strong>Vite:</strong> Modern build tool providing fast development experience and optimized production builds</li>
            <li><strong>React + Vite:</strong> Perfect combination for building scalable, performant web applications</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section2;
