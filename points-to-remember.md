## Points to remember
- Every time you write some function to set state, you need to bind it in constructor like shown below.
```

//method which sets state
handlerClick(){
    this.setState({count:1});
}

//above method need to get binded in constructor.
constructor(){
    super();
    this.handler=this.handlerClick.bind(this); //Here this indicates context of class.
}
```
- If you don't want any data from pervious state you can just define object in setState().But If you want to know any data from previous state,  you got to use function something like shown below.

```

```