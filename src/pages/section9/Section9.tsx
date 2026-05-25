import "./Section9.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";

function Section9() {
  const stylingMethodsData = [
    { Method: "Inline Styles", Pros: "Quick, scoped to component", Cons: "Not reusable, hard to maintain" },
    { Method: "Traditional CSS", Pros: "Powerful, familiar", Cons: "Global scope, name conflicts" },
    { Method: "CSS Modules", Pros: "Scoped, reusable, no conflicts", Cons: "Setup required" },
    { Method: "Bootstrap", Pros: "Ready-made, responsive, fast", Cons: "Less custom" },
  ];

  const bootstrapClassesData = [
    { Component: "Grid System", Classes: "container, row, col-md-6", Purpose: "Responsive layout" },
    { Component: "Buttons", Classes: "btn, btn-primary, btn-lg", Purpose: "Styled buttons" },
    { Component: "Cards", Classes: "card, card-body, card-title", Purpose: "Content containers" },
    { Component: "Colors", Classes: "text-primary, bg-danger, border-success", Purpose: "Color utilities" },
    { Component: "Spacing", Classes: "m-3, p-2, gap-2", Purpose: "Margin and padding" },
    { Component: "Text", Classes: "text-center, fw-bold, fs-4", Purpose: "Text styling" },
  ];

  const commonMistakesData = [
    {
      Mistake: "❌ Using camelCase in CSS files",
      Problem: "CSS syntax is wrong (should be kebab-case)",
      Solution: "Use kebab-case in .css files: background-color, not backgroundColor"
    },
    {
      Mistake: "❌ Inline styles not working",
      Problem: "Forgot to use object with camelCase keys",
      Solution: "style={{ backgroundColor: 'red' }} not style='background-color: red'"
    },
    {
      Mistake: "❌ CSS class conflicts",
      Problem: "Multiple .button classes override each other",
      Solution: "Use CSS Modules or BEM naming convention"
    },
    {
      Mistake: "❌ Not responsive",
      Problem: "App looks bad on mobile",
      Solution: "Use Bootstrap grid or CSS media queries"
    },
    {
      Mistake: "❌ Over-using inline styles",
      Problem: "JSX becomes messy and hard to maintain",
      Solution: "Keep inline styles minimal, use CSS files"
    },
  ];

  return (
    <div className="section9">
      <h1>Styling</h1>
      <p>Learn how to style your React components and pages using CSS, Bootstrap, and other styling techniques.</p>

      {/* Why Styling is Important */}
      <section className="section-content">
        <h2>Why is Styling Important?</h2>
        <p>
          Styling is what makes your application look professional and user-friendly. Good styling improves user experience, creates 
          visual hierarchy, communicates brand identity, and makes your app accessible. In React, there are multiple ways to apply styles, 
          each with different use cases.
        </p>

        <div className="key-points">
          <h4>Styling Benefits</h4>
          <ul>
            <li><strong>User Experience:</strong> Good design makes apps easy and pleasant to use</li>
            <li><strong>Visual Hierarchy:</strong> Styling guides users attention to important elements</li>
            <li><strong>Brand Identity:</strong> Consistent colors and fonts reinforce your brand</li>
            <li><strong>Accessibility:</strong> Good contrast and spacing help all users</li>
            <li><strong>Responsiveness:</strong> Styling adapts your app to different screen sizes</li>
          </ul>
        </div>
      </section>

      {/* Traditional CSS */}
      <section className="section-content">
        <h2>Traditional CSS</h2>
        <p>
          The most straightforward way to style React components is with external CSS files. Write styles in .css files and import them 
          in your components. This is the most common and recommended approach for production apps.
        </p>

        <CodeBlock
          title="Traditional CSS Approach"
          code={`// styles/Button.css
.button {
  padding: 10px 20px;
  background-color: #0969da;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0860ca;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button-large {
  padding: 15px 30px;
  font-size: 18px;
}

// Button.tsx
import './styles/Button.css';

function Button({ children, disabled, large }) {
  return (
    <button 
      className={\`button \${large ? 'button-large' : ''}\`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// Usage
<Button>Click me</Button>
<Button large>Large button</Button>
<Button disabled>Disabled</Button>`}
          language="typescript"
        />

        <div className="key-points">
          <h4>Traditional CSS Best Practices</h4>
          <ul>
            <li><strong>One file per component:</strong> Component.tsx + Component.css</li>
            <li><strong>Naming convention:</strong> Use kebab-case (.button-large)</li>
            <li><strong>Organize files:</strong> Group related styles together</li>
            <li><strong>Use variables:</strong> Colors, sizes, spacing for consistency</li>
          </ul>
        </div>
      </section>

      {/* Inline Styles in JSX */}
      <section className="section-content">
        <h2>Inline Styles in JSX</h2>
        <p>
          Inline styles are JavaScript objects passed to the style prop. Use camelCase for CSS properties and provide values as strings. 
          Inline styles are useful for dynamic styles but shouldn't replace CSS files for large projects.
        </p>

        <CodeBlock
          title="Inline Styles in React"
          code={`// Basic inline styles
function Card() {
  const cardStyle = {
    backgroundColor: '#11152b',
    border: '1px solid #262d3d',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '10px'
  };

  return <div style={cardStyle}>My Card</div>;
}

// Inline styles with variables
function Button() {
  const isActive = true;
  
  const buttonStyle = {
    backgroundColor: isActive ? '#238636' : '#999',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease'
  };

  return <button style={buttonStyle}>Click me</button>;
}

// IMPORTANT: CSS properties use camelCase
// background-color  →  backgroundColor
// border-radius  →  borderRadius
// margin-top  →  marginTop
// font-size  →  fontSize`}
          language="typescript"
        />
      </section>

      {/* Dynamic Styling and Classes */}
      <section className="section-content">
        <h2>Dynamic Styling and Classes</h2>
        <p>
          Apply classes conditionally based on component state and props. This is the most common pattern for styling components that 
          change based on user interaction.
        </p>

        <CodeBlock
          title="Dynamic Classes Based on State"
          code={`// Component.css
.button { padding: 10px 20px; background: #0969da; }
.button.active { background: #238636; }
.button.disabled { opacity: 0.5; }
.button.large { font-size: 18px; }

// Dynamic.tsx
import { useState } from 'react';
import './Component.css';

function DynamicButton() {
  const [isActive, setIsActive] = useState(false);
  const [size, setSize] = useState('normal');

  // Method 1: Template literals
  const className = \`button \${isActive ? 'active' : ''} \${size === 'large' ? 'large' : ''}\`;

  // Method 2: Array.join()
  const classArray = [
    'button',
    isActive && 'active',
    size === 'large' && 'large'
  ].filter(Boolean).join(' ');

  // Method 3: Conditional operators
  const finalClass = isActive 
    ? 'button active' 
    : 'button';

  return (
    <button className={className} onClick={() => setIsActive(!isActive)}>
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
}

// Using classnames library (external package)
import classNames from 'classnames';

function BetterButton() {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button className={classNames('button', { active: isActive })}>
      Click
    </button>
  );
}`}
          language="typescript"
        />
      </section>

      {/* CSS Modules */}
      <section className="section-content">
        <h2>CSS Modules</h2>
        <p>
          CSS Modules are scoped CSS files that prevent naming conflicts. Each CSS class is local to its component by default. This makes 
          your styles modular and reusable without worrying about global conflicts.
        </p>

        <CodeBlock
          title="CSS Modules Approach"
          code={`// Button.module.css
.button {
  padding: 10px 20px;
  background-color: #0969da;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.button:hover {
  background-color: #0860ca;
}

.button--large {
  padding: 15px 30px;
  font-size: 18px;
}

// Button.tsx
import styles from './Button.module.css';

function Button({ children, large }) {
  return (
    <button 
      className={\`\${styles.button} \${large ? styles['button--large'] : ''}\`}
    >
      {children}
    </button>
  );
}

// Benefits:
// - No global namespace pollution
// - Styles are scoped to component
// - Clear what styles are used
// - Easy to remove unused styles
// - Works with any naming convention

// Note: Class names become imported objects
// .button  →  styles.button
// .button--large  →  styles['button--large']
// .is-active  →  styles.isActive (converted to camelCase)`}
          language="typescript"
        />
      </section>

      {/* Bootstrap Styling */}
      <section className="section-content">
        <h2>Bootstrap and Bootstrap Default Classes</h2>
        <p>
          Bootstrap is a popular CSS framework with pre-built components and utility classes. It's already installed in this project. 
          Use Bootstrap classes for quick styling and responsive layouts without writing CSS.
        </p>

        <h3>Common Bootstrap Classes</h3>
        <InfoTable
          title="Bootstrap Components and Classes"
          headers={["Component", "Classes", "Purpose"]}
          data={bootstrapClassesData}
        />

        <CodeBlock
          title="Bootstrap Usage Examples"
          code={`import 'bootstrap/dist/css/bootstrap.min.css';

// Responsive Grid Layout
function Layout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">Column 1</div>
        <div className="col-md-6 col-lg-4">Column 2</div>
        <div className="col-md-6 col-lg-4">Column 3</div>
      </div>
    </div>
  );
}

// Bootstrap Buttons
function Buttons() {
  return (
    <div>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-danger">Danger</button>
      <button className="btn btn-lg">Large</button>
      <button className="btn" disabled>Disabled</button>
    </div>
  );
}

// Bootstrap Card
function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Card content here</p>
        <a href="#" className="btn btn-primary">Go</a>
      </div>
    </div>
  );
}

// Bootstrap Utilities
function Utilities() {
  return (
    <div>
      <p className="text-center text-primary fw-bold">Centered bold primary text</p>
      <div className="bg-danger text-white p-3 m-2">Red background, white text, padding and margin</div>
      <div className="d-flex justify-content-between align-items-center">
        <span>Left</span>
        <span>Center</span>
        <span>Right</span>
      </div>
    </div>
  );
}`}
          language="typescript"
        />
      </section>

      {/* Styling Methods Comparison */}
      <section className="section-content">
        <h2>Styling Methods Comparison</h2>
        <p>
          Each styling method has pros and cons. Choose based on your project needs:
        </p>
        <InfoTable
          title="Styling Methods Overview"
          headers={["Method", "Pros", "Cons"]}
          data={stylingMethodsData}
        />
      </section>

      {/* Best Practices */}
      <section className="section-content">
        <h2>Good Styling Practices</h2>
        <p>
          Follow these practices to keep your styling clean and maintainable:
        </p>

        <div className="key-points">
          <h4>Styling Best Practices</h4>
          <ul>
            <li><strong>One CSS file per component:</strong> Component.tsx + Component.css (co-located)</li>
            <li><strong>Use consistent naming:</strong> kebab-case for CSS classes</li>
            <li><strong>Avoid inline styles:</strong> Keep them minimal and use CSS files</li>
            <li><strong>Use CSS variables:</strong> Define colors and sizes once, reuse everywhere</li>
            <li><strong>Mobile-first:</strong> Design for mobile first, then add larger screen styles</li>
            <li><strong>Keep it responsive:</strong> Use Bootstrap grid or media queries</li>
            <li><strong>Reuse classes:</strong> Create utility classes for common patterns</li>
            <li><strong>Performance:</strong> Minimize CSS file size, avoid unused styles</li>
            <li><strong>Accessibility:</strong> Ensure sufficient color contrast and readable text</li>
          </ul>
        </div>

        <CodeBlock
          title="CSS Best Practices Example"
          code={`// colors.css - Define variables once
:root {
  --primary: #0969da;
  --secondary: #6e7681;
  --danger: #da3633;
  --success: #238636;
  --background: #11152b;
  --text: #c5d0db;
  --border: #262d3d;
}

// Component.css - Reuse variables
.card {
  background: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
}

.card.success {
  border-color: var(--success);
}

/* Mobile-first: start small, add complexity */
.container {
  padding: 1rem;  /* Mobile default */
}

/* Add media query for larger screens */
@media (min-width: 768px) {
  .container {
    padding: 2rem;  /* Tablet and up */
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 3rem;  /* Desktop */
  }
}`}
          language="typescript"
        />
      </section>

      {/* Common Beginner Mistakes */}
      <section className="section-content">
        <h2>Common Beginner Mistakes with Styling</h2>
        <p>
          Here are the most common styling mistakes beginners make:
        </p>

        <div className="mistakes-grid">
          {commonMistakesData.map((mistake, idx) => (
            <div key={idx} className="mistake-card">
              <h4>{mistake.Mistake}</h4>
              <div className="mistake-content">
                <p><strong>Problem:</strong> {mistake.Problem}</p>
                <p><strong>Solution:</strong> {mistake.Solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="section-content">
        <h2>Summary</h2>
        <div className="summary-box">
          <h3>Key Takeaways</h3>
          <ul>
            <li><strong>Styling matters:</strong> Good design improves user experience</li>
            <li><strong>Traditional CSS:</strong> Most common, organize with one file per component</li>
            <li><strong>Inline styles:</strong> Use for dynamic styles, write as JavaScript objects</li>
            <li><strong>camelCase:</strong> In JavaScript objects, use camelCase (backgroundColor)</li>
            <li><strong>kebab-case:</strong> In CSS files, use kebab-case (background-color)</li>
            <li><strong>Dynamic classes:</strong> Use template literals or classnames library</li>
            <li><strong>CSS Modules:</strong> Scope styles to components, avoid conflicts</li>
            <li><strong>Bootstrap:</strong> Pre-built components for rapid development</li>
            <li><strong>Bootstrap grid:</strong> Use container, row, col-* for responsive layouts</li>
            <li><strong>CSS variables:</strong> Define once, reuse everywhere for consistency</li>
            <li><strong>Mobile-first:</strong> Design for mobile, then enhance for larger screens</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section9;