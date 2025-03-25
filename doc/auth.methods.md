# AuthMethods

## loginMethods

```javascript
try {
  const payload = {
    platform: "web",
  };
  const response = await zott.authMethods.loginMethods(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
