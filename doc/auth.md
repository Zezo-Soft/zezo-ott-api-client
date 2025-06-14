# Auth

## sendOTP

```javascript
try {
  const payload = {
    phone: "7777777777",
  };
  const response = await zott.auth.sendOTP(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## login

```javascript
try {
  const payload = {
    email: "example@gmail.com",
    password: "**********",
  };
  const response = await zott.auth.login(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## verifyOTP

```javascript
try {
  const payload = {
    otp: "123456",
    phone: "7777777777",
    hash: "hash",
  };
  const response = await zott.auth.verifyOTP(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## signUp

```javascript
try {
  const payload = {
    name: "John Doe",
    email: "example@gmail.com",
    password: "**********",
  };
  const response = await zott.auth.signUp(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## forgotPassword

```javascript
try {
  const payload = {
    email: "example@gmail.com",
  };
  const response = await zott.auth.forgotPassword(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## resetPassword

```javascript
try {
  const payload = {
    id: "id",
    password: "**********",
    token: "token",
  };
  const response = await zott.auth.resetPassword(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## whoami

```javascript
try {
  const response = await zott.auth.whoami();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## logout

```javascript
try {
  const response = await zott.auth.logout();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## removeSession

```javascript
try {
  const payload = {
    token_id: "id",
  };
  const response = await zott.auth.removeSession(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## changePassword

```javascript
try {
  const payload = {
    current_password: "**********",
    new_password: "**********",
  };
  const response = await zott.auth.changePassword(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
