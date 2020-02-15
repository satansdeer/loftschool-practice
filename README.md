# 2020-02-08 (Week 4)

* combineReducers
    * https://redux.js.org/api/combinereducers/#combinereducersreducers

* Why do sagas use generators?
    * https://redux-saga.js.org/
        * Redux Saga chooses generators over async/await
* Can we use co with sagas
    * `co` library https://github.com/tj/co

* Multiple sagas example
    * http://react-github-follower-list.surge.sh/

* Testing sagas
    https://github.com/redux-saga/redux-saga/issues/518

* Sagas most common methods
    * fork https://redux-saga.js.org/docs/api/#forkfn-args
    * takeEvery https://redux-saga.js.org/docs/api/#takeeverypattern-saga-args
    * call https://redux-saga.js.org/docs/api/#callfn-args
    * put https://redux-saga.js.org/docs/api/#putaction
    * select https://redux-saga.js.org/docs/api/#selectselector-args

* Testing asynchronous code
    * Mocking requests
        * Create an `api` module for requests
        * Mock `global.fetch`
    * Controlled promise

* Form validation example

* Tricky testing examples
    * Testing with redux
        * https://testing-library.com/docs/react-testing-library/setup#custom-render
    * Nested components (with dependencies)
        * Jest mock component

* Localizing react apps
    * React intl
        * https://github.com/formatjs/react-intl
        * https://github.com/GertjanReynaert/react-intl-translations-manager

    * Gettext
        * https://github.com/Mojang/t-component
        * https://github.com/Mojang/i18n-scripts

    * React-i18next
        * https://github.com/i18next/react-i18next

* Lerna
    * https://github.com/lerna/lerna
    * Bump versions
    * Install dependencies for all projects
    * Run commands for every project
    * Publish multiple packages