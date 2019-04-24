
# What is Redux?
Redux is a predictable state container for JavaScript apps.
Redux is a design pattern.
Redux can used with Angular, react or any other library for Javascript.

Redux has several components, but the necessary components that should be used are:
Actions, reducer and store .

# Actions
The actions indicate what to do.
Actions must be triggered through synchronous functions.
With Ngrx we trigger the actions through dispatch method.

# Reducer
If the actions say what to do, the reducer indicates how to do it
Reducer is a function that indicates how to do.
It is important to clone all objects in the reducer, it is not convenient to work with the same memory reference.

# Store
The store is the memory where we have all states
This is a volatile memory, not a persistent memory, if we want to conserve data, we can use the storage, indexeddb or the browser cache.

# Effects
Effects are functions that allow us to trigger actions when we work with asynchronous methods.
One of the actions is captured by an effect function, wait for the asynchronous response and then activate another function.

# When to use Redux?
se the same information in multiples components. (for example session data, typelist, etc)
Actions of the components that may affect another component. (for example: configuration data)
Others: https://medium.com/@fastphrase/when-to-use-redux-f0aa70b5b1e2


#Redux - Ngrx
npm i @ngrx/store@6.1.2 --save-dev
npm install @ngrx/store-devtools@6.1.2 --save-dev
npm install @ngrx/effects@6.1.2 --save-dev