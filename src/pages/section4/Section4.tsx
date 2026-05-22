import "./Section4.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";

function Section4() {
  const stateVsProps = [
    { Aspect: "Definition", State: "Data that changes over time", Props: "Data passed from parent" },
    { Aspect: "Ownership", State: "Owned by the component", Props: "Owned by parent component" },
    { Aspect: "Modification", State: "Can be changed", Props: "Read-only, cannot change" },
    { Aspect: "Purpose", State: "Component internal logic", Props: "Component communication" },
    { Aspect: "Scope", State: "Local to component", Props: "Passed through components" },
  ];

  const commonHooks = [
    { Hook: "useState", Purpose: "Manage state in functional components", Returns: "value, setter function" },
    { Hook: "useEffect", Purpose: "Handle side effects (API calls, cleanup)", Returns: "runs after render" },
    { Hook: "useContext", Purpose: "Access context without prop drilling", Returns: "context value" },
    { Hook: "useReducer", Purpose: "Manage complex state logic", Returns: "state, dispatch function" },
    { Hook: "useCallback", Purpose: "Memoize function references", Returns: "memoized function" },
    { Hook: "useMemo", Purpose: "Memoize expensive computations", Returns: "memoized value" },
    { Hook: "useRef", Purpose: "Access DOM elements directly", Returns: "ref object" },
  ];

  const hookRules = [
    { Rule: "Call at Top Level", Description: "Only call hooks at the top level of components, not inside loops/conditions" },
    { Rule: "Call from React Functions", Description: "Only call hooks from React components or custom hooks, not regular functions" },
    { Rule: "Order Matters", Description: "Hooks must be called in the same order every render for state mapping" },
  ];

  const renderingPhases = [
    { Phase: "Trigger", Description: "Component state/props change or initial render" },
    { Phase: "Render", Description: "React calls component function to get JSX" },
    { Phase: "Reconciliation", Description: "React compares new JSX with Virtual DOM" },
    { Phase: "Commit", Description: "React updates actual DOM with changes" },
  ];

  return (
    <div className="section4">
      <h1>State</h1>
      <p>Learn what is State and how to manage it in your React applications.</p>

      {/* What is State */}
      <section className="section-content">
        <h2>What is State?</h2>
        <p>
          State is data that can change during a component's lifetime. Unlike props which are immutable, state can be 
          updated and when it changes, React automatically re-renders the component to reflect those changes. State is 
          internal to a component and managed using the <code>useState</code> hook in functional components.
        </p>

        <h3>State vs Props</h3>
        <p>Understanding the difference between state and props is crucial for React development:</p>
        <InfoTable
          title="State vs Props Comparison"
          headers={["Aspect", "State", "Props"]}
          data={stateVsProps}
        />

        <h3>useState Hook Basics</h3>
        <p>The <code>useState</code> hook is the most common way to add state to functional components:</p>
        <CodeBlock
          title="Basic useState Example"
          code={`import { useState } from 'react';

function Counter() {
  // Declare state variable 'count' with initial value 0
  // setState function to update it
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`}
          language="typescript"
        />

        <h3>State Best Practices</h3>
        <div className="key-points">
          <h4>How to Work with State</h4>
          <ul>
            <li><strong>Immutability:</strong> Never modify state directly. Always use setter functions</li>
            <li><strong>Functional Updates:</strong> Use callback form when new state depends on previous state</li>
            <li><strong>Multiple State Variables:</strong> Create multiple useState calls for different values</li>
            <li><strong>Keep State Local:</strong> Only lift state when multiple components need it</li>
            <li><strong>Avoid Complex State Objects:</strong> Split into multiple state variables when possible</li>
          </ul>
        </div>

        <h3>Common State Patterns</h3>
        <CodeBlock
          title="State Patterns and Examples"
          code={`// 1. Simple state
const [name, setName] = useState('John');

// 2. Boolean state for toggles
const [isOpen, setIsOpen] = useState(false);

// 3. Object state
const [user, setUser] = useState({
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
});

// 4. Array state
const [items, setItems] = useState<string[]>([]);

// 5. Functional update (when new state depends on old)
setCount(prevCount => prevCount + 1);

// 6. Multiple related states
const [formData, setFormData] = useState({
  name: '',
  email: '',
  age: 0
});

// Update form data
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};`}
          language="typescript"
        />

        <h3>State Immutability</h3>
        <p>
          React relies on immutability to detect changes. Always create new objects/arrays instead of mutating existing ones:
        </p>
        <CodeBlock
          title="Immutability Examples"
          code={`// ❌ Wrong: Direct mutation
const [user, setUser] = useState({ name: 'John', age: 25 });
user.name = 'Jane'; // Don't do this!

// ✅ Correct: Spread operator to create new object
setUser({ ...user, name: 'Jane' });

// ❌ Wrong: Direct array mutation
const [items, setItems] = useState(['a', 'b', 'c']);
items.push('d'); // Don't do this!

// ✅ Correct: Create new array
setItems([...items, 'd']);
setItems(items.filter(item => item !== 'b'));

// ✅ Correct: Using map for updates
setItems(items.map(item => 
  item.id === 2 ? { ...item, name: 'Updated' } : item
));`}
          language="typescript"
        />
      </section>

      {/* What is a Hook */}
      <section className="section-content">
        <h2>What is a Hook?</h2>
        <p>
          Hooks are special functions that let you "hook into" React features. They allow you to use state and other 
          React features in functional components without writing class components. Hooks were introduced in React 16.8 
          and have become the standard way to write React components.
        </p>

        <h3>Why Hooks?</h3>
        <div className="difference-list">
          <li>
            <strong>Simpler Code:</strong> Functional components with hooks are simpler and more readable than class components
          </li>
          <li>
            <strong>Code Reusability:</strong> Extract component logic into custom hooks that can be shared across components
          </li>
          <li>
            <strong>No "this" Binding:</strong> Avoid confusion with the "this" keyword in class components
          </li>
          <li>
            <strong>Better Performance:</strong> Hooks enable better optimization through code splitting and dead code elimination
          </li>
          <li>
            <strong>Easier Testing:</strong> Hooks are just functions, making them easier to unit test
          </li>
        </div>

        <h3>Common React Hooks</h3>
        <InfoTable
          title="Essential React Hooks"
          headers={["Hook", "Purpose", "Returns"]}
          data={commonHooks}
        />

        <h3>useState in Detail</h3>
        <CodeBlock
          title="useState Hook Deep Dive"
          code={`import { useState } from 'react';

function FormExample() {
  // Basic useState
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(''); // Reset
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
      {submitted && <p>Form submitted!</p>}
    </form>
  );
}`}
          language="typescript"
        />

        <h3>useEffect Hook</h3>
        <p>
          <code>useEffect</code> handles side effects like data fetching, subscriptions, and DOM updates:
        </p>
        <CodeBlock
          title="useEffect Examples"
          code={`import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Run effect on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array = runs once on mount

  if (loading) return <p>Loading...</p>;
  return <p>{JSON.stringify(data)}</p>;
}

// Effect with dependencies
function TimerExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Cleanup runs on unmount

  return <p>Elapsed: {seconds}s</p>;
}`}
          language="typescript"
        />

        <h3>Rules of Hooks</h3>
        <div className="key-points">
          <h4>Important Hook Rules</h4>
          <ul>
            {hookRules.map((rule, idx) => (
              <li key={idx}>
                <strong>{rule.Rule}:</strong> {rule.Description}
              </li>
            ))}
          </ul>
        </div>

        <h3>Custom Hooks</h3>
        <p>
          Create your own hooks by extracting component logic into reusable functions. Custom hooks start with "use":
        </p>
        <CodeBlock
          title="Creating Custom Hooks"
          code={`// Custom hook for managing form state
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, handleChange, reset };
}

// Usage
function LoginForm() {
  const { values, handleChange, reset } = useForm({
    email: '',
    password: ''
  });

  return (
    <form>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}`}
          language="typescript"
        />
      </section>

      {/* React Rendering */}
      <section className="section-content">
        <h2>What is React Rendering?</h2>
        <p>
          React rendering is the process of converting components into DOM elements that appear on the screen. React uses 
          a sophisticated rendering system that automatically updates only the parts of the DOM that have changed, making 
          applications fast and efficient.
        </p>

        <h3>Why React is Dynamic</h3>
        <div className="key-points">
          <h4>React's Dynamic Nature</h4>
          <ul>
            <li><strong>State-Driven UI:</strong> Components automatically update when state changes</li>
            <li><strong>Real-time Updates:</strong> User interactions trigger state changes and re-renders</li>
            <li><strong>Declarative:</strong> You describe what the UI should look like, React handles the "how"</li>
            <li><strong>Automatic Synchronization:</strong> UI always stays in sync with data</li>
            <li><strong>Live Responsiveness:</strong> Immediate visual feedback to user actions</li>
          </ul>
        </div>

        <h3>React Rendering Cycle</h3>
        <InfoTable
          title="React Rendering Phases"
          headers={["Phase", "Description"]}
          data={renderingPhases}
        />

        <h3>Rendering Process Explained</h3>
        <CodeBlock
          title="Understanding the Render Cycle"
          code={`function CounterApp() {
  const [count, setCount] = useState(0);

  // This function is called during render phase
  console.log('Render phase - function called');

  useEffect(() => {
    // This runs after commit phase
    console.log('Commit phase - effect runs');
  }, [count]);

  const handleClick = () => {
    // Trigger phase: state change
    console.log('Trigger: State changed');
    setCount(count + 1);
    // React schedules a re-render
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Console output when you click button:
// Trigger: State changed
// Render phase - function called (new JSX)
// Commit phase - effect runs`}
          language="typescript"
        />

        <h3>Virtual DOM and Reconciliation</h3>
        <p>
          React uses the Virtual DOM and a process called reconciliation to efficiently update the UI:
        </p>
        <CodeBlock
          title="Virtual DOM Concept"
          code={`// Virtual DOM is a JavaScript representation of the actual DOM
// When state changes:

// 1. React creates a new Virtual DOM tree
const newVirtualDOM = {
  type: 'div',
  props: {},
  children: [
    { type: 'p', props: { children: 'Count: 1' } },
    { type: 'button', props: { onClick: handleClick } }
  ]
};

// 2. React compares (diffs) new Virtual DOM with old one
// Finds: "Count: 0" changed to "Count: 1"

// 3. React updates only the changed part in actual DOM
// Before: <p>Count: 0</p>
// After:  <p>Count: 1</p>

// Benefits:
// - Batch updates for better performance
// - Only real DOM changes are applied
// - Faster than directly manipulating DOM`}
          language="typescript"
        />

        <h3>Re-rendering Behavior</h3>
        <CodeBlock
          title="When Components Re-render"
          code={`function ParentComponent() {
  const [parentState, setParentState] = useState(0);

  return (
    <div>
      <p>Parent: {parentState}</p>
      {/* Renders when parentState changes */}
      <ChildComponent prop="value" />
    </div>
  );
}

function ChildComponent({ prop }) {
  const [childState, setChildState] = useState(0);

  // Child re-renders when:
  // 1. Parent re-renders (parent state change)
  // 2. Props change (prop={newValue})
  // 3. Child's own state changes (setChildState)

  return (
    <div>
      <p>Child state: {childState}</p>
      <p>Received prop: {prop}</p>
    </div>
  );
}

// Optimization: Prevent unnecessary re-renders
const OptimizedChild = React.memo(ChildComponent);

// Now OptimizedChild only re-renders if props actually change
// Doesn't re-render just because parent re-rendered`}
          language="typescript"
        />

        <h3>Batching and Performance</h3>
        <CodeBlock
          title="React Batching Updates"
          code={`function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // These state updates are batched into ONE re-render
    setName('John');
    setEmail('john@example.com');
    // Component only renders once, not twice!
  };

  // Async updates are NOT automatically batched in React < 18
  const handleAsyncSubmit = async () => {
    await api.saveData();
    setName('Jane'); // Separate re-render
    setEmail('jane@example.com'); // Separate re-render
  };

  // In React 18+, async updates are also automatically batched
  return <button onClick={handleSubmit}>Submit</button>;
}`}
          language="typescript"
        />

        <h3>React Rendering Flow Diagram</h3>
        <div className="rendering-flow">
          <div className="flow-box">User Interaction</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">State/Props Change (Trigger)</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Component Function Executes (Render)</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">New Virtual DOM Created</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Diff/Reconciliation</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Update Actual DOM (Commit)</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">useEffect Runs</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">UI Updates Visible</div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-content">
        <h2>Summary</h2>
        <div className="summary-box">
          <h3>Key Takeaways</h3>
          <ul>
            <li><strong>State:</strong> Internal component data that changes over time, triggering re-renders</li>
            <li><strong>useState Hook:</strong> The primary way to manage state in functional components</li>
            <li><strong>Immutability:</strong> Always create new objects/arrays when updating state, never mutate directly</li>
            <li><strong>Props vs State:</strong> Props are read-only input, state is mutable internal data</li>
            <li><strong>Hooks:</strong> Functions that let you use React features in functional components</li>
            <li><strong>Rules of Hooks:</strong> Call at top level, from React functions, in same order</li>
            <li><strong>Custom Hooks:</strong> Extract logic into reusable hooks that start with "use"</li>
            <li><strong>Rendering:</strong> Process of converting components to DOM based on state/props</li>
            <li><strong>Virtual DOM:</strong> React's efficient system for updating only changed DOM parts</li>
            <li><strong>Dynamic:</strong> React automatically keeps UI in sync with data through reactive rendering</li>
            <li><strong>Batching:</strong> Multiple state updates are combined into single re-render for performance</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section4;