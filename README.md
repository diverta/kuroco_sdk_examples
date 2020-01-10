# Kuroco SDK examples

> examples of JS/TS frameworks with Kuroco auto-generated codes.

## executing

this project aims to help to make you understand easily with running a web-server with famous framework which you specified.
please refer to following commands, and check out `package-scripts.js`.

```
npm i && \
npx nps ${framwrokName} // please specify a framework you want to check.
```

> :warning: **NOTICE**  
> some example needs dummyAPI which is invoked by Kuroco SDK.  
> in the case of this, you can run one by following commands.  
> `npm i -g @kuroco/cli --registry http://35.190.232.54 && kuroco servedummy`

## dirs

```
.
├── README.md
├── package.json
├── package.json
├── apiconfig
├── kuroco  // auto-generated codes by SDK.
└── examples    // frameworkds examples
    ├── angular-ex
    ├── jquery-ex
    ├── react-ex
    ├── react-ts-ex
    ├── vue-ex
    └── vue-ts-ex
```

## more

if you want to know how to scratch concrete codes,  
look at actual source codes inside of the framework you want to know.
