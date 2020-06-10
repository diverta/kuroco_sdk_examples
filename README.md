# Kuroco SDK examples

> examples of JS/TS frameworks with Kuroco auto-generated codes.

## executing

this project aims to help to make you understand easily with running a web-server with famous framework which you specified.
please refer to following commands, and check out `package-scripts.js`.

```
npm i && \
npx nps ${framwrokName} // please specify a framework you want to check.
```

for instance,  
`npx nps react-ts // executes Kuroco with React & TypeScript (using commonjs modules & webpack, enabled TS intellisence)`,  
`npx nps vue // executes Kuroco with React & TypeScript (using commonjs modules & webpack)`,  
`npx nps jquery-standalone  // executes Kuroco with jQuery (using bundled JavaScript available on browser)`

all examples excapting `jquery-standalone-ex` are installing Kuroco sources with installing local `./kuroco` directory,  
so they are using the same module.

and if you want to update generated codes, type  
`npx nps update`

## more

if you want to know how to scratch concrete codes,  
look at actual source codes inside of the framework you want to know.
