# Language

## create

```javascript
try {
  const response = await zott.language.create({
    name: "Hindi",
    description: "Hindi Language",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.language.update("Id123", {
    name: "Hindi",
    description: "Hindi Language",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.language.delete(["Id123", "Id456"]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## actions

```javascript
try {
  const response = await zott.language.actions({
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
  const response = await zott.language.getManage();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## list

```javascript
try {
  const response = await zott.language.list();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
