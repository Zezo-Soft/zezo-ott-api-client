# Subscriptions

## initNew

```javascript
try {
  const response = await zott.subscriptions.initNew();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.subscriptions.delete("subscriptionId123");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.subscriptions.update("subscriptionId123", {
    name: "test",
    description: "test description",
    ...more required fields
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const response = await zott.subscriptions.get();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getManage

```javascript
try {
  const response = await zott.subscriptions.getManage();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
