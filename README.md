# 24.01.20

* SSR
    * renderToString
    * redirects in server rendered pages
        * https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/server-rendering.md
    * Razzle
        * https://github.com/jaredpalmer/razzle
* Typescript
* LifecycleMethods in functional components
    * useEffect
        * https://reactjs.org/docs/hooks-effect.html
* Inheritance in React ? - should we use it?
* Splitting bundle in react app
* Choosing a side effect lib
    * saga
    * thunk
    * observable
        * https://redux-observable.js.org/
    * async-actions
        * https://redux.js.org/advanced/async-actions/
* Architecture
    * organizing state and reducers - level of detalization
    * what to put in redux state.
* Smart components and side effects - where should be the business logic
* What is business logic
* Tests
    * When to write
    * Should you test hight level components (App.js e.t.c)
* Controlled form hooks
* Security of React applications
    * https://github.com/WebGoat/WebGoat
    * https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS).html
* Animation between routes with both pages visible
* Debugging using react dev tools and redux dev tools
    * https://github.com/LogRocket/redux-logger#readme
    * Debug using debugger
* Using context to store user
* Persisting app data
    * When?
        * Between browser sessions
        * navigating from the page
        * refreshing the page
        * by timer ?
    * Where
        * LocalStorage
        * SessionStorage
        * IndexDB
    * How
        * JSON.stringify/parse or how?
        * https://github.com/rt2zz/redux-persist
* ShouldComponentUpdate for functional components. For example if we want to perform render every 10th time.
    * https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate
* PrevProp prevState in hooks
    * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state