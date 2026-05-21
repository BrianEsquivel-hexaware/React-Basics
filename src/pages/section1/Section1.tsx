import "./Section1.css";

function Section1() {
    return (
        <div>
            <div className="section1">
                <h1>React Fundamentals</h1>
                <p>Master the core concepts and foundations of React development.</p>
                <div className="section-content mt-4">
                    <h3>Topics Covered:</h3>
                    <ul>
                        <li>Components and JSX</li>
                        <li>Props and State</li>
                        <li>Event Handling</li>
                        <li>Component Lifecycle</li>
                        <li>Conditional Rendering</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Section1;