const content = {
  'introduction': {
    title: 'Introduction',
    body: `# Welcome to DocuBook
  
  This is a simple DocuBook application built with React.
  
  ## Features
  - Markdown support
  - Easy navigation
  - Customizable content
  - Responsive design
  
  Feel free to explore the different sections using the sidebar navigation.`
  },
  'react-basics': {
    title: 'React Basics',
    body: `# React Basics
  
  React is a JavaScript library for building user interfaces.
  
  ## Key Concepts
  
  1. **Components**: React applications are built using components. Components are reusable pieces of UI that can be composed together to create complex interfaces.
  
  2. **JSX**: JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to describe what the UI should look like.
  
  3. **State and Props**: State is data that can change over time within a component. Props are data passed from a parent component to a child component.
  
  ## Creating a Component
  
  Here's a simple example of a React component:
  
  \`\`\`jsx
  import React from 'react';
  
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  export default Welcome;
  \`\`\`
  
  This component can be used in another component like this:
  
  \`\`\`jsx
  <Welcome name="Alice" />
  \`\`\`
  
  React makes it easy to create interactive, reusable UI components.`
  },
  'advanced-react': {
    title: 'Advanced React',
    body: `# Advanced React
  
  Let's dive deeper into React and explore some advanced concepts.
  
  ## Hooks
  
  Hooks are a way to use state and other React features without writing a class. The most commonly used hooks are:
  
  - **useState**: Allows you to add state to functional components.
  - **useEffect**: Allows you to perform side effects in function components.
  - **useContext**: Allows you to subscribe to React context without introducing nesting.
  
  Example of using \`useState\` and \`useEffect\`:
  
  \`\`\`jsx
  import React, { useState, useEffect } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = \`You clicked \${count} times\`;
    }, [count]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  
  export default Counter;
  \`\`\`
  
  Hooks provide a powerful way to manage state and side effects in your React applications.`
  },
  'project-setup': {
    title: 'Project Setup',
    body: `# Setting Up Your React Project
  
  Getting started with a new React project is easy. Here are the steps to set up a new project using Create React App.
  
  ## Installation
  
  First, you need to have Node.js and npm installed. Then, you can create a new React project by running:
  
  \`\`\`bash
  npx create-react-app my-app
  cd my-app
  npm start
  \`\`\`
  
  This will set up a new React project and start the development server.
  
  ## Project Structure
  
  The default project structure includes:
  - \`public\`: Static assets like HTML, CSS, and images.
  - \`src\`: The source code of your React application.
  
  ## Customizing Your Project
  
  You can customize your project by modifying the files in the \`src\` directory. Start by editing \`src/App.js\` to change the content of your main component.`
  },
  'styling-components': {
    title: 'Styling Components',
    body: `# Styling React Components
  
  Styling your components is an essential part of building a React application. There are several ways to add styles to your components.
  
  ## CSS Modules
  
  CSS Modules allow you to write CSS that is scoped to a single component. This prevents styles from leaking into other components.
  
  Example:
  
  \`\`\`css
  /* Button.module.css */
  .button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
  }
  \`\`\`
  
  \`\`\`jsx
  import React from 'react';
  import styles from './Button.module.css';
  
  function Button() {
    return <button className={styles.button}>Click Me</button>;
  }
  
  export default Button;
  \`\`\`
  
  ## Styled-Components
  
  Styled-components allow you to use ES6 and CSS to style your components. It removes the mapping between components and styles.
  
  Example:
  
  \`\`\`jsx
  import styled from 'styled-components';
  
  const Button = styled.button\`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
  \`;
  
  function App() {
    return <Button>Click Me</Button>;
  }
  
  export default App;
  \`\`\`
  
  Both methods provide a way to encapsulate styles and make your components more modular.`
  },
  'routing': {
    title: 'React Routing',
    body: `# React Routing
  
  React Router is a powerful library that allows you to handle routing in your React applications.
  
  ## Setting Up React Router
  
  First, install React Router by running:
  
  \`\`\`bash
  npm install react-router-dom
  \`\`\`
  
  ## Defining Routes
  
  You can define routes using the \`Route\` component. Here's an example:
  
  \`\`\`jsx
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import Home from './Home';
  import About from './About';
  
  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
  
  export default App;
  \`\`\`
  
  ## Navigation
  
  Use the \`Link\` component to navigate between routes:
  
  \`\`\`jsx
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  \`\`\`
  
  React Router makes it easy to manage navigation and routing in your React applications.`
  },
  'redux-introduction': {
    title: 'Introduction to Redux',
    body: `# Introduction to Redux
  
  Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.
  
  ## Core Concepts
  
  1. **Store**: The single source of truth that holds the state of your application.
  2. **Actions**: Plain JavaScript objects that represent an intention to change the state.
  3. **Reducers**: Functions that specify how the state changes in response to actions.
  
  ## Setting Up Redux
  
  Install Redux and React-Redux:
  
  \`\`\`bash
  npm install redux react-redux
  \`\`\`
  
  ## Creating a Store
  
  Example of setting up a Redux store:
  
  \`\`\`jsx
  import { createStore } from 'redux';
  import { Provider } from 'react-redux';
  
  const initialState = { count: 0 };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      default:
        return state;
    }
  }
  
  const store = createStore(reducer);
  
  function App() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
  
  export default App;
  \`\`\`
  
  Redux provides a robust way to manage state in your React applications, making it easier to handle complex state interactions.`
  },
};

export default content;
