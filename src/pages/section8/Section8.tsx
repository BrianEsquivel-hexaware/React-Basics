import "./Section8.css";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import InfoTable from "../../components/InfoTable/InfoTable";

function Section8() {
  const routerComponentsData = [
    { Component: "BrowserRouter", Purpose: "Wraps entire app, enables routing", Usage: "<BrowserRouter><App /></BrowserRouter>" },
    { Component: "Routes", Purpose: "Container for all route definitions", Usage: "<Routes><Route path='/' element={<Home />} /></Routes>" },
    { Component: "Route", Purpose: "Maps URL path to component", Usage: "<Route path='/about' element={<About />} />" },
    { Component: "Link", Purpose: "Navigation link without page reload", Usage: "<Link to='/about'>About</Link>" },
  ];

  const navigationVsRoutingData = [
    { Concept: "Navigation", Definition: "User action of clicking links/buttons to move around app", Example: "User clicks 'About' link" },
    { Concept: "Routing", Definition: "Technical process of changing displayed component based on URL", Example: "URL changes to /about, component updates" },
  ];

  const commonMistakesData = [
    {
      Mistake: "❌ Using <a> instead of <Link>",
      Problem: "Page reloads, losing app state and performance benefits",
      Solution: "Always use <Link to='/path'> from react-router-dom"
    },
    {
      Mistake: "❌ Forgetting BrowserRouter wrapper",
      Problem: "Routing doesn't work, app crashes",
      Solution: "Wrap entire app in <BrowserRouter> in main.tsx"
    },
    {
      Mistake: "❌ useParams() in wrong component",
      Problem: "Hook returns undefined, data not loaded",
      Solution: "Only use useParams() in components inside <Routes>"
    },
    {
      Mistake: "❌ Hardcoding paths instead of using Link",
      Problem: "Links fail if you change route structure",
      Solution: "Use <Link> for internal navigation"
    },
    {
      Mistake: "❌ Route order matters",
      Problem: "Specific routes catch after general ones",
      Solution: "Put specific routes before general/wildcard routes"
    },
  ];

  return (
    <div className="section8">
      <h1>Navigation</h1>
      <p>Learn how to implement navigation in your React applications using React Router.</p>

      {/* What is Navigation */}
      <section className="section-content">
        <h2>What is Navigation?</h2>
        <p>
          Navigation is how users move around your application. In traditional websites, navigation means loading a new page from 
          the server. In React single-page applications (SPAs), navigation is instant because components change without page reloads. 
          React Router makes client-side navigation seamless and performant.
        </p>

        <div className="key-points">
          <h4>Navigation Benefits in SPAs</h4>
          <ul>
            <li><strong>No page reload:</strong> App state is preserved when navigating</li>
            <li><strong>Instant:</strong> Switching components is much faster than loading new pages</li>
            <li><strong>Back button works:</strong> Browser history is maintained</li>
            <li><strong>URL sync:</strong> URL updates so users can bookmark and share links</li>
          </ul>
        </div>
      </section>

      {/* What is Routing */}
      <section className="section-content">
        <h2>What is Routing?</h2>
        <p>
          Routing is the technical process of mapping URLs to components. When the URL changes, the router determines which component 
          to display. React Router is the most popular routing library for React applications.
        </p>

        <h3>Navigation vs Routing</h3>
        <InfoTable
          title="Navigation vs Routing"
          headers={["Concept", "Definition", "Example"]}
          data={navigationVsRoutingData}
        />

        <div className="key-points">
          <h4>React Router Concepts</h4>
          <ul>
            <li><strong>Route:</strong> Maps a path to a component (e.g., /about → About component)</li>
            <li><strong>Link:</strong> Navigates to a route without page reload</li>
            <li><strong>useParams:</strong> {'Hook to access URL parameters (e.g., /user/123 → {id: 123})'}</li>
            <li><strong>Outlet:</strong> Placeholder where nested routes render</li>
          </ul>
        </div>
      </section>

      {/* Routing Basic Example */}
      <section className="section-content">
        <h2>Routing Basic Example</h2>
        <p>
          Setting up routing in React requires wrapping your app in BrowserRouter, defining routes, and using Link for navigation.
        </p>

        <CodeBlock
          title="Basic React Router Setup"
          code={`// main.tsx - Entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// routes/index.tsx - Route configuration
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '*', element: <NotFound /> },  // Fallback for 404
]);

export default routes;

// App.tsx
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

function App() {
  return <RouterProvider router={routes} />;
}`}
          language="typescript"
        />
      </section>

      {/* Page Components Recommendation */}
      <section className="section-content">
        <h2>Recommendation: Separate Page Components</h2>
        <p>
          As your app grows, organize components into logical page files. Create a separate folder structure for pages and route 
          components. This keeps your project organized and scalable.
        </p>

        <CodeBlock
          title="Recommended Folder Structure"
          code={`src/
├── pages/
│   ├── home/
│   │   ├── Home.tsx
│   │   └── Home.css
│   ├── about/
│   │   ├── About.tsx
│   │   └── About.css
│   ├── contact/
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── user/
│   │   ├── UserProfile.tsx
│   │   └── UserProfile.css
│   └── NotFound.tsx
├── components/
│   ├── Header/
│   ├── Footer/
│   └── ...
├── routes/
│   └── index.tsx
└── App.tsx

// Benefits:
// - Easy to find pages
// - Scalable structure
// - CSS co-located with pages
// - Clear separation of concerns`}
          language="typescript"
        />
      </section>

      {/* Navigation Links */}
      <section className="section-content">
        <h2>Navigation Links</h2>
        <p>
          Use the <code>Link</code> component from React Router for internal navigation. Never use HTML <code>&lt;a&gt;</code> tags 
          for internal links because they cause full page reloads.
        </p>

        <h3>React Router Navigation Components</h3>
        <InfoTable
          title="Navigation Components"
          headers={["Component", "Purpose", "Usage"]}
          data={routerComponentsData}
        />

        <CodeBlock
          title="Link vs Anchor Tag"
          code={`// ❌ WRONG - Uses HTML anchor tag (page reloads)
function Navigation() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

// ✅ CORRECT - Uses React Router Link
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

// Benefits of Link:
// - No page reload
// - App state preserved
// - Instant navigation
// - URL still updates
// - Browser back button works`}
          language="typescript"
        />
      </section>

      {/* Dynamic Routes */}
      <section className="section-content">
        <h2>Dynamic Routes</h2>
        <p>
          Dynamic routes have parameters in the URL. For example, showing different user profiles for /user/1, /user/2, etc. Use 
          <code>:paramName</code> syntax to define dynamic segments in URLs.
        </p>

        <CodeBlock
          title="Dynamic Routes with Parameters"
          code={`// Route configuration with dynamic parameters
const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/user/:id', element: <UserProfile /> },
  { path: '/post/:id/edit', element: <EditPost /> },
  { path: '/user/:userId/post/:postId', element: <UserPost /> },
]);

// URL examples:
// /user/123  →  UserProfile component with id=123
// /user/456  →  UserProfile component with id=456
// /post/789/edit  →  EditPost component with id=789

// Navigation with dynamic routes
import { Link } from 'react-router-dom';

function UserList() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return (
    <div>
      {users.map(user => (
        <Link key={user.id} to={\`/user/\${user.id}\`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}`}
          language="typescript"
        />
      </section>

      {/* useParams Hook */}
      <section className="section-content">
        <h2>useParams() Hook</h2>
        <p>
          The <code>useParams()</code> hook gives you access to URL parameters. Use it in components rendered by routes to get dynamic 
          values from the URL.
        </p>

        <CodeBlock
          title="Using useParams() Hook"
          code={`import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UserProfile() {
  // Get 'id' parameter from /user/:id
  const { id } = useParams<{ id: string }>();
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        // Use id to fetch specific user data
        const response = await fetch(\`/api/users/\${id}\`);
        const data = await response.json();
        setUser(data);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);  // Re-fetch when id changes

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>ID: {id}</p>
    </div>
  );
}

// URL: /user/123
// useParams returns: { id: '123' }
// Always returns strings! Convert to number if needed: Number(id)`}
          language="typescript"
        />
      </section>

      {/* 404 Page */}
      <section className="section-content">
        <h2>404 Page Not Found</h2>
        <p>
          Use a wildcard route (<code>path: '*'</code>) as a fallback for undefined routes. This catches any URL that doesn't match 
          other routes and displays a friendly 404 page.
        </p>

        <CodeBlock
          title="404 Page Setup"
          code={`// routes/index.tsx
const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/user/:id', element: <UserProfile /> },
  // Wildcard route must be LAST
  { path: '*', element: <NotFound /> },
]);

// components/NotFound.tsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

// Important: Wildcard route MUST be last!
// Order matters:
// ✅ Specific routes first → specific routes
// ✅ Dynamic routes → /user/:id
// ✅ Wildcard last → * (catches everything else)`}
          language="typescript"
        />
      </section>

      {/* Beginner Mistakes */}
      <section className="section-content">
        <h2>Beginner Mistakes with Navigation</h2>
        <p>
          Here are the most common mistakes when implementing routing:
        </p>

        <div className="mistakes-grid">
          {commonMistakesData.map((mistake, idx) => (
            <div key={idx} className="mistake-box">
              <h4>{mistake.Mistake}</h4>
              <div className="mistake-details">
                <p><strong>Problem:</strong> {mistake.Problem}</p>
                <p><strong>Solution:</strong> {mistake.Solution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="key-points">
          <h4>Route Order Matters!</h4>
          <ul>
            <li><strong>Specific routes first:</strong> /user/123 (exact matches)</li>
            <li><strong>Dynamic routes second:</strong> /user/:id (with parameters)</li>
            <li><strong>Wildcard last:</strong> * (catches everything else)</li>
          </ul>
        </div>
      </section>

      {/* Summary */}
      <section className="section-content">
        <h2>Summary</h2>
        <div className="summary-box">
          <h3>Key Takeaways</h3>
          <ul>
            <li><strong>Navigation:</strong> How users move around the app</li>
            <li><strong>Routing:</strong> Mapping URLs to components</li>
            <li><strong>BrowserRouter:</strong> Wraps app to enable routing</li>
            <li><strong>Link:</strong> Client-side navigation without page reload</li>
            <li><strong>Never use &lt;a&gt;:</strong> For internal links, always use Link</li>
            <li><strong>Dynamic routes:</strong> Use :paramName for URL parameters</li>
            <li><strong>useParams():</strong> Hook to access URL parameters</li>
            <li><strong>Wildcard route:</strong> Use path: '*' for 404 fallback</li>
            <li><strong>Route order:</strong> Specific routes first, wildcard last</li>
            <li><strong>Organize pages:</strong> Create separate folder for each page component</li>
            <li><strong>Params are strings:</strong> Convert to number if needed</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Section8;