# react-internationalization-exmple
This repo consists of two repository, one for running the application and one for providing the translation which is needed for the app. 

## Translation Library: 📚
You need translation to be served from npm, hence it is not part of the regisitry we need to link it by doing
```
cd translation-lib
yarn link 
```
which will return `yarn link translation-lib` which we need to execute in the application. Read more about `tranlslation-lib` [here](https://github.com/citta-lab/react-internationalization-exmple/blob/master/translation-lib/README.md)

## Application: 🚀
You can run the application by doing below steps, you can also read more about it [here](https://github.com/citta-lab/react-internationalization-exmple/tree/master/internationalized-app). Please do remember this has depedency on `translation-lib`. 
```
cd internationalized-app
yarn install
yarn link `translation-lib`
yarn start
```

