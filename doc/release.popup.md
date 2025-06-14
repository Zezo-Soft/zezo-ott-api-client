# Release Popup

## create

```javascript
try {
  const payload = {
    contentId: "id",
  };
  const response = await zott.releasePopup.create(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const payload = {
    contentId: "id",
  };
  const response = await zott.releasePopup.update(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.releasePopup.delete();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const response = await zott.releasePopup.get();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
