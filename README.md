# S.O.M
A library for interactive UIs using WebComponents, which includes just the basic functions of a normal frontend library.

(Uses acorn library)


## Great, Now Show Me
```html
<!DOCTYPE html>
<html>
  <head>
    <component name="hello">
      :: newState(world, 0)
      <h1>Hello {{reactive: state.world}}</h1>

       <button onclick="SOMAPI.State.world += 1"></button>
    </component>
  <head>
<body>
  <hello></hello>

</body>
</html>
```

So in our component def, we create a new state object based off its component, which you can change with the "stn" attribute, and then we call it.
