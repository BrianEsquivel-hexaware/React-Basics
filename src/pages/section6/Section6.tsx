import "./Section6.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";
import PokemonList from "../../components/PokemonList/PokemonList";

function Section6() {
  const conditionalMethodsData = [
    { Method: "if/else", Use: "For complex logic or multiple conditions", Example: "if (isLoading) { return <Spinner /> }" },
    { Method: "Ternary (? :)", Use: "Single if/else in JSX", Example: "{isLoading ? <Spinner /> : <Content />}" },
    { Method: "&&", Use: "Render only if condition is true", Example: "{isLoading && <Spinner />}" },
    { Method: "switch", Use: "Multiple distinct conditions", Example: "switch(status) { case 'loading': ... }" },
  ];

  const mapBestPracticesData = [
    { Practice: "Always use keys", Reason: "Helps React identify which items have changed, been added, or been removed", Impact: "High" },
    { Practice: "Use unique IDs from data", Reason: "More reliable than array index as key", Impact: "Critical" },
    { Practice: "Keep rendered items simple", Reason: "Complex items slow down rendering", Impact: "Medium" },
    { Practice: "Don't filter/sort in render", Reason: "Calculate before JSX for performance", Impact: "Medium" },
  ];

  return (
    <div className="section6">
      <h1>Lists and Conditional Rendering</h1>
      <p>Learn how to render lists and conditionally display content in your React applications.</p>

      {/* How React Re-renders */}
      <section className="section-content">
        <h2>How React Re-renders Dynamically?</h2>
        <p>
          React automatically re-renders components when their state or props change. The Virtual DOM compares the old and new 
          render output, and only updates the DOM elements that actually changed. This makes React efficient and responsive to 
          user interactions.
        </p>

        <h3>Dynamic Rendering Process</h3>
        <CodeBlock
          title="Understanding Re-rendering"
          code={`function DynamicList() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  // Component re-renders when state changes
  const addItem = () => {
    setItems([...items, \`Item \${count + 1}\`]);
    setCount(count + 1);
  };

  // Every time addItem is called:
  // 1. State updates
  // 2. Component re-renders
  // 3. Virtual DOM updates
  // 4. Only new items appear in real DOM

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </div>
  );
}`}
          language="typescript"
        />
      </section>

      {/* Rendering Lists with map() */}
      <section className="section-content">
        <h2>Rendering Lists with map()</h2>
        <p>
          The <code>map()</code> function transforms an array into a new array of JSX elements. It's the React-recommended way 
          to render lists because it's clean, functional, and pairs well with component design.
        </p>

        <h3>Basic list rendering</h3>
        <CodeBlock
          title="Using map() to render lists"
          code={`function ShoppingList() {
  const items = ['Milk', 'Bread', 'Eggs', 'Butter'];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function UserCards() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} />
      ))}
    </div>
  );
}`}
          language="typescript"
        />
      </section>

      {/* The Key Prop */}
      <section className="section-content">
        <h2>The "key" Prop</h2>
        <p>
          The <code>key</code> prop helps React identify which items have changed, been added, or removed. Keys should be unique 
          and stable identifiers. Never use array indexes as keys if the list can be filtered, sorted, or modified.
        </p>

        <h3>Why Keys Matter</h3>
        <div className="key-points">
          <h4>Key Benefits</h4>
          <ul>
            <li><strong>Maintains component state:</strong> React keeps input values in correct items during re-renders</li>
            <li><strong>Improves performance:</strong> React efficiently updates only changed items</li>
            <li><strong>Prevents bugs:</strong> Incorrect keys can cause state to be mixed up between items</li>
            <li><strong>Enables animations:</strong> React can properly animate added/removed items</li>
          </ul>
        </div>

        <CodeBlock
          title="Keys: Good vs Bad"
          code={`// ❌ BAD: Using array index as key
const items = ['Apple', 'Banana', 'Cherry'];
{items.map((item, index) => (
  <li key={index}>{item}</li> // Bad if list changes!
))}

// ✅ GOOD: Using unique ID from data
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
];
{items.map((item) => (
  <li key={item.id}>{item.name}</li> // Correct!
))}

// When user deletes an item:
// ❌ With index keys: Wrong items show wrong values
// ✅ With ID keys: Correct items maintain correct values`}
          language="typescript"
        />

        <InfoTable
          title="List Rendering Best Practices"
          headers={["Practice", "Reason", "Impact"]}
          data={mapBestPracticesData}
        />
      </section>

      {/* Conditional Rendering */}
      <section className="section-content">
        <h2>Conditional Rendering</h2>
        <p>
          Conditional rendering means showing or hiding components based on conditions. React provides several ways to handle 
          this, each suited for different situations.
        </p>

        <h3>Conditional Rendering Methods</h3>
        <InfoTable
          title="Conditional Rendering Techniques"
          headers={["Method", "Use Case", "Example"]}
          data={conditionalMethodsData}
        />

        <CodeBlock
          title="Conditional Rendering Patterns"
          code={`function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Method 1: if/else (in function, not JSX)
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Method 2: Ternary operator */}
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in</p>
      )}

      {/* Method 3: && operator (only if true) */}
      {isLoggedIn && (
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      )}
    </div>
  );
}`}
          language="typescript"
        />
      </section>

      {/* Rendering Components Dynamically */}
      <section className="section-content">
        <h2>Rendering Components Dynamically with map()</h2>
        <p>
          You can map over arrays and render different components for each item. This is powerful for displaying dynamic lists of 
          data, like products, users, or posts.
        </p>

        <CodeBlock
          title="Rendering Components from Data"
          code={`function ProductGrid() {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 },
    { id: 3, name: 'Tablet', price: 399 }
  ];

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

function ProductCard({ name, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>\${price}</p>
      <button>Add to cart</button>
    </div>
  );
}`}
          language="typescript"
        />

        <h3>Try the Interactive Pokémon List</h3>
        <p>
          This example loads data from the Pokémon API and renders a list of components dynamically. It also demonstrates 
          loading states and error handling:
        </p>
        <PokemonList />
      </section>

      {/* Empty and Loading States */}
      <section className="section-content">
        <h2>Empty States and Loading States</h2>
        <p>
          Users should never see a blank page and wonder if the app is broken. Always show loading indicators while fetching data 
          and meaningful messages when there's no data to display.
        </p>

        <h3>Complete State Management Pattern</h3>
        <CodeBlock
          title="Handling Empty, Loading, and Error States"
          code={`function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to load');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Loading state - show spinner
  if (loading) {
    return <div className="spinner"></div>;
  }

  // Error state - show message
  if (error) {
    return <p className="error">⚠️ {error}</p>;
  }

  // Empty state - no data
  if (users.length === 0) {
    return <p>No users found. Create one to get started!</p>;
  }

  // Success state - render data
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
          language="typescript"
        />

        <div className="key-points">
          <h4>Best Practices for States</h4>
          <ul>
            <li><strong>Loading state:</strong> Show spinner or skeleton while fetching data</li>
            <li><strong>Error state:</strong> Display clear error message with option to retry</li>
            <li><strong>Empty state:</strong> Show helpful message, not blank screen</li>
            <li><strong>Success state:</strong> Only show when data is ready to display</li>
          </ul>
        </div>
      </section>

      {/* Summary */}
      <section className="section-content">
        <h2>Summary</h2>
        <div className="summary-box">
          <h3>Key Takeaways</h3>
          <ul>
            <li><strong>map():</strong> Transform arrays into arrays of JSX elements</li>
            <li><strong>Keys:</strong> Help React identify items in lists - always use unique IDs</li>
            <li><strong>Never use index as key:</strong> Causes bugs when lists change</li>
            <li><strong>Conditional rendering:</strong> Show/hide content based on conditions</li>
            <li><strong>Ternary:</strong> Use for simple true/false logic</li>
            <li><strong>&&:</strong> Use to render only when condition is true</li>
            <li><strong>if/else:</strong> Use outside JSX for complex logic</li>
            <li><strong>Loading states:</strong> Always show spinners during data fetch</li>
            <li><strong>Error states:</strong> Display clear error messages to users</li>
            <li><strong>Empty states:</strong> Never show blank screens - provide helpful messages</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section6;