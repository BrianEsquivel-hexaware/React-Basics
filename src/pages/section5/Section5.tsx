import "./Section5.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";
import FormExample from "../../components/FormExample/FormExample";

function Section5() {
  const commonEventsData = [
    { Event: "onClick", Trigger: "User clicks an element", Example: "<button onClick={handleClick}>Click me</button>" },
    { Event: "onChange", Trigger: "User changes input value", Example: "<input onChange={handleChange} />" },
    { Event: "onSubmit", Trigger: "User submits a form", Example: "<form onSubmit={handleSubmit}>" },
    { Event: "onFocus", Trigger: "Input gets focus", Example: "<input onFocus={handleFocus} />" },
    { Event: "onBlur", Trigger: "Input loses focus", Example: "<input onBlur={handleBlur} />" },
    { Event: "onMouseEnter", Trigger: "Mouse enters element", Example: "<div onMouseEnter={handleEnter}>" },
    { Event: "onKeyDown", Trigger: "User presses a key", Example: "<input onKeyDown={handleKeyDown} />" },
    { Event: "onDoubleClick", Trigger: "User double clicks", Example: "<button onDoubleClick={handleDblClick}>" },
  ];

  const mistakesData = [
    {
      Mistake: "❌ Calling function instead of passing it",
      Wrong: "onClick={handleClick()}",
      Correct: "onClick={handleClick}",
      Explanation: "Parentheses execute the function immediately, not on click"
    },
    {
      Mistake: "❌ Forgetting preventDefault() on forms",
      Wrong: "onSubmit={handleSubmit} // page refreshes",
      Correct: "onSubmit={(e) => { e.preventDefault(); ... }}",
      Explanation: "Default form behavior causes page reload"
    },
    {
      Mistake: "❌ Forgetting event parameter",
      Wrong: "onChange={handleChange} // no access to value",
      Correct: "onChange={(e) => setName(e.target.value)}",
      Explanation: "Event object contains target with the input value"
    },
    {
      Mistake: "❌ Not using synthetic events correctly",
      Wrong: "onClick={() => alert(event.target.value)}",
      Correct: "onClick={(e) => alert(e.target.value)}",
      Explanation: "React wraps events as SyntheticEvents, must pass as parameter"
    },
  ];

  return (
    <div className="section5">
      <h1>Events</h1>
      <p>Learn how to handle events in your React applications.</p>

      {/* What are Events */}
      <section className="section-content">
        <h2>What are Events?</h2>
        <p>
          Events are actions that happen in the browser when users interact with your application. Examples include clicking 
          a button, typing in an input field, hovering over an element, or submitting a form. In React, you handle events by 
          passing event handler functions to JSX elements.
        </p>

        <h3>React Event Handling Basics</h3>
        <p>React events follow a camelCase naming convention and are slightly different from HTML:</p>
        <CodeBlock
          title="HTML vs React Events"
          code={`// HTML - all lowercase
<button onclick="handleClick()">Click</button>
<input onchange="handleChange()" />

// React - camelCase, pass function reference
import { useState } from 'react';

function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input value:', e.target.value);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <input onChange={handleChange} />
    </>
  );
}`}
          language="typescript"
        />

        <h3>Common React Events</h3>
        <InfoTable
          title="Common React Events Reference"
          headers={["Event", "Trigger", "Example"]}
          data={commonEventsData}
        />
      </section>

      {/* Form Handling */}
      <section className="section-content">
        <h2>Input Form Example and Event Handling</h2>
        <p>
          Forms are one of the most common places where events are handled. In React, you control form inputs using state 
          and handle changes with the <code>onChange</code> event. When the user submits, you use <code>onSubmit</code> with 
          <code>preventDefault()</code> to stop the default page reload.
        </p>

        <h3>How to Handle Form Inputs</h3>
        <CodeBlock
          title="Form Event Handling Pattern"
          code={`import { useState } from 'react';

function ContactForm() {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Handle input change - update state
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted:', { name, email });
    // Reset form
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="your@email.com"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
          language="typescript"
        />

        <h3>Try the Interactive Form Below</h3>
        <p>Type in the inputs and submit to see events in action:</p>
        <FormExample />
      </section>

      {/* Multiple State Variables */}
      <section className="section-content">
        <h2>Multiple State Variables in Components</h2>
        <p>
          As your components become more complex, you'll often need multiple state variables. Each input field, toggle, or 
          piece of data that changes should have its own <code>useState</code> hook. This makes your component easier to 
          understand and maintain.
        </p>

        <h3>Managing Multiple States</h3>
        <div className="key-points">
          <h4>Best Practices for Multiple State Variables</h4>
          <ul>
            <li><strong>One state per piece of data:</strong> Don't combine unrelated data in one state object</li>
            <li><strong>Clear naming:</strong> Use descriptive names like setUserEmail, setFormSubmitted</li>
            <li><strong>Separate concerns:</strong> UI state (isLoading) separate from data state (userData)</li>
            <li><strong>Update independently:</strong> Each state can be updated without affecting others</li>
          </ul>
        </div>

        <CodeBlock
          title="Multiple State Variables Example"
          code={`function AdvancedForm() {
  // Separate state for each piece of data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        setError('Invalid credentials');
      } else {
        console.log('Login successful!');
        // Reset all states
        setUsername('');
        setPassword('');
        setRememberMe(false);
      }
    } catch (err) {
      setError('Connection error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Remember me
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}`}
          language="typescript"
        />
      </section>

      {/* Common Mistakes */}
      <section className="section-content">
        <h2>Common Beginner Mistakes with Events</h2>
        <p>
          Learning event handling can be tricky. Here are the most common mistakes beginners make and how to fix them:
        </p>

        <div className="mistakes-container">
          {mistakesData.map((mistake, idx) => (
            <div key={idx} className="mistake-card">
              <h4>{mistake.Mistake}</h4>
              <div className="code-comparison">
                <div className="wrong-code">
                  <span className="code-label">❌ Wrong:</span>
                  <code>{mistake.Wrong}</code>
                </div>
                <div className="correct-code">
                  <span className="code-label">✅ Correct:</span>
                  <code>{mistake.Correct}</code>
                </div>
              </div>
              <p className="explanation"><strong>Why:</strong> {mistake.Explanation}</p>
            </div>
          ))}
        </div>

        <h3>Key Tips to Remember</h3>
        <div className="difference-list">
          <li>
            <strong>Always pass the event parameter:</strong> Event handlers receive an event object as the first parameter
          </li>
          <li>
            <strong>Use e.preventDefault() on forms:</strong> Stop default browser behavior like page reload
          </li>
          <li>
            <strong>Use e.target for input values:</strong> Access the element that triggered the event
          </li>
          <li>
            <strong>Bind event handlers correctly:</strong> Don't call functions with parentheses, pass the reference
          </li>
          <li>
            <strong>Use onChange for controlled inputs:</strong> Keep input values in state, not in the DOM
          </li>
        </div>
      </section>

      {/* Summary */}
      <section className="section-content">
        <h2>Summary</h2>
        <div className="summary-box">
          <h3>Key Takeaways</h3>
          <ul>
            <li><strong>Events:</strong> User interactions like clicks, typing, and form submissions</li>
            <li><strong>camelCase:</strong> React uses camelCase for event names (onClick, onChange, onSubmit)</li>
            <li><strong>Event handlers:</strong> Pass function references, not function calls</li>
            <li><strong>Event object:</strong> Contains information about what happened (e.target, e.preventDefault)</li>
            <li><strong>Controlled inputs:</strong> Keep input values in state and update via onChange</li>
            <li><strong>Form submission:</strong> Use onSubmit with preventDefault() to handle forms properly</li>
            <li><strong>Multiple states:</strong> Create separate useState hooks for each piece of data</li>
            <li><strong>Avoid calling functions:</strong> {'onClick={handleClick} not onClick={handleClick()}'}</li>
            <li><strong>preventDefault():</strong> Stop default browser actions on forms and links</li>
            <li><strong>e.target.value:</strong> Access input values from the event object</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section5;