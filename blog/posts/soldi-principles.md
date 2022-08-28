---
title: "Solid design and principles in programming"
image: "/imgs/blog/syntaxic.png"
slug: react_blog
---

You can say that is a good design if you can do changes easily, the cost of change shouldn't be expensive

Solid design hides inherit complexity and eliminates accidental complexity.

## Solid code principles
- Single responsibility principle: Each software module(class, method, function) should do only one thing and a should have only one reason to change.

- Open/closed principle: A code should be open to extension and closed from modifications, Abstraction and polymorphism are the key to make this happen.

- Liskov substitution principle: Don't use inheritance all the time use composition, because inheritance should be used only for substitutability.

    * If an object of B should be used anywhere an object of A is used then use inheritance.
    * If an object of B should use on object of A, then use composition or delegation.

- Dependency Inversion Principle

- Interface Segregation Principle

## Good practices

- DRY principle: Don't repeat yourself: avoid duplication and reuse the code.
- Avoid long functions
- Don't comment what the code do, comment why you write the code
- Code is like a joke, don't comment to explain it, instead refactor it to be more clear.
