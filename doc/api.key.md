# API Key

## create

```javascript
try {
  const response = await zott.apiKeys.create({
    name: "test key",
    neverExpires: true,
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## list

```javascript
try {
  const response = await zott.apiKeys.list();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.apiKeys.delete("key_id");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.apiKeys.update("key_id", {
    name: "test key",
    status: false,
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```
