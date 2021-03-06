# nrelay

A headless client for Realm of the Mad God Exalt built with Node.js and TypeScript.
Fork of https://github.com/thomas-crane/nrelay

## Contents

+ [Docs](#docs)
+ [Install](#install)
+ [Usage](#usage)
+ [Acknowledgements](#acknowledgements)

## Docs

The documentation in this repository consists mostly of guides and tutorials about how to use nrelay and its components, and how to create plugins. All of the docs can be found [in the docs folder.](/docs/readme.md)

There is also extensive inline API documentation, which can be viewed in **./docs/api**

## Install
1. Clone the example nrelay-project
```ts
git clone https://github.com/Extacy/nrelay-project
```

2. Update `src/nrelay/accounts.json`
An example is provided for you
To use your own accounts, change `guid` and `password`. The rest are optional.

3. Update `src/nrelay/proxies.json`
    This step is optional, if you want your accounts to use a proxy.
    Note that RotMG limits IPs by 4 accounts per server.
    Example proxies are provided for you, nrelay only supports Socks v4 and v5 proxies.

## Usage
Simply compile/run `nrelay-project/src/index.ts`
```
cd nrelay-project
tsc -p .
node lib/index.js
```

## Acknowledgements

+ [nrelay](https://github.com/thomas-crane/nrelay) (thomas-crane) - The original nrelay project.
+ [nrelay-unity](https://github.com/abrn/nrelay-unity) (abrn) - Porting nrelay to Unity.

This project uses the following open source software:
+ [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler)
+ [Il2CppInspector](https://github.com/djkaty/Il2CppInspector)
+ [ghidra](https://github.com/NationalSecurityAgency/ghidra)