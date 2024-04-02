---
layout: post
title: Node.js and it's main function
date: 2024-04-02 14:36 +0700
description: Somethings I learned along the way
tag:
  - javascript
image: horizontal.png
---

So I was working on some custom plugins for [Superbot](https://github.com/osirislab/superbot-public) and found out Node.js didn't care about my `main` function.

After a bit of Googling, it makes a bit of sense. Javascript is a scripting language and requires some sort of interpreter to be compiled to some bytecode. In that sense, the entire file is your `main` function.

In compiled languages, the `main` entry function is mandatory since code is compiled into a binary which needs a program start for the operating system to recognize. 

Back to the javascript example, I got around it by just doing better organizing functions.

```javascript
function main(){ //doesn't matter what I call it...
    let urls = [
        "https://recruit.osiris.bar/api/v1/challenges/40/solves", //web
        "https://recruit.osiris.bar/api/v1/challenges/41/solves", //crypto
        "https://recruit.osiris.bar/api/v1/challenges/42/solves", //pwn
        "https://recruit.osiris.bar/api/v1/challenges/43/solves"  //rev
    ]
    getCTFdSolves(urls)
}
main(); 
```

### ps.

I realized after that there's actually a `module` available to kind of replicate the functionality of main. 

```javascript
function main(){
    //do your thing here
}

if (require.main === module) {
  main();
}
```

Still feels quite redundant in that you need a module for this so not really worth to keep digging into for most cases. Let javascript be a script!