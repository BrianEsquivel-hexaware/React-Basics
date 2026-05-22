import './Home.css';

function Home() {
  const courseTopics = [
    'Fundamentals',
    'Introduction to React',
    'Components',
    'State and Props',
    'Events',
    'Lists and Conditional Rendering',
    'API Consumption',
    'Navigation with React Router',
    'Styling',
    'Best Practices',
  ];

  return (
    <div className="py-5">
      {/* Hero Section */}
      <div className="hero-section text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Welcome to React Basics</h1>
        <p className="lead mb-4">
          Master the fundamentals of React and start building modern web applications today
        </p>
        <button className="btn btn-primary btn-lg me-2" onClick={() => window.open('https://react.dev/learn', '_blank')}>
          Start Learning
        </button>
        <button className="btn btn-outline-primary btn-lg" onClick={() => window.open('https://www.w3schools.com/react/default.asp', '_blank')}>
          Learn More
        </button>
      </div>

      {/* Why Take This Course */}
      <div className="why-section mb-5">
        <h2 className="text-center mb-4">Why Take This Course?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="reason-card p-4">
              <i className="bi bi-lightning-charge fs-1 text-primary mb-3"></i>
              <h4>Industry Demand</h4>
              <p>React is one of the most sought-after skills in web development. Learn a technology that employers actively hire for.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="reason-card p-4">
              <i className="bi bi-diagram-3 fs-1 text-primary mb-3"></i>
              <h4>Component-Based</h4>
              <p>Build reusable, maintainable components that scale with your projects. Learn best practices from day one.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="reason-card p-4">
              <i className="bi bi-rocket-takeoff fs-1 text-primary mb-3"></i>
              <h4>Build Real Projects</h4>
              <p>Go beyond tutorials. Create actual applications with routing, state management, and styling from the start.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Topics */}
      <div className="topics-section mb-5">
        <h2 className="text-center mb-4">What You'll Learn</h2>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="topics-list">
              {courseTopics.map((topic) => (
                <div key={topic} className="topic-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="text-center mb-4">Course Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <i className="bi bi-book fs-1 text-primary mb-3"></i>
              <h4>Comprehensive</h4>
              <p>From basics to advanced concepts, everything you need to know about React</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <i className="bi bi-hand-index fs-1 text-primary mb-3"></i>
              <h4>Hands-On</h4>
              <p>Learn by doing. You can modify this page to see the changes in real-time</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <i className="bi bi-person-check fs-1 text-primary mb-3"></i>
              <h4>Beginner-Friendly</h4>
              <p>No prior React experience needed. We start from the fundamentals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
