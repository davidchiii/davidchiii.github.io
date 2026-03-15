---
layout: post
title: An observation about the databases class at NYU Tandon
date: 2026-03-15 4:22 PM +0700
description: 
tag:
  - philosophy
  - databases
image:
comments: true
---

I recently picked up a reading of Martin Kleppmann's [Designing Data-Intensive Applications](https://unidel.edu.ng/focelibrary/books/Designing%20Data-Intensive%20Applications%20The%20Big%20Ideas%20Behind%20Reliable,%20Scalable,%20and%20Maintainable%20Systems%20by%20Martin%20Kleppmann%20(z-lib.org).pdf) and in Chapter 2, it talks about the introduction of SQL, declarative/imperative languages, and relational algebra.

Most modern, high-level languages are imperative - a step-by-step instruction on what the computer should do to achieve some user-defined goal.

However, SQL is known as a declarative language, a *"definition"* or structure of how the data should behave. 
> It's a "pattern of the data you want -- what conditions the results must meet, and how you want the data to be transformed (e.g. sorted, grouped, or aggregated) -- but not *how* to achieve the goal. (Kleppmann 43)

An example of the two they gave was a simple `get()` function.

```javascript
function getSharks() {
  var sharks = []
  for (var i = 0; i < animals.length; i++) {
    if (animals[i].family === "Sharks") {
      sharks.push(animals[i]);
    }
  }
  return sharks;
}
```

vs. 

```sql
SELECT * FROM animals WHERE family = 'Sharks';
```

Both methods are representing a the relational algebra defined with:

$$ sharks = \sigma_{family = "Sharks"} (animals) $$

I mean, look how close SQL is to the original relational algebra! That's incredible, isn't it?
It was almost as if this language was purposefully created to communicate this relation.

--

After not seeing relational algebra for over 2 years, it was a pleasant surprise seeing something I've learned in a context I am genuinely interested in. In school, I was only taught the syntax of it, never the importance of why we use such strange symbols to represent data relationships!

As disgusting it was having to learn the syntax translating SQL to relational algebra, it was refreshing to finally see it be used. 

During class, we've never ventured past the syntax or query language into the practical uses. I was only taught how to translate A to B, but never why A is important to B. I would have loved to see real applications, whitepapers, or mock data structures using such language. 

My brain immediately began to generalize the classes in university and the purpose of it all. 

Most of the syntax learning I did was in the first few weeks of work during onboarding. School didn't really need to spend a semester on learning SQL for 3 months. Instead, it was much more helpful understanding why a programming language was created in this manner and the problems it specifically solved while creating downsides for others, which allowed other languages to prosper in their niches.

--

Yesterday, my friend claimed that all these modern "boutique" languages (he cites Go, Rust, Typescript) were all created by big companies to keep junior developers struggling on the syntax instead of focusing on the real matter at hand: what is the purpose of it all? 

I think it really hit home for me, and I'll need to do some more thinking.