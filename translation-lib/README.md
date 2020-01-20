# Translation Librabry 

All translations are extracted from the applications to single repository for easy update, addition, translation and consolidation. Hence in our example we are not publishing this into the npm package, we might have to do `npm link` or `yarn link` to consume the library. 

# Structure 
There are mainly two approaches we can use to build this library. The first approach is as structured below, by doing so all the translations repsonsible for enture applications will be consolidated in one place and are expored via index.js.
```
translation-lib
    - package.json
    - en-US.json
    - en-UK.json
    - es.json
    - fr.json
    - index.js
 ```
 The drawback of doing this would be, 
 - If the consuming application doesn't use few library then their translations are not extracted out. So the translation file grows in size. 
 - Each translation should have very specific `id` to differentiate between different libraries or solutions. Example: `libraryOne.solutionOne.card.title` and `libraryTwo.solutionOne.card.title`. 
 - If each library decides to provide the translations as part of the bundle then `translation-lib` will provide unnecessary translations which are not needed. 

 Second approach would be to seperate the translations by library or solutions,
 ```
translation-lib
    - package.json
    - libraryOne
        - en-US.json
        - en-UK.json
        - es.json
        - fr.json
        - index.js
    - libraryTwo
        - en-US.json
        - en-UK.json
        - es.json
        - fr.json
        - index.js
    - index.js
 ```
 - Helps in minimizing the translations file size.
 - Each library or solution can consume only the translations needed rather than one massive translation.
 - Perhaps the folder strcture can helping building better namespace. Example: We can call `solutionOne.card.title` vs `library.solutionOne.card.title`.


# Installation 
## Install
```
npm add translation-lib
```
## Link
```
npm link
```
## Consume
In the consuming application, please execute the below
```
npm link `translation-lib`
```