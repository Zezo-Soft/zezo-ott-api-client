# Notification

## registerDevice

```javascript
try {
  const response = await zott.notifications.registerDevice({
    fcmToken: "string",
    platform: "ios",
    deviceId: "string",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## sendPushNotification

```javascript
try {
  const response = await zott.notifications.sendPushNotification({
    title: "string",
    body: "string",
    imageUrl: "string",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```
