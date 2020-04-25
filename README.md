# 2020-04-25 (Week 4)

* testing Sagas
  * https://redux-saga.js.org/docs/advanced/Testing.html
* `action.payload vs [...state, action.payload]`
* styling
  * css-modules vs styled-components vs ...
    * https://jdan.github.io/98.css/#window-contents

    ```
    const StyledMyPart = styled(DatePicker).attrs({
      className: "my-css-class"
    })`
      &.my-css-class {
        font-size: 60px;
      }
    `;
    ```

  * ❌ styling by #id
  * sass + css + styled-components стоит ли
    * https://sass-lang.com/
  * sass + css-modules in CRA
    * https://create-react-app.dev/docs/adding-a-sass-stylesheet/
  * optimize css 
    * https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js?source=post_page---------------------------
    * https://github.com/NMFR/optimize-css-assets-webpack-plugin

    * https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactlazy-code-splitting-with-suspense

* https://youtu.be/wmEWSQDPVOw - advanced React patterns
* https://www.youtube.com/watch?v=FD-9c4eBbFc