1. What problem does the context API help solve?

@React Context solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

@Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

@The reducer is a pure function that takes the previous state and an action, and returns the next state.

@Redux is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   @Component state is only available to the single component or it's children. Whereas application state can be used throughout the entire application. It would be smart to use Redux in a large application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

@Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

@Context API because it's a lot simpler.
