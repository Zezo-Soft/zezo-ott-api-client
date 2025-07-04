# Reels

## create

```javascript
try {
  const response = await zott.reels.create({
    name: "test reel",
    description: "test description",
    tags: ["tag1", "tag2"],
    thumbnail: File,
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.reels.update("reelId123", {
    name: "test reel",
    description: "test description",
    tags: ["tag1", "tag2"],
    thumbnail: File,
    content: "content",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## actions

```javascript
try {
  const response = await zott.reels.actions({
    action: "active", // "active" | "inactive" | "trash" | "pending" | "blocked"
    ids: ["reelId123", "reelId456"],
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.reels.delete(["reelId123"]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## list

```javascript
try {
  const response = await zott.reels.list();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## feed

```javascript
try {
  const response = await zott.reels.feed();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
