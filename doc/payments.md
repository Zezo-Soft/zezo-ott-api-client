# Payments

## checkout

```javascript
try {
  const payload = {
    provider: "razorpay",
    subscription: "5f9d4a0a0a0a0a0a0a0a0a0a",
  };
  const response = await zott.payments.checkout(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## ready

```javascript
try {
  const payload = {
    platform: "web",
  };
  const response = await zott.payments.ready(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
