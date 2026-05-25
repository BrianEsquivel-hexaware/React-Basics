import "./Section7.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";
import APIDemo from "../../components/APIDemo/APIDemo";

function Section7() {
  const frontendVsBackendData = [
    { Aspect: "Location", Frontend: "Browser (user's computer)", Backend: "Server (cloud/data center)" },
    { Aspect: "Language", Frontend: "HTML, CSS, JavaScript, React", Backend: "Node.js, Python, Java, etc." },
    { Aspect: "Purpose", Frontend: "User interface & interaction", Backend: "Business logic & data storage" },
    { Aspect: "Database Access", Frontend: "No direct access", Backend: "Direct access to databases" },
    { Aspect: "Visibility", Frontend: "User can see code", Backend: "Code is hidden from users" },
  ];

  const fetchMethodsData = [
    { Method: "GET", Purpose: "Retrieve data from server", Example: "Fetch a list of posts" },
    { Method: "POST", Purpose: "Send data to server", Example: "Create a new user" },
    { Method: "PUT", Purpose: "Update existing data", Example: "Modify a user's profile" },
    { Method: "DELETE", Purpose: "Remove data from server", Example: "Delete a post" },
  ];

  const commonMistakesData = [
    {
      Mistake: "❌ Not handling loading state",
      Problem: "Page looks broken while fetching",
      Solution: "Show spinner/loading indicator"
    },
    {
      Mistake: "❌ Forgetting error handling",
      Problem: "App crashes on network errors",
      Solution: "Use try/catch and display error messages"
    },
    {
      Mistake: "❌ Not typing API response",
      Problem: "No autocomplete, hard to debug",
      Solution: "Create interfaces for API data"
    },
    {
      Mistake: "❌ Fetching in wrong place",
      Problem: "Infinite loops or data not updated",
      Solution: "Use useEffect with dependency array"
    },
    {
      Mistake: "❌ Missing dependency array",
      Problem: "API called on every render",
      Solution: "Always provide dependency array"
    },
  ];

  return (
    <div className="section7">
      <h1>API Consumption</h1>
      <p>Learn how to fetch and display data from REST APIs in your React applications.</p>

      {/* What is an API */}
      <section className="section-content">
        <h2>What is an API?</h2>
        <p>
          An API (Application Programming Interface) is a way for two applications to communicate with each other. 
          In web development, APIs let your frontend (React app) request data from a backend server. APIs use URLs and HTTP 
          methods to send/receive data in formats like JSON.
        </p>

        <h3>API Basics</h3>
        <div className="key-points">
          <h4>Key API Concepts</h4>
          <ul>
            <li><strong>Endpoint:</strong> A URL where the API lives (e.g., https://api.example.com/users)</li>
            <li><strong>Request:</strong> Data sent from frontend to backend asking for something</li>
            <li><strong>Response:</strong> Data sent back from backend to frontend with the answer</li>
            <li><strong>JSON:</strong> Standard format for API data (JavaScript Object Notation)</li>
            <li><strong>HTTP Methods:</strong> GET (read), POST (create), PUT (update), DELETE (remove)</li>
          </ul>
        </div>

        <CodeBlock
          title="Simple API Example"
          code={`// API Call Structure
GET /api/users  →  Returns list of all users
GET /api/users/1  →  Returns user with ID 1
POST /api/users  →  Creates a new user
PUT /api/users/1  →  Updates user with ID 1
DELETE /api/users/1  →  Deletes user with ID 1

// Real API Example
https://jsonplaceholder.typicode.com/posts
// This returns a list of posts as JSON

// Response Example
[
  {
    "id": 1,
    "title": "First Post",
    "body": "This is the content",
    "userId": 1
  },
  {
    "id": 2,
    "title": "Second Post",
    "body": "More content here",
    "userId": 2
  }
]`}
          language="typescript"
        />
      </section>

      {/* Frontend vs Backend */}
      <section className="section-content">
        <h2>Frontend vs Backend: Principal Differences</h2>
        <p>
          Understanding the difference between frontend and backend is crucial for API consumption. Your React app (frontend) 
          runs in the browser and needs to communicate with a backend server to access data and perform operations.
        </p>

        <InfoTable
          title="Frontend vs Backend Comparison"
          headers={["Aspect", "Frontend", "Backend"]}
          data={frontendVsBackendData}
        />

        <CodeBlock
          title="Frontend vs Backend Architecture"
          code={`// FRONTEND (React - Browser)
function UserList() {
  const [users, setUsers] = useState([]);
  
  // Runs in browser
  // Can't access database directly
  // Must request data from backend
  
  const fetchUsers = () => {
    fetch('/api/users')  // Request to backend
      .then(res => res.json())
      .then(data => setUsers(data));
  };
  
  return <ul>{users.map(u => <li>{u.name}</li>)}</ul>;
}

// BACKEND (Node.js - Server)
app.get('/api/users', (req, res) => {
  // Runs on server
  // Can access database directly
  // Returns data to frontend
  
  const users = database.query('SELECT * FROM users');
  res.json(users);  // Send response to frontend
});

// Flow:
// Frontend asks: "Give me users"
//   ↓
// Backend queries database
//   ↓
// Backend sends JSON response
//   ↓
// Frontend displays data`}
          language="typescript"
        />
      </section>

      {/* What is Fetch */}
      <section className="section-content">
        <h2>What is Fetch?</h2>
        <p>
          Fetch is the modern JavaScript API for making HTTP requests. It replaces the older XMLHttpRequest and is built into 
          all modern browsers. Fetch returns a Promise, which makes it perfect for handling asynchronous operations.
        </p>

        <h3>HTTP Methods with Fetch</h3>
        <InfoTable
          title="Fetch HTTP Methods Reference"
          headers={["Method", "Purpose", "Example"]}
          data={fetchMethodsData}
        />

        <CodeBlock
          title="Fetch Examples: GET, POST, PUT, DELETE"
          code={`// GET - Retrieve data (default)
fetch('https://api.example.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));

// POST - Send/Create data
fetch('https://api.example.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    content: 'Hello World'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

// PUT - Update existing data
fetch('https://api.example.com/posts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Updated Title' })
});

// DELETE - Remove data
fetch('https://api.example.com/posts/1', {
  method: 'DELETE'
});`}
          language="typescript"
        />
      </section>

      {/* Async Behavior */}
      <section className="section-content">
        <h2>Async Behavior</h2>
        <p>
          Async (asynchronous) means code runs without blocking the rest of your application. Network requests are async because 
          they take time. JavaScript uses Promises and async/await to handle this.
        </p>

        <CodeBlock
          title="Understanding Async Behavior"
          code={`// SYNCHRONOUS (blocking)
function getData() {
  const data = fetch('/api/data');  // WAITS here!
  console.log('Got data');
  return data;
}

// ASYNCHRONOUS (non-blocking) with Promises
function getData() {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log('Got data', data));
  
  console.log('Fetch started, not waiting');  // Runs first!
}

// ASYNCHRONOUS (non-blocking) with async/await
async function getData() {
  const response = await fetch('/api/data');  // Wait for this
  const data = await response.json();  // Then wait for this
  console.log('Got data', data);  // Only then run this
  return data;
}

// Important: async/await is cleaner and easier to read!
const data = await getData();  // Execution pauses until done`}
          language="typescript"
        />

        <div className="key-points">
          <h4>Async/Await vs Promises</h4>
          <ul>
            <li><strong>Promises:</strong> Use .then() chains - can get messy with multiple requests</li>
            <li><strong>async/await:</strong> Cleaner syntax - looks like synchronous code</li>
            <li><strong>await:</strong> Only works inside async functions - pauses execution until complete</li>
            <li><strong>try/catch:</strong> Handles errors in async/await code cleanly</li>
          </ul>
        </div>
      </section>

      {/* useEffect Hook */}
      <section className="section-content">
        <h2>useEffect() Hook for API Calls</h2>
        <p>
          useEffect is the React hook designed for side effects like API calls. It runs after the component renders. Always include 
          a dependency array to control when the effect runs.
        </p>

        <CodeBlock
          title="useEffect for API Consumption"
          code={`import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Called after render
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);  // Empty array = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <div>{posts.map(p => <p key={p.id}>{p.title}</p>)}</div>;
}

// Dependency array examples:
// [] = Run once on mount
// [id] = Run when 'id' changes
// [id, user] = Run when 'id' or 'user' changes
// (no array) = Run on every render (AVOID!)`}
          language="typescript"
        />
      </section>

      {/* Interface Typing */}
      <section className="section-content">
        <h2>Interface Typing API Data</h2>
        <p>
          Always create TypeScript interfaces for API responses. This gives you autocomplete, catches type errors, and makes 
          your code self-documenting.
        </p>

        <CodeBlock
          title="Typing API Responses with Interfaces"
          code={`// Step 1: Define interface matching API response
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Step 2: Use interface in state
function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Step 3: Fetch with typed response
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data: User[] = await response.json();  // Type the response
      setUsers(data);
    };
    
    fetchUsers();
  }, []);

  // Now you get autocomplete!
  return (
    <div>
      {users.map((user: User) => (  // user is typed!
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}`}
          language="typescript"
        />
      </section>

      {/* Loading States */}
      <section className="section-content">
        <h2>Loading States</h2>
        <p>
          Always show users that data is loading. Without a loading state, users think the app is broken. Use spinners, skeletons, 
          or "Loading..." messages.
        </p>

        <CodeBlock
          title="Implementing Loading States"
          code={`function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);  // Start loading
        setError('');
        
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Failed to fetch');
      } finally {
        setLoading(false);  // Stop loading
      }
    };

    fetchData();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="spinner">
        <div className="spinner-circle"></div>
        <p>Loading data...</p>
      </div>
    );
  }

  // Show data or error
  if (error) return <p className="error">{error}</p>;
  return <div>{JSON.stringify(data)}</div>;
}`}
          language="typescript"
        />
      </section>

      {/* Error Handling */}
      <section className="section-content">
        <h2>Error Handling</h2>
        <p>
          Network requests can fail for many reasons: no internet, server errors, wrong URL, etc. Always handle errors gracefully 
          and show helpful messages to users.
        </p>

        <CodeBlock
          title="Complete Error Handling Pattern"
          code={`async function fetchWithErrorHandling() {
  try {
    // Make the request
    const response = await fetch('/api/data');
    
    // Check if HTTP status is ok (200-299)
    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status}\`);
    }
    
    // Parse JSON
    const data = await response.json();
    return data;
    
  } catch (error) {
    // Handle different types of errors
    if (error instanceof TypeError) {
      console.error('Network error - no internet?', error);
    } else if (error instanceof SyntaxError) {
      console.error('Invalid JSON response', error);
    } else {
      console.error('API Error:', error);
    }
    
    // Re-throw or return null
    throw error;
  }
}

// In component:
const [error, setError] = useState<string>('');

try {
  const data = await fetchWithErrorHandling();
  setData(data);
} catch (err) {
  // Show error message to user
  setError('Failed to load data. Please try again.');
}`}
          language="typescript"
        />
      </section>

      {/* Interactive Example */}
      <section className="section-content">
        <h2>Try It: Interactive API Consumption</h2>
        <p>
          This example fetches real data from JSONPlaceholder API. It demonstrates loading states, error handling, and 
          typing API data:
        </p>
        <APIDemo />
      </section>

      {/* Common Mistakes */}
      <section className="section-content">
        <h2>Beginner Mistakes with API Consumption</h2>
        <p>
          Here are the most common mistakes beginners make when consuming APIs:
        </p>

        <div className="mistakes-container">
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
            <li><strong>API:</strong> Interface for frontend and backend to communicate</li>
            <li><strong>Fetch:</strong> Modern browser API for making HTTP requests</li>
            <li><strong>HTTP Methods:</strong> GET (read), POST (create), PUT (update), DELETE (remove)</li>
            <li><strong>Async:</strong> Network requests don't block other code</li>
            <li><strong>async/await:</strong> Cleaner way to handle asynchronous code</li>
            <li><strong>useEffect:</strong> Hook for running side effects like API calls</li>
            <li><strong>Dependency array:</strong> Controls when useEffect runs</li>
            <li><strong>Interfaces:</strong> Type your API responses for autocomplete and safety</li>
            <li><strong>Loading state:</strong> Always show when fetching to avoid confusing users</li>
            <li><strong>Error handling:</strong> Use try/catch and show error messages</li>
            <li><strong>Finally block:</strong> Use to stop loading after success or error</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section7;