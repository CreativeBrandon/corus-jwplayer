# Corus-jwplayer 

> The repository for *high quality*  JWPlayer TypeScript type definitions.


## What are declaration files?

See the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).


## How do I get them?

### npm

This is the preferred method. This is only available for TypeScript 2.0+ users. For example:

```sh
npm install --save-dev @types/node
```

### Test

#### Create a new package

If you are the library author, or can make a pull request to the library, [bundle](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) types instead of publishing to DefinitelyTyped.

If you are adding typings for an NPM package, create a directory with the same name.
If the package you are adding typings for is not on NPM, make sure the name you choose for it does not conflict with the name of a package on NPM.
(You can use `npm info foo` to check for the existence of the `foo` package.)

Your package should have this structure:

| File | Purpose |
| --- | --- |
| index.d.ts | This contains the typings for the package. |
| foo-tests.ts | This contains sample code which tests the typings. This code does *not* run, but it is type-checked. |
| tsconfig.json | This allows you to run `tsc` within the package. |
