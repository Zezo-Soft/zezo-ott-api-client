# Config

## create

```javascript
try {
  const payload = {
    key: "TEST_KEY",
    value: "TEST_VALUE",
    environment: "dev",
  };
  const response = await zott.config.create(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const payload = {
    keyId: "id",
    value: "TEST_VALUE",
    environment: "dev",
  };
  const response = await zott.config.update(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const payload = {
    key: "TEST_KEY",
    environment: "dev",
  };
  const response = await zott.config.delete(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const query = {
    key: "TEST_KEY",
    environment: "dev",
  };
  const response = await zott.config.get(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
