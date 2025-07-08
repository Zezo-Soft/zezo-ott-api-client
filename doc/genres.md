# Genres

## create

```javascript
try {
  const response = await zott.genres.create({
    name: "test",
    description: "test description",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.genres.update({
    name: "test",
    description: "test description",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const response = await zott.genres.delete(["id1", "id2"]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## actions

```javascript
try {
  const response = await zott.genres.actions({
    ids: ["id1", "id2"],
    action: "public",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## listManage

```javascript
try {
  const response = await zott.genres.listManage();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## list

```javascript
try {
  const response = await zott.genres.list();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
