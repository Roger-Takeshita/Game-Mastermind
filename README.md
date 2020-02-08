### Create a new react project

```Bash
    npx create-react-app mastermind
```

### Run the server

```Bash
    npm run start
```

<h1 id='summary'>Summary</h1>

* [Single-Page App (SPA)](#spa)
  * [Client/Server Communication via AJAX](#ajax)
  * [Client-side Routing](#client-side-routing)
  * [Client-side Rendering](#client-side-rendering)
* [React](#react)
  * [What is React?](#what-is)
  * [A Minimal Example](#minimal-example)
    * [Modern JavaScript](#modern-js)
  * [How Does React App Work?](#how-work)
  * [Key Concepts of React](#concepft-react)
    * [Components](#components)
    * [JSX](#jsx)
    * [State and Prop](#state-props)
    * [Rendering](#rendering)
  * [Tooling](#tooling)
    * [Compiling/Transpiling](#compiling-transpiling)
    * [Module Packaging and Loading](#module-packaging)

<h1 id='spa'>Single-Page App (SPA)</h1>

[Go Back to Summary](#summary)

* In a Single-Page App (SPA), we still want to access different functionality by clicking links, submitting data to the server, etc., however, we wantthe UI to update without triggering a full-page refresh.
* There are three main concepts that make this possible:
  * **AJAX** communication between client and server
  * Client-side routing
  * Client-side rendering

<h2 id='ajax'>Client/Server Communication via AJAX</h2>

[Go Back to Summary](#summary)

* As you've seen jQuery's AJAX methods can be used to send HTTP requests to a server using JavaScript instead of the browser.
* The server then responds with an HTTP response, which usually contains a JSON payload in the response body.
* Because the request and response were all handle in the JavaScript, the browser does not reload the page.

<h2 id='client-side-routing'>Client-side Routing</h2>

[Go Back to Summary](#summary)

* **Client-side routing** is what enables users to interact with the app without triggering a full-page refresh.
* We'll be defining client-side routes and the address bar's URL will continue to change in order to access the different views and functionality that SPA has to offer.
  * Note that will continue to define server-side routes, however, the vast majority of those routes will be API-type routes that are accessed via AJAX calls, perform CRUD return data as JSON needed by the front-end.
* As we've seen, when the URL in the address bar is changed, the browser automatically sends an HTTP request to the host, **unless** the address bar's URLis manipulated in one of two ways: by using the browser's **History API** or **Hash URIs**.
  
<h2 id='client-side-rendering'>Client-side Rendering</h2>

[Go Back to Summary](#summary)

* In SPAs, you would send an AJAX request conatinaing the data for the "action" to the server.
* The server would update the database and send back the response
* To make the response show up in the UI, it needs to be update using JavaScript

<h1 id='react'>React</h1>

<h2 id='what-is'>What is React?</h2>

[Go Back to Summary](#summary)

* [React](https://reactjs.org/) is the go to front-end library when developing highly dynamic user interfaces.
* An open-source JavaScript library for bulding User Interfaces (UI).
* A separate library, **React Native**, can be used to develor native iOS and Android mobile apps.

<h2 id='minimal-example'>A Minimal Example</h2>

[Go Back to Summary](#summary)

* The React team has developed a wonderful script for starting a new React app. The command will be `npx create-react-app <app name>` - think of it as the express-generator for React apps.

<h3 id='modern-js'>Modern JavaScript</h3>

[Go Back to Summary](#summary)

* The first thing to take note is [CodeSandbox](https://codesandbox.io/s/new)'s starting React app is that the modern JavaScript is being used.
* For example, note the use of `import` at the top of **index.js**. Similar to how we used `require` in Node, `import` allows us to access the functionality that is exported by other JavaScript files (modules).
* **Modules** were introduced with ES2015 and they're really cool, but they requires **tooling**, or more specifically, a `module loader`.
* As React developer, we will be using newer features of JavaScript such as the **spread operator, desctructing assignment**, etc.

<h2 id='how-work'>How Does React App Work?</h2>

[Go Back to Summary](#summary)

* When the app is run, this is what happens:
  1. **Tooling** is used to convert that stuff that looks like HTML in the JavaScript into pure JS - this process is called `transpiling`. That HTML-looking stuff is called `JSX` and it's a special syntax.
  2. The `main: src/index.js` entry in **package.js** informs the tooling which JS file is the starting point for figuring out dependencies, module loading and code execution.
  3. The tooling then merges all the JS modules (files) into a single file that is loaded and executed by index.html.
   > `transpiling` is the process of converting source code into a different form of source code, where as compiling means convert source conde into executable code.

* React apps consist of **components** that we code using JavaScript (and a special syntax known as JSX). You **will not** be creating andy `*.html` files when developing a React App.
* The line of code that causes all the components to be rendered for the first time is:

    ```JavaScript
        ReactDOM.render(<App />, rootElement);
    ```

<h2 id='concepft-react'>Key Concepts of React</h2>

<h3 id='components'>Components</h3>

[Go Back to Summary](#summary)

![](https://i.imgur.com/TGZKfoI.png)

![](https://i.imgur.com/hL1T2tH.png)

![](https://i.imgur.com/TqerRDf.png)

* A React app's UI consists of **components**
* In React, we build an app's UI by composing built-in and user-defined components.
* React's built-in components are often referred to as **React Elements** and are used to emit in the HTML page DOM actual elements lik `<div>`, `<h1>`, etc.
* The custom components we code are going to be used a lot like HTML tags. For example, in the diagram above, the UI is being built with tags like `<HomePage>`, `<SearchBar>`, `<EmployeeList>`, etc.
* Ultimately, our React components must contain React Elements if we want anything to appear on the page.
* React Elements can be styled using CSS and are the components that we will add event listeners to for responding to user interaction.
* Components that create the UI are created using 100% JavaScript. There is no HTML markup in React components, just something that looks like it

<h3 id='jsx'>JSX</h3>

[Go Back to Summary](#summary)

* Although a React component's UI is ultimately defined by JavaScript, there is a better way to define the UI using a special syntax known as **JSX**.
* The syntax is an XML-based syntax that looks like HTML - as it should since HTML is also based on XML.
* Since our browsers do not understand JSX, it must first be transpiled (converted) into pure JS.

<h3 id='state-props'>State and Props</h3>

[Go Back to Summary](#summary)

* Like most applications, a React component may have **state** (data/information).
State can only be changed by the component that "owns" that state.
* When a component's state is changed, that **entire** component is re-rendered, including all of its child components.
* A "stateful" component passes any state needed by child components as **props**.
* Props are accessible as key/value pairs on a props object. This props object is passed to the component every time it is rendered.
* **Props** in a component are always read-only.

<h3 id='rendering'>Rendering</h3>

[Go Back to Summary](#summary)

* Consider that most **state** is held at or near the top of the component hierarchy. Further, you now know that a component, and all of its children are re-rendered if any state changes.
* Rendering happens frequently in a React app (whenever state changes), but thanks to React's ingenious design, it's very fast and efficient because:
  * First, React renders to an in-memory representation of the DOM, known as the **Virtual DOM**.
  * After the rendering is done, React compares the latest **Virtual DOM** to the previous Virtual DOM and computes only the "difference", known as the **diff**.
  * React then updates the browser's actual DOM with the actual changes (the computed **diff**).

<h2 id='tooling'>Tooling</h2>

[Go Back to Summary](#summary)

* Tooling enables the development of complex web applications by automating and enhancing the developer's workflow.
  
<h3 id='compiling-transpiling'>Compiling/Transpiling</h3>

[Go Back to Summary](#summary)

* Tooling takes our **source code** and proceesses it to make it production ready.
* Take JSX for example. Its special syntax allow us to more easily define components, however, it must first be transpiled into JavaScript so that the browser can execute it.

<h3 id='module-packaging'>Module Packaging and Loading</h3>

[Go Back to Summary](#summary)

* Today's complex front-end application often consist of many components, general purpose modules, third-party libraries, etc. that have dependencies between then.
* How do all of these different parts that depend on each other find each other? **Tooling** of course - in this case module bundler. Module bundler enables us to export and import functionality similar to what we have been doing in Node.