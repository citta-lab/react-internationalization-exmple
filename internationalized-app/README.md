This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`
should run the app on port 3000 by default.

## Branch Development Notes:

### 1. Better way to handle card in CardManager.
The idea of breaking single Cards component to just the `Card` and use the same in `CardManager` was great but i do see we been using `Card` 4 times in the return and passed in the different props so we can have desired 2*2 card grid. Perhaps there is a better way,
1.1 Lets handle this using maps
1.2 Move props data to an array of objects
1.3 Loop though the data and render the Card. ( Ah, we would only call once )

### 2. Adding React-Intl
Enabling components to adopt for Internationalization. Making use of this [example](https://github.com/formatjs/react-intl) to implement the react-intl.




