# Transcoding

## create

```javascript
try {
  const response = await zott.transcoding.create({
    name: "test",
    input:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## list

```javascript
try {
  const response = await zott.transcoding.list();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.transcoding.delete("transcodingId123");
  console.log(response);
} catch (error) {
  console.log(error);
}
```
