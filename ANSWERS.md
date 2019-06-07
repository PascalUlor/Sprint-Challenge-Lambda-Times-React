## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes is a type checking library that works react to ensure the props received in a component are type-checked.
Javascript is basically losely typed but PropTypes adds some strongly typed ability
- [ ] Describe a life-cycle event in React?
Life-cylcles in react can be likened to event handlers. It refers to the state of a react component at a certain time in relation to how or when it is rendered.
- [ ] Explain the details of a Higher Order Component?
This are functions or components that receive a component as parameters. They are pure functions with zero effects.
It is use to apply logic to multiple components simultaneously.
- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
1. CSS Stylesheet
this is the conventional way of styling html page but
is not best practices because of style leakage
2. Inline styling or CSS Modules
This prevents style leaks but is not dynamic
3. Styled-components
This prevents style leaks and is a dynamic way of styling react component. The avails us the ability to pass css styles like react components