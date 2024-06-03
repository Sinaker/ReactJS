# Timer Game

---

In this project we try to create a timer game, with varying levels of difficulty. This project introduces you to the concepts of:

- Refs
- ForwardRefs
- Imperative Handle
- Portals

## Refs

---

Refs, essentially standing for reference. A ref attribute is provided by React to all components. Using refs you can 'reference' components and can execute certain commands/methods/attributes.

## ForwardRefs

---

Unlike props, you cannot transfer refs from one jsx file to another, for forwarding refs you employ the use of _*forwardRef*_ function. The general Syntax is `forwardRef(function <func_name>(pros, ref)`

## Imperative Handle

---

Certain functions can be exposed for public access using _*Imperative Handle*_, simlar to open methods for an API.  
Syntax:

```JS
useImperativeHandle(ref, () => {
    return {
      <function_to_expose>() {
        <instructions>
      },
    };
```

## Portals

---

Sometimes you want your html code not to be present in the place you are writing your components. Portals can help you 'teleport' you html code into any element using the `document.querySelector()` command  
Syntax:

```JS
    usePortals(<function>, <element>)
```

### Preview:

---
