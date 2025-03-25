# Analytics

## countView

```javascript
try {
  const payload = {
    content_id: "id",
    episode_id: "id",
    platform: "web",
  };
  const response = await zott.analytics.countView(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## countWatchTime

```javascript
try {
  const payload = {
    content_id: "id",
    episode_id: "id",
    time: 120, // 2 minutes
    platform: "web",
  };
  const response = await zott.analytics.countWatchTime(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
