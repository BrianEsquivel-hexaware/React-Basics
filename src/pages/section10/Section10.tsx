import "./Section10.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";

function Section10() {
  const projectStructureData = [
    { Folder: "src/pages", Purpose: "Page components for each route", Example: "Home.tsx, About.tsx, NotFound.tsx" },
    { Folder: "src/components", Purpose: "Reusable UI components", Example: "Button, Card, Header, Footer" },
    { Folder: "src/hooks", Purpose: "Custom React hooks", Example: "useAuth, useLocalStorage, useFetch" },
    { Folder: "src/types", Purpose: "TypeScript interfaces and types", Example: "User.ts, Post.ts" },
    { Folder: "src/utils", Purpose: "Utility functions", Example: "formatDate, calculateTotal" },
    { Folder: "src/styles", Purpose: "Global styles", Example: "index.css, variables.css" },
  ];

  const performanceTipsData = [
    { Technique: "React.memo()", Impact: "Prevents re-renders of unchanged props", Use: "Expensive components" },
    { Technique: "useCallback()", Impact: "Memoizes function references", Use: "Functions passed as props" },
    { Technique: "useMemo()", Impact: "Memoizes expensive calculations", Use: "Heavy computations" },
    { Technique: "Code Splitting", Impact: "Loads code only when needed", Use: "Large apps" },
    { Technique: "Lazy Loading", Impact: "Defers non-critical content", Use: "Images, heavy components" },
  ];

  const accessibilityData = [
    { Issue: "Missing alt text on images", Fix: "Always add descriptive alt props" },
    { Issue: "Poor color contrast", Fix: "Use WCAG AA standard (4.5:1 ratio)" },
    { Issue: "Missing form labels", Fix: "Link labels to inputs with htmlFor" },
    { Issue: "No keyboard navigation", Fix: "Ensure all interactive elements are keyboard accessible" },
    { Issue: "Missing ARIA labels", Fix: "Use aria-label for screen readers" },
  ];

  const antiPatternsData = [
    {
      AntiPattern: "❌ Mutating state directly",
      Problem: "React doesn't detect changes",
      BestPractice: "Create new objects/arrays with spread operator"
    },
    {
      AntiPattern: "❌ Using index as key in lists",
      Problem: "Bugs when list changes",
      BestPractice: "Use unique IDs from data"
    },
    {
      AntiPattern: "❌ Props drilling",
      Problem: "Passing props through many components",
      BestPractice: "Use Context API for deeply nested data"
    },
    {
      AntiPattern: "❌ Logic in component body",
      Problem: "Hard to test and reuse",
      BestPractice: "Extract to custom hooks or utils"
    },
    {
      AntiPattern: "❌ No error boundaries",
      Problem: "One error crashes entire app",
      BestPractice: "Wrap critical components in ErrorBoundary"
    },
  ];

  return (
    <div className="section10">
      <h1>Best Practices</h1>
      <p>Learn how to follow best practices when developing React applications for better code quality and maintainability.</p>

      {/* Why Best Practices Matter */}
      <section className="section-content">
        <h2>Why Best Practices Matter?</h2>
        <p>
          Following best practices makes your code easier to understand, maintain, and scale. Good practices prevent bugs, improve 
          performance, and make collaboration smoother. They're essential for building professional applications that last.
        </p>

        <div className="key-points">
          <h4>Benefits of Best Practices</h4>
          <ul>
            <li><strong>Readability:</strong> Code is easier for others to understand</li>
            <li><strong>Maintainability:</strong> Easier to fix bugs and add features</li>
            <li><strong>Performance:</strong> Well-organized code runs faster</li>
            <li><strong>Scalability:</strong> Code grows with your app</li>
            <li><strong>Collaboration:</strong> Teams work together more smoothly</li>
            <li><strong>Debugging:</strong> Easier to find and fix problems</li>
          </ul>
        </div>
      </section>

      {/* Project Structure */}
      <section className="section-content">
        <h2>Project Structure and Organization</h2>
        <p>
          A well-organized project is easier to navigate and scale. Group related files together and follow a consistent naming 
          convention. This is what you're seeing in this course project.
        </p>

        <h3>Recommended Folder Structure</h3>
        <InfoTable
          title="Project Folder Organization"
          headers={["Folder", "Purpose", "Example Files"]}
          data={projectStructureData}
        />

        <CodeBlock
          title="Complete Project Structure"
          code={`src/
├── pages/              # Route pages
│   ├── home/
│   ├── about/
│   └── NotFound.tsx
├── components/          # Reusable components
│   ├── header/
│   ├── footer/
│   ├── Button/
│   └── Card/
├── hooks/              # Custom hooks
│   ├── useAuth.ts
│   ├── useFetch.ts
│   └── useLocalStorage.ts
├── types/              # TypeScript interfaces
│   ├── User.ts
│   └── Post.ts
├── utils/              # Utility functions
│   ├── formatDate.ts
│   └── calculateTotal.ts
├── styles/             # Global styles
│   ├── index.css
│   └── variables.css
├── routes/
│   └── index.tsx
├── App.tsx
└── main.tsx`}
          language="typescript"
        />
      </section>

      {/* Code Quality */}
      <section className="section-content">
        <h2>Code Quality: Naming, Comments, and Organization</h2>
        <p>
          Write code that's easy to understand. Use clear names, add helpful comments, and keep functions small and focused.
        </p>

        <CodeBlock
          title="Good Code Quality Example"
          code={`// ❌ BAD: Unclear names, no comments
function f(u) {
  const a = u.age;
  const x = a > 18;
  return x ? 'adult' : 'minor';
}

// ✅ GOOD: Clear names, helpful comments
// Determines if a user is an adult based on age
function isUserAdult(user: User): boolean {
  const userAge = user.age;
  const isAdult = userAge > 18;
  return isAdult;
}

// Or even simpler:
function isUserAdult(user: User): boolean {
  return user.age > 18;
}

// Naming conventions:
// - Functions: camelCase (getUserById)
// - Components: PascalCase (UserProfile)
// - Constants: UPPER_SNAKE_CASE (MAX_ITEMS = 10)
// - Booleans: start with is/has/can (isLoading, hasError)
// - Private: prefix with _ (if needed)`}
          language="typescript"
        />

        <div className="key-points">
          <h4>Code Quality Tips</h4>
          <ul>
            <li><strong>Clear names:</strong> Function and variable names should explain their purpose</li>
            <li><strong>Small functions:</strong> Functions should do one thing well</li>
            <li><strong>Comments wisely:</strong> Comment the "why", not the "what"</li>
            <li><strong>DRY principle:</strong> Don't Repeat Yourself - extract to functions</li>
            <li><strong>Consistent style:</strong> Use formatter (Prettier) for consistent code</li>
          </ul>
        </div>
      </section>

      {/* Component Design */}
      <section className="section-content">
        <h2>Component Design Best Practices</h2>
        <p>
          Design components to be small, focused, and reusable. Each component should have a single responsibility.
        </p>

        <CodeBlock
          title="Good Component Design"
          code={`// ❌ BAD: Component does too much
function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  
  // Fetch users
  // Fetch user details
  // Render list
  // Render details
  // Handle sorting
  // Handle filtering
  // ... 300 lines of code
}

// ✅ GOOD: Small, focused components
function UserDashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = useUsers();  // Custom hook

  return (
    <div>
      <UserList users={users} onSelect={setSelectedUser} />
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
}

function UserList({ users, onSelect }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => onSelect(user)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

function UserDetails({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Benefits:
// - Each component is easy to test
// - Reusable in different places
// - Easy to maintain
// - Clear responsibility`}
          language="typescript"
        />
      </section>

      {/* Performance */}
      <section className="section-content">
        <h2>Performance Optimization</h2>
        <p>
          Optimize for performance to make your app fast and responsive. Use React's built-in tools and techniques.
        </p>

        <h3>Performance Optimization Techniques</h3>
        <InfoTable
          title="React Performance Tools"
          headers={["Technique", "Impact", "Use Case"]}
          data={performanceTipsData}
        />

        <CodeBlock
          title="Performance Optimization Examples"
          code={`// 1. React.memo() - Prevent unnecessary re-renders
const ExpensiveComponent = React.memo(({ name }) => {
  return <div>{name}</div>;  // Only re-renders if 'name' changes
});

// 2. useCallback() - Memoize functions
function Parent() {
  const [count, setCount] = useState(0);
  
  // Without useCallback, handleClick is recreated on every render
  // With useCallback, it's only recreated when dependencies change
  const handleClick = useCallback(() => {
    console.log(count);
  }, [count]);

  return <Child onClick={handleClick} />;  // Child won't re-render unnecessarily
}

// 3. useMemo() - Memoize expensive calculations
function List({ items }) {
  // Without useMemo, this sorts on every render
  // With useMemo, it only sorts when items changes
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return <div>{sortedItems}</div>;
}

// 4. Code Splitting - Load components only when needed
const UserProfile = React.lazy(() => import('./UserProfile'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <UserProfile />
    </Suspense>
  );
}`}
          language="typescript"
        />
      </section>

      {/* TypeScript */}
      <section className="section-content">
        <h2>TypeScript and Type Safety</h2>
        <p>
          Use TypeScript to catch errors at compile time and make your code more maintainable. Always type your props, state, and 
          function parameters.
        </p>

        <CodeBlock
          title="TypeScript Best Practices"
          code={`// 1. Always type your props
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

function Button({ label, onClick, disabled, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
}

// 2. Type your state
function Counter() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  return null;
}

// 3. Type API responses
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = { id: 1, name: 'Alice', email: 'alice@example.com' };

// 4. Type functions
function add(a: number, b: number): number {
  return a + b;
}

function processUsers(users: User[]): string[] {
  return users.map(u => u.name);
}

// 5. Use generics for reusable functions
function getById<T>(items: T[], id: number): T | undefined {
  return items.find((item: any) => item.id === id);
}`}
          language="typescript"
        />
      </section>

      {/* Error Handling */}
      <section className="section-content">
        <h2>Error Handling and Debugging</h2>
        <p>
          Always handle errors gracefully. Use try/catch, show error messages, and make debugging easier with proper logging.
        </p>

        <CodeBlock
          title="Error Handling Best Practices"
          code={`// 1. Always use try/catch for async operations
async function fetchUser(id: string) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;  // Re-throw or return null
  }
}

// 2. Use Error Boundaries for React errors
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Caught error:', error);
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}

// 3. Validation and user feedback
function submitForm(data) {
  const errors = validateForm(data);
  if (errors.length > 0) {
    setErrors(errors);  // Show errors to user
    return;
  }
  
  submitToAPI(data);
}

// 4. Meaningful error messages
setError('Failed to load users. Please check your internet connection and try again.');
// Instead of:
setError('Error');

// 5. Debug with console.log (remove before production)
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}`}
          language="typescript"
        />
      </section>

      {/* State Management */}
      <section className="section-content">
        <h2>State Management Patterns</h2>
        <p>
          Manage state efficiently. Keep state as local as possible, lift it when multiple components need it, and use Context API 
          for deeply nested data.
        </p>

        <CodeBlock
          title="State Management Patterns"
          code={`// 1. Keep state local when possible
function Counter() {
  const [count, setCount] = useState(0);  // Local state
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// 2. Lift state when multiple components need it
function Parent() {
  const [user, setUser] = useState(null);  // Shared state
  
  return (
    <>
      <Header user={user} />
      <Profile user={user} />
      <Sidebar user={user} />
    </>
  );
}

// 3. Use Context API to avoid prop drilling
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Profile />
      <Sidebar />
    </UserContext.Provider>
  );
}

function Header() {
  const { user } = useContext(UserContext);  // Access from any depth
  return <h1>{user?.name}</h1>;
}

// 4. Use useReducer for complex state
function useFormState() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}`}
          language="typescript"
        />
      </section>

      {/* Accessibility */}
      <section className="section-content">
        <h2>Accessibility (a11y)</h2>
        <p>
          Make your app accessible to everyone, including people with disabilities. It's not just ethical, it's also legally required 
          in many jurisdictions.
        </p>

        <h3>Common Accessibility Issues and Fixes</h3>
        <InfoTable
          title="Accessibility Checklist"
          headers={["Issue", "Fix"]}
          data={accessibilityData}
        />

        <CodeBlock
          title="Accessibility Best Practices"
          code={`// 1. Always use semantic HTML
// ❌ Bad: <div onClick={handleClick}>Click me</div>
// ✅ Good: <button onClick={handleClick}>Click me</button>

// 2. Add alt text to images
// ❌ Bad: <img src="profile.jpg" />
// ✅ Good: <img src="profile.jpg" alt="User profile photo" />

// 3. Link labels to inputs
// ❌ Bad: <input type="email" />
// ✅ Good: 
<label htmlFor="email">Email:</label>
<input id="email" type="email" />

// 4. Use ARIA labels for screen readers
<button aria-label="Close menu" onClick={closeMenu}>
  ×
</button>

// 5. Ensure keyboard navigation
function Dialog({ onClose }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <div role="dialog" onKeyDown={handleKeyDown}>
      {/* Dialog content */}
    </div>
  );
}

// 6. Use proper heading hierarchy
// ✅ Good:
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>

// ❌ Bad: Skip from h1 to h3`}
          language="typescript"
        />
      </section>

      {/* Anti-patterns */}
      <section className="section-content">
        <h2>Common Anti-patterns to Avoid</h2>
        <p>
          Recognize these common mistakes and learn how to avoid them:
        </p>

        <div className="antipattern-grid">
          {antiPatternsData.map((item, idx) => (
            <div key={idx} className="antipattern-card">
              <h4>{item.AntiPattern}</h4>
              <div className="antipattern-content">
                <p><strong>Problem:</strong> {item.Problem}</p>
                <p><strong>Solution:</strong> {item.BestPractice}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testing Basics */}
      <section className="section-content">
        <h2>Testing Basics</h2>
        <p>
          Write tests to catch bugs early and make refactoring safer. Start with basic unit tests and gradually add integration tests.
        </p>

        <CodeBlock
          title="Testing Basics Example"
          code={`// Example using Vitest or Jest
import { render, screen } from '@testing-library/react';
import Button from './Button';

// Test 1: Component renders
test('Button renders with label', () => {
  render(<Button label="Click me" onClick={() => {}} />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

// Test 2: Click handler works
test('Button calls onClick when clicked', () => {
  const onClick = jest.fn();
  render(<Button label="Click" onClick={onClick} />);
  
  screen.getByText('Click').click();
  expect(onClick).toHaveBeenCalled();
});

// Test 3: Disabled state
test('Disabled button cannot be clicked', () => {
  const onClick = jest.fn();
  render(<Button label="Click" onClick={onClick} disabled />);
  
  screen.getByRole('button').click();
  expect(onClick).not.toHaveBeenCalled();
});

// Testing Tips:
// - Test user behavior, not implementation
// - Write meaningful test names
// - Aim for >80% code coverage
// - Test edge cases and error states
// - Keep tests simple and focused`}
          language="typescript"
        />
      </section>

      {/* Summary */}
      <section className="section-content">
        <h2>Summary: Your React Journey</h2>
        <div className="summary-box">
          <h3>Key Takeaways from the Course</h3>
          <ul>
            <li><strong>Project Structure:</strong> Organize code in logical folders (pages, components, hooks, utils)</li>
            <li><strong>Code Quality:</strong> Write clear names, add helpful comments, keep functions small</li>
            <li><strong>Components:</strong> Make them small, focused, and reusable</li>
            <li><strong>State Management:</strong> Keep state local, lift when needed, use Context for deeply nested data</li>
            <li><strong>Performance:</strong> Use React.memo, useCallback, useMemo for optimization</li>
            <li><strong>TypeScript:</strong> Type everything - props, state, functions, and API responses</li>
            <li><strong>Error Handling:</strong> Always use try/catch, show meaningful error messages</li>
            <li><strong>API Calls:</strong> Use useEffect with dependencies, handle loading/error states</li>
            <li><strong>Navigation:</strong> Use React Router Link for client-side routing</li>
            <li><strong>Styling:</strong> Keep CSS co-located with components, use Bootstrap for rapid development</li>
            <li><strong>Accessibility:</strong> Use semantic HTML, ARIA labels, keyboard navigation</li>
            <li><strong>Testing:</strong> Write tests to catch bugs and make refactoring safer</li>
          </ul>
        </div>

        <div className="final-thoughts">
          <h3>Final Tips</h3>
          <ul>
            <li>📄 <strong>Keep Learning:</strong> React evolves, stay updated with new features</li>
            <li>🔐 <strong>Practice:</strong> Build projects, make mistakes, learn from them</li>
            <li>🤝 <strong>Join Community:</strong> Share knowledge, help others, grow together</li>
            <li>🌟 <strong>Code Review:</strong> Ask for feedback, review others' code</li>
            <li>✅ <strong>Refactor:</strong> Good code is iterative, improve over time</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section10;