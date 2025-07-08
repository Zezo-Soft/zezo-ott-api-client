# Favorites

## addToFavorites

```javascript
try {
  const payload = {
    id: "1",
  };
  const response = await zott.favorites.addToFavorites(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getIsFavorite

```javascript
try {
  const payload = {
    id: "1",
  };
  const response = await zott.favorites.getIsFavorite(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## removeFromFavorites

```javascript
try {
  const payload = {
    id: "1",
  };
  const response = await zott.favorites.removeFromFavorites(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getFavorites

```javascript
try {
  const response = await zott.favorites.get();
  console.log("Favorite Items:", response.data);
} catch (error) {
  console.log("Error fetching favorites:", error);
}
```
