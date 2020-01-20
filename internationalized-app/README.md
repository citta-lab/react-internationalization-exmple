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
2.1 We enabled the app to embrace react-intl by wrapping the app with higher order compoment `IntlProvider` with locale as english. 
2.2 We made use of FormattedMessage to translate the data, but buy default we provided some static message in the
code.
2.3 Provided actual translation json file along with locale using `IntlProvider`. In reality, the default messages we provided in FormattedMessage should be english and we would focus on other language json file in translation. However i have used english to just diffrenciate the text. 
2.4 Added spanish version of translation and changed the locale in index file to get reflected while rendering.

### 3. Using `translation-lib`
Consuming `translation-lib` as library using `yarn link` and we need to update the `index.js` in the app to consume the new translations from the lib.
```
import {en,fr,es} from 'translation-lib/card';
```


