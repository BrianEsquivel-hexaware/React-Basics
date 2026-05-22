import "./Section1.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";

function Section1() {
  const reactCompanies = [
    'Facebook',
    'Netflix',
    'Uber',
    'Instagram',
    'Airbnb',
    'Spotify',
    'Discord',
    'Dropbox',
    'Slack',
    'Pinterest',
  ];

  const htmlTagsData = [
    { Tag: '<h1> - <h6>', Purpose: 'Headings (h1 is largest, h6 is smallest)', 'Common Attributes': 'class, id, style' },
    { Tag: '<p>', Purpose: 'Paragraph of text', 'Common Attributes': 'class, id, style' },
    { Tag: '<a>', Purpose: 'Hyperlink to other pages', 'Common Attributes': 'href, target, class' },
    { Tag: '<button>', Purpose: 'Clickable button element', 'Common Attributes': 'onclick, type, class, disabled' },
    { Tag: '<div>', Purpose: 'Generic container for grouping content', 'Common Attributes': 'class, id, style' },
    { Tag: '<span>', Purpose: 'Inline container for text', 'Common Attributes': 'class, id, style' },
    { Tag: '<img>', Purpose: 'Display images', 'Common Attributes': 'src, alt, width, height' },
    { Tag: '<ul> / <li>', Purpose: 'Unordered list with list items', 'Common Attributes': 'class, id, style' },
    { Tag: '<form>', Purpose: 'Container for user input elements', 'Common Attributes': 'action, method, onsubmit' },
    { Tag: '<input>', Purpose: 'User input field (text, email, password, etc)', 'Common Attributes': 'type, name, placeholder, required' },
  ];

  const cssPropertiesData = [
    { Property: 'color', Purpose: 'Text color', Example: 'color: #FF5733;' },
    { Property: 'background-color', Purpose: 'Background color of element', Example: 'background-color: blue;' },
    { Property: 'font-size', Purpose: 'Size of text', Example: 'font-size: 16px;' },
    { Property: 'font-weight', Purpose: 'Boldness of text (100-900)', Example: 'font-weight: bold;' },
    { Property: 'margin', Purpose: 'Space outside element', Example: 'margin: 10px 20px;' },
    { Property: 'padding', Purpose: 'Space inside element', Example: 'padding: 15px;' },
    { Property: 'border', Purpose: 'Border around element', Example: 'border: 2px solid black;' },
    { Property: 'width / height', Purpose: 'Element dimensions', Example: 'width: 100%; height: 50px;' },
    { Property: 'display', Purpose: 'How element is rendered (block, inline, flex)', Example: 'display: flex;' },
    { Property: 'transition', Purpose: 'Smooth animations on property changes', Example: 'transition: all 0.3s ease;' },
  ];

  return (
    <div>
      <div className="section1">
        <h1>React Fundamentals</h1>
        <p>Master the core concepts and foundations of React development.</p>

        {/* What is React? */}
        <div className="section-content mt-4">
          <h2>What is React?</h2>
          <p>
            React is a JavaScript library for building user interfaces with reusable components. Created by Facebook in 2011, 
            React allows developers to create dynamic, interactive web applications that efficiently update and render changes 
            to the DOM (Document Object Model).
          </p>
          <div className="key-points">
            <h4>Key Features of React:</h4>
            <ul>
              <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state</li>
              <li><strong>Declarative:</strong> Design simple views for each state in your application</li>
              <li><strong>Learn Once, Write Anywhere:</strong> Develop new features without rewriting existing code</li>
              <li><strong>Virtual DOM:</strong> React uses a virtual representation for optimal performance</li>
              <li><strong>Unidirectional Data Flow:</strong> One-way data binding for more stable applications</li>
            </ul>
          </div>
        </div>

        {/* Companies Using React */}
        <div className="section-content mt-4">
          <h2>Companies Using React</h2>
          <p>React is used by some of the world's largest and most innovative companies:</p>
          <div className="companies-grid">
            {reactCompanies.map((company, index) => (
              <div key={index} className="company-badge">
                <i className="bi bi-check-circle-fill"></i>
                <span>{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Required Installations */}
        <div className="section-content mt-4">
          <h2>Required Installations</h2>
          <p>Before you start learning React, you need to install the following tools:</p>
          
          <div className="installation-item">
            <h4><i className="bi bi-box-seam"></i> Node.js</h4>
            <p>
              Node.js is a JavaScript runtime that allows you to run JavaScript outside the browser. It comes with npm (Node Package Manager), 
              which is essential for managing project dependencies and running scripts.
            </p>
            <p><strong>How to install:</strong></p>
            <ul>
              <li>Visit <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
              <li>Download the LTS (Long Term Support) version</li>
              <li>Follow the installation wizard</li>
              <li>Verify installation by running: <code>node --version</code> and <code>npm --version</code></li>
            </ul>
          </div>

          <div className="installation-item">
            <h4><i className="bi bi-code-square"></i> Visual Studio Code (VS Code)</h4>
            <p>
              VS Code is a lightweight, powerful code editor built by Microsoft. It's perfect for React development with excellent 
              extension support and integrated terminal.
            </p>
            <p><strong>How to install:</strong></p>
            <ul>
              <li>Visit <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a></li>
              <li>Download for your operating system (Windows, macOS, or Linux)</li>
              <li>Follow the installation instructions</li>
              <li>Install useful extensions: ES7+ React/Redux/React-Native snippets, Prettier, ESLint</li>
            </ul>
          </div>
        </div>

        {/* HTML Section */}
        <div className="section-content mt-4">
          <h2>Understanding HTML</h2>
          <p>
            HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure 
            and content of websites using a system of tags and elements.
          </p>

          <h3>What is HTML?</h3>
          <p>
            HTML is not a programming language—it's a markup language. It uses tags (keywords surrounded by angle brackets) to tell 
            web browsers how to display content. Every HTML document follows a specific structure with opening and closing tags.
          </p>

          <div className="comparison-box">
            <CodeBlock
                title="Basic HTML Structure"
                language="HTML"
                code={`
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Web Page</title>
        </head>
        <body>
            <h1>Welcome to My Page</h1>
            <p>This is a paragraph of text.</p>
        </body>
    </html>`}
            />
          </div>

          <h3>Common HTML Tags and Their Attributes</h3>
          <InfoTable
            title="HTML Tags Reference"
            headers={['Tag', 'Purpose', 'Common Attributes']}
            data={htmlTagsData}
          />

          <h3>Understanding HTML Attributes</h3>
          <p>Attributes provide additional information about HTML elements. They are always specified in the opening tag.</p>
          <div className="comparison-box">
            <CodeBlock
                title="HTML Attributes Examples"
                language="HTML"
                code={`
<!-- Anchor tag with href and target attributes -->
<a href="https://www.example.com" target="_blank">Click here</a>

<!-- Image tag with src and alt attributes -->
<img src="image.jpg" alt="Description of image" width="200" height="150" />

<!-- Input tag with type, name, and placeholder attributes -->
<input type="email" name="user-email" placeholder="Enter your email" />

<!-- Div with class and id attributes -->
<div class="container" id="main-content">Content here</div>`}
            />
          </div>

          <h3>Most Important HTML Attributes</h3>
          <ul className="attribute-list">
            <li><strong>class:</strong> Specifies one or more CSS classes for styling (can be used multiple times)</li>
            <li><strong>id:</strong> Specifies a unique identifier for an element (should be unique within the page)</li>
            <li><strong>style:</strong> Specifies inline CSS styles directly on the element</li>
            <li><strong>href:</strong> Specifies the URL for links (&lt;a&gt; tags)</li>
            <li><strong>src:</strong> Specifies the source of images, scripts, or other media</li>
            <li><strong>alt:</strong> Provides alternative text for images (important for accessibility)</li>
            <li><strong>placeholder:</strong> Shows hint text inside input fields</li>
            <li><strong>type:</strong> Specifies the type of input (text, email, password, checkbox, etc.)</li>
            <li><strong>disabled:</strong> Disables an element so users cannot interact with it</li>
            <li><strong>required:</strong> Specifies that an input field must be filled before form submission</li>
          </ul>
        </div>

        {/* CSS Section */}
        <div className="section-content mt-4">
          <h2>Understanding CSS</h2>
          <p>
            CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and 
            spacing of content, split it into multiple columns, or add animations and other decorative features.
          </p>

          <h3>What is CSS?</h3>
          <p>
            CSS works alongside HTML to control the visual presentation of web pages. While HTML provides the structure and content, 
            CSS handles how that content looks. CSS uses a selector and declaration block system, where you select an element and 
            apply style properties to it.
          </p>

          <div className="comparison-box">
            <CodeBlock
                title="Basic CSS Syntax"
                language="CSS"
                code={`
/* This is a CSS comment */
selector {
    property: value;
    another-property: value;
}

/* Example: styling a paragraph */
p {
    color: blue;
    font-size: 16px;
    margin: 10px;
}`}
            />
          </div>

          <h3>Most Common CSS Properties</h3>
          <InfoTable
            title="CSS Properties Reference"
            headers={['Property', 'Purpose', 'Example']}
            data={cssPropertiesData}
          />

          <h3>Understanding CSS Classes</h3>
          <p>
            CSS classes are reusable selectors that you apply to HTML elements. A single element can have multiple classes, 
            and multiple elements can share the same class. Classes are defined with a dot (.) before their name.
          </p>

          <div className="comparison-box">
            <CodeBlock
                title="CSS Classes Example"
                language="CSS"
                code={`
/* Define a CSS class */
.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

/* Another class for styling containers */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Combine classes for more specific styling */
.button.large {
    padding: 15px 30px;
    font-size: 18px;
}

.button.danger {
    background-color: #dc3545;
}`}
            />
          </div>

          <div className="comparison-box">
          <CodeBlock
            title="Using CSS Classes in HTML"
            language="HTML"
            code={`
<!-- Single class -->
<button class="button">Click me</button>

<!-- Multiple classes on one element -->
<button class="button large">Large Button</button>

<button class="button danger">Delete</button>

<!-- Using classes in container -->
<div class="container">
    <h1>Welcome</h1>
    <p>This content is inside a styled container</p>
</div>`}
          />
          </div>

          <h3>Importing CSS in HTML vs React</h3>
            <div className="comparison-box">
              <h4>In Regular HTML:</h4>
              <CodeBlock
                title="HTML - Link CSS in the head"
                language="HTML"
                code={`
<!DOCTYPE html>
    <html>
        <head>
            <!-- External CSS file -->
            <link rel="stylesheet" href="styles.css" />
            
            <!-- Or inline CSS -->
            <style>
            p { color: blue; }
            </style>
        </head>
        <body>
            <p>This paragraph is styled</p>
        </body>
    </html>`}
                />
            </div>

            <div className="comparison-box">
              <h4>In React:</h4>
              <CodeBlock
                title="React - Import CSS in components"
                language="JavaScript"
                code={`
// Method 1: Import CSS file
import './MyComponent.css';

function MyComponent() {
    return <p>This paragraph is styled</p>;
}

// Method 2: Inline styles using JavaScript object
function MyComponent2() {
    const styles = {
        paragraph: {
        color: 'blue',
        fontSize: '16px',
        margin: '10px'
        }
    };
    return <p style={styles.paragraph}>Styled text</p>;
}

// Method 3: Bootstrap classes (what we use in this course)
function MyComponent3() {
    return <p className="text-primary">Styled with Bootstrap</p>;
}`}
                />
            </div>

          <h3>Key Differences Between HTML/CSS and React CSS Importing</h3>
          <ul className="difference-list">
            <li>
              <strong>Scope:</strong> In React, CSS is typically scoped to components by importing it within the component file, 
              preventing style conflicts across your application
            </li>
            <li>
              <strong>Dynamic Styling:</strong> React allows you to apply styles conditionally using JavaScript logic, 
              which isn't possible with static HTML/CSS
            </li>
            <li>
              <strong>Class Names:</strong> In React, use the <code>className</code> attribute (not <code>class</code>) 
              because <code>class</code> is a reserved word in JavaScript
            </li>
            <li>
              <strong>CSS Frameworks:</strong> React works seamlessly with CSS frameworks like Bootstrap, Tailwind, and Material-UI
            </li>
            <li>
              <strong>CSS Modules:</strong> React projects often use CSS Modules to automatically scope CSS and prevent naming conflicts
            </li>
          </ul>

          <div className="comparison-box">
            <CodeBlock
                title="React className Example"
                language="JavaScript"
                code={`
import './Button.css';

function Button({ isActive, size }) {
    return (
        // In React, use className instead of class
        <button className={\`button \${isActive ? 'active' : ''} \${size}\`}>
            Click Me
        </button>
    );
}

export default Button;`}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="section-content mt-4 summary-box">
          <h2>Summary: What You've Learned</h2>
          <ul>
            <li><strong>What React is:</strong> A JavaScript library for building interactive user interfaces with components</li>
            <li><strong>Why companies use React:</strong> It's efficient, scalable, and maintains large applications easily</li>
            <li><strong>Prerequisites:</strong> Install Node.js and VS Code to get started</li>
            <li><strong>HTML Basics:</strong> HTML provides structure using tags, elements, and attributes</li>
            <li><strong>CSS Basics:</strong> CSS styles HTML elements using properties, classes, and selectors</li>
            <li><strong>React Integration:</strong> React imports CSS within components and uses <code>className</code> instead of <code>class</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section1;