# User Histry

## get

```javascript
try {
  const response = await zott.history.get();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const payload = {
    content_id: "abc123", // Required: ID of the content
    type: "movie", // Required: 'movie' | 'series'
    currentTime: 120, // Required: Time watched in seconds
    duration: 5400, // Required: Total content duration
    completed: false, // Required: true if fully watched
    season_number: 1, // Optional (for series)
    episode_number: 2, // Optional (for series)
    current_episode: "epId123", // Optional (for series)
  };
  const response = await zott.history.update(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
