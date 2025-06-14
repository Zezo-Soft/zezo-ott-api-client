# AuthMethods

## loginMethods

```javascript
try {
  const query = {
    platform: "web",
  };
  const response = await zott.authMethods.loginMethods(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const query = {
    select: "web",
    fields: ["methods"],
  };
  const response = await zott.authMethods.get(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## init

```javascript
try {
  const response = await zott.authMethods.init();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const payload = {
    status: false,
    methods: ["email"],
  };
  const response = await zott.authMethods.update(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
