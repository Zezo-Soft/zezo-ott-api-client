# Categories

## create

```javascript
try {
  const response = await zott.categories.create({
    name: "test",
    description: "test description",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.categories.update("categoryId123", {
    name: "test",
    description: "test description",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.categories.delete([
    "categoryId123",
    "categoryId456",
  ]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## actions

```javascript
try {
  const response = await zott.categories.actions({
    ids: ["categoryId123", "categoryId456"],
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
  const response = await zott.categories.getManage();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## list

```javascript
try {
  const response = await zott.categories.list();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const response = await zott.categories.get();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
