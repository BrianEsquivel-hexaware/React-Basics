import "./Section3.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";

function Section3() {
  const componentBenefits = [
    { Benefit: "Reusability", Description: "Write once, use multiple times across your app" },
    { Benefit: "Maintainability", Description: "Easier to update and debug isolated components" },
    { Benefit: "Scalability", Description: "Build complex UIs by composing simple components" },
    { Benefit: "Testability", Description: "Test components in isolation for better coverage" },
    { Benefit: "Separation of Concerns", Description: "Each component handles one specific task" },
  ];

  const jsxVsTsx = [
    { Aspect: "File Extension", JSX: ".jsx or .js", TSX: ".tsx or .ts" },
    { Aspect: "Type Support", JSX: "No type checking", TSX: "Full TypeScript support" },
    { Aspect: "Props Definition", JSX: "PropTypes (optional)", TSX: "Interfaces/Types (required)" },
    { Aspect: "Error Detection", JSX: "Runtime errors", TSX: "Compile-time errors" },
    { Aspect: "IDE Support", JSX: "Basic intellisense", TSX: "Advanced intellisense with types" },
    { Aspect: "Learning Curve", JSX: "Easier for beginners", TSX: "Steeper but more powerful" },
  ];

  const propsPatterns = [
    { Pattern: "Destructuring", Example: "const Button = ({ label, onClick }) => ...", Benefit: "Cleaner, more readable code" },
    { Pattern: "With Types", Example: "interface ButtonProps { label: string; onClick: () => void; }", Benefit: "Type safety and autocomplete" },
    { Pattern: "Default Props", Example: "const { variant = 'primary' } = props", Benefit: "Flexible component configuration" },
    { Pattern: "Children Prop", Example: "<Button>Click Me</Button>", Benefit: "Compose components easily" },
  ];

  const exportPatterns = [
    { Method: "Named Export", Syntax: "export const Button = () => ...", Usage: "import { Button } from './Button'" },
    { Method: "Default Export", Syntax: "export default Button", Usage: "import Button from './Button'" },
    { Method: "Namespace Export", Syntax: "export * from './components'", Usage: "import * as Components from './components'" },
  ];

  const componentPractices = [
    { Practice: "Single Responsibility", Description: "Each component should do one thing well" },
    { Practice: "Props Validation", Description: "Always define and validate prop types" },
    { Practice: "Meaningful Names", Description: "Use clear, descriptive component names" },
    { Practice: "Keep Components Small", Description: "Aim for components under 300 lines" },
    { Practice: "Avoid Prop Drilling", Description: "Use Context API for deeply nested props" },
    { Practice: "Memoization", Description: "Use React.memo for expensive components" },
    { Practice: "Lazy Loading", Description: "Use React.lazy for code splitting" },
    { Practice: "Accessibility", Description: "Include proper ARIA labels and semantic HTML" },
  ];

  return (
    <div className="section3">
      <h1>Components</h1>
      <p>Learn how to create reusable components in React.</p>

      {/* What are Components */}
      <section className="section-content">
        <h2>What are Components?</h2>
        <p>
          Components are the building blocks of React applications. They are reusable, independent pieces of UI that 
          encapsulate their own state and logic. Think of components as JavaScript functions that return JSX/TSX to 
          describe what should appear on the screen.
        </p>

        <h3>Types of Components</h3>
        <CodeBlock
          title="Function Component vs Class Component"
          code={`// Function Component (Modern & Recommended)
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow Function Component
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Class Component (Legacy)
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}`}
          language="javascript"
        />

        <h3>Benefits of Components</h3>
        <InfoTable
          title="Component Benefits"
          headers={["Benefit", "Description"]}
          data={componentBenefits}
        />

        <div className="key-points">
          <h4>Why Components Matter</h4>
          <ul>
            <li><strong>Modularity:</strong> Break down complex UIs into manageable pieces</li>
            <li><strong>Reusability:</strong> Use the same component in multiple places</li>
            <li><strong>Maintainability:</strong> Changes to a component update everywhere it's used</li>
            <li><strong>Testing:</strong> Test components independently for better coverage</li>
            <li><strong>Collaboration:</strong> Team members can work on different components</li>
          </ul>
        </div>
      </section>

      {/* TSX Section */}
      <section className="section-content">
        <h2>What is TSX?</h2>
        <p>
          TSX (TypeScript XML) is a combination of TypeScript and JSX. It allows you to write React components with 
          full type safety while using JSX syntax. TSX files have the .tsx extension and provide compile-time type checking.
        </p>

        <h3>TSX vs TS</h3>
        <div className="difference-list">
          <li>
            <strong>TS (TypeScript):</strong> Used for regular TypeScript files with .ts extension. 
            Can contain business logic, utilities, and type definitions.
          </li>
          <li>
            <strong>TSX (TypeScript + JSX):</strong> Used for React component files with .tsx extension. 
            Combines TypeScript syntax with JSX to create typed React components.
          </li>
          <li>
            <strong>Key Difference:</strong> TSX files return JSX elements while TS files typically return data or functions.
          </li>
        </div>

        <h3>Basic TSX Component</h3>
        <CodeBlock
          title="TSX Component Structure"
          code={`import React from 'react';

// Define component props interface
interface GreetingProps {
  name: string;
  age?: number; // Optional prop
  onGreet?: () => void;
}

// TSX Component with type safety
const Greeting: React.FC<GreetingProps> = ({ name, age, onGreet }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old</p>}
      {onGreet && <button onClick={onGreet}>Click Me</button>}
    </div>
  );
};

export default Greeting;`}
          language="typescript"
        />
      </section>

      {/* JSX vs TSX */}
      <section className="section-content">
        <h2>JSX vs TSX</h2>
        <p>
          Both JSX and TSX allow you to write HTML-like syntax in JavaScript/TypeScript. The main difference is that 
          TSX adds type safety through TypeScript.
        </p>

        <InfoTable
          title="JSX vs TSX Comparison"
          headers={["Aspect", "JSX", "TSX"]}
          data={jsxVsTsx}
        />

        <h3>Side-by-Side Comparison</h3>
          <div className="comparison-box">
            <h4>JSX Component</h4>
            <CodeBlock
              title="Button.jsx"
              code={`function Button(props) {
  return (
    <button 
      onClick={props.onClick}
      className={props.variant}
    >
      {props.children}
    </button>
  );
}

export default Button;`}
              language="javascript"
            />
          </div>
          <div className="comparison-box">
            <h4>TSX Component</h4>
            <CodeBlock
              title="Button.tsx"
              code={`interface ButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'primary',
  children
}) => (
  <button 
    onClick={onClick}
    className={variant}
  >
    {children}
  </button>
);

export default Button;`}
              language="typescript"
            />
          </div>

        <h3>Why Choose TSX?</h3>
        <div className="key-points">
          <h4>Advantages of TSX</h4>
          <ul>
            <li><strong>Type Safety:</strong> Catch errors at compile time, not runtime</li>
            <li><strong>Better IDE Support:</strong> Autocomplete and inline documentation</li>
            <li><strong>Self-Documenting:</strong> Props interfaces serve as component documentation</li>
            <li><strong>Refactoring Safety:</strong> Renaming properties updates everywhere</li>
            <li><strong>Team Collaboration:</strong> Clear contracts between components</li>
          </ul>
        </div>
      </section>

      {/* Props Section */}
      <section className="section-content">
        <h2>What are Props?</h2>
        <p>
          Props (properties) are how you pass data from parent components to child components. Props are read-only and 
          should never be modified by child components. They flow unidirectionally (parent to child).
        </p>

        <h3>Props Basics</h3>
        <CodeBlock
          title="Working with Props"
          code={`// Parent Component
function App() {
  return (
    <UserCard 
      name="Alice" 
      age={28} 
      isActive={true}
    />
  );
}

// Child Component with TSX
interface UserCardProps {
  name: string;
  age: number;
  isActive: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isActive }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};`}
          language="typescript"
        />

        <h3>Advanced Props Patterns</h3>
        <InfoTable
          title="Common Props Patterns"
          headers={["Pattern", "Example", "Benefit"]}
          data={propsPatterns}
        />

        <h3>Children Prop</h3>
        <p>The <code>children</code> prop is special - it contains whatever is between the opening and closing tags:</p>
        <CodeBlock
          title="Using the Children Prop"
          code={`// Component Definition
interface ContainerProps {
  children: React.ReactNode;
  title: string;
}

const Container: React.FC<ContainerProps> = ({ children, title }) => (
  <div className="container">
    <h2>{title}</h2>
    <div className="content">
      {children}
    </div>
  </div>
);

// Usage
function App() {
  return (
    <Container title="My Box">
      <p>This is inside the container</p>
      <button>Click Me</button>
    </Container>
  );
}`}
          language="typescript"
        />

        <h3>Prop Drilling Problem</h3>
        <div className="key-points">
          <h4>What is Prop Drilling?</h4>
          <ul>
            <li><strong>Definition:</strong> Passing props through multiple levels of components</li>
            <li><strong>Problem:</strong> Makes code harder to maintain and understand</li>
            <li><strong>Solution:</strong> Use Context API for global state or custom hooks</li>
            <li><strong>Example:</strong> App → Layout → Sidebar → MenuItem (props passed 4 levels deep)</li>
          </ul>
        </div>
      </section>

      {/* Importing & Exporting */}
      <section className="section-content">
        <h2>Importing and Exporting Components</h2>
        <p>
          Proper component organization requires understanding how to export components from one file and import them 
          into another. This keeps your code organized and reusable.
        </p>

        <InfoTable
          title="Export Methods"
          headers={["Method", "Syntax", "Usage"]}
          data={exportPatterns}
        />

        <h3>Named Export Example</h3>
        <CodeBlock
          title="Named Exports"
          code={`// utils/buttons.ts
export const PrimaryButton = () => <button className="primary">Primary</button>;
export const SecondaryButton = () => <button className="secondary">Secondary</button>;

// App.tsx
import { PrimaryButton, SecondaryButton } from './utils/buttons';

function App() {
  return (
    <div>
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}`}
          language="typescript"
        />

        <h3>Default Export Example</h3>
        <CodeBlock
          title="Default Export"
          code={`// components/Header/Header.tsx
interface HeaderProps {
  title: string;
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({ title, logo }) => (
  <header>
    {logo && <img src={logo} alt="Logo" />}
    <h1>{title}</h1>
  </header>
);

export default Header;

// App.tsx
import Header from './components/Header/Header';

function App() {
  return <Header title="Welcome" logo="/logo.png" />;
}`}
          language="typescript"
        />

        <h3>Index File Pattern</h3>
        <CodeBlock
          title="Using index.ts for Cleaner Imports"
          code={`// components/index.ts
export { default as Button } from './Button/Button';
export { default as Card } from './Card/Card';
export { default as Header } from './Header/Header';
export { default as Footer } from './Footer/Footer';

// App.tsx - Much cleaner!
import { Button, Card, Header, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <Card>
        <Button>Click Me</Button>
      </Card>
      <Footer />
    </>
  );
}`}
          language="typescript"
        />
      </section>

      {/* Best Practices */}
      <section className="section-content">
        <h2>Good Practices for Components</h2>
        <p>
          Following best practices ensures your components are maintainable, performant, and easy to test. These 
          guidelines help create a scalable codebase.
        </p>

        <div className="best-practices-grid">
          {componentPractices.map((practice, index) => (
            <div key={index} className="practice-card">
              <h4>{practice.Practice}</h4>
              <p>{practice.Description}</p>
            </div>
          ))}
        </div>

        <h3>Component Structure Best Practices</h3>
        <CodeBlock
          title="Well-Structured Component"
          code={`// components/UserProfile/UserProfile.tsx
import React, { useState } from 'react';
import './UserProfile.css';
import { validateEmail } from '../../utils/validation';

// 1. Define Types/Interfaces at the top
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface UserProfileProps {
  user: User;
  onUpdate?: (user: User) => void;
}

// 2. Component declaration
const UserProfile: React.FC<UserProfileProps> = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  // 3. Helper functions
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    if (validateEmail(user.email)) {
      onUpdate?.(user);
      setIsEditing(false);
    }
  };

  // 4. JSX/TSX return
  return (
    <div className="user-profile">
      {user.avatar && <img src={user.avatar} alt={user.name} />}
      <div className="info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div className="actions">
        <button onClick={handleEdit}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        {isEditing && <button onClick={handleSave}>Save</button>}
      </div>
    </div>
  );
};

// 5. Export at the end
export default UserProfile;`}
          language="typescript"
        />

        <h3>Performance Best Practices</h3>
        <CodeBlock
          title="Component Optimization"
          code={`// 1. Use React.memo for expensive components
const ExpensiveList = React.memo<ExpensiveListProps>(({ items }) => (
  <ul>
    {items.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
));

// 2. Use useCallback for event handlers
const Button = ({ onClick }: ButtonProps) => {
  const handleClick = React.useCallback(() => {
    onClick?.();
  }, [onClick]);

  return <button onClick={handleClick}>Click Me</button>;
};

// 3. Lazy load heavy components
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <HeavyComponent />
    </React.Suspense>
  );
}`}
          language="typescript"
        />

        <h3>Accessibility Best Practices</h3>
        <CodeBlock
          title="Accessible Components"
          code={`// Good accessible button component
interface AccessibleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  children,
  ariaLabel,
  disabled = false
}) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    disabled={disabled}
    aria-disabled={disabled}
    className={disabled ? 'disabled' : ''}
  >
    {children}
  </button>
);

// Good form component
const Form: React.FC = () => (
  <form>
    <label htmlFor="email">Email:</label>
    <input
      id="email"
      type="email"
      required
      aria-required="true"
      aria-describedby="email-hint"
    />
    <span id="email-hint">Enter a valid email address</span>
  </form>
);`}
          language="typescript"
        />
      </section>

      {/* Summary */}
      <section className="section-content">
        <h2>Summary</h2>
        <div className="summary-box">
          <h3>Key Takeaways</h3>
          <ul>
            <li><strong>Components:</strong> Reusable, independent UI pieces that encapsulate logic and state</li>
            <li><strong>TSX:</strong> TypeScript + JSX for type-safe React components</li>
            <li><strong>Props:</strong> Read-only data passed from parent to child components</li>
            <li><strong>Children:</strong> Special prop for composing components with nested content</li>
            <li><strong>Exports:</strong> Use named exports for utilities, default export for components</li>
            <li><strong>Best Practices:</strong> Keep components small, focused, accessible, and performant</li>
            <li><strong>Performance:</strong> Use React.memo, useCallback, and lazy loading strategically</li>
            <li><strong>Accessibility:</strong> Always include proper ARIA labels and semantic HTML</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section3;