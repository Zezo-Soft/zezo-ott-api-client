# Cast

## create

```javascript
try {
  const response = await zott.cast.create({
    name: "Name",
    description: "Description",
    type: "actor",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.cast.update("Id123", {
    name: "Name",
    description: "Description",
    type: "actor",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.cast.delete(["Id123", "Id456"]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## actions

```javascript
try {
  const response = await zott.cast.actions({
    ids: ["Id123", "Id456"],
    action: "public",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getManage

```javascript
try {
  const response = await zott.cast.getManage();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## list

```javascript
try {
  const response = await zott.cast.list();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
