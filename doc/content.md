# Contents

## get

```javascript
try {
  const query = qs.stringify(
    {
      slug: "slug",
      ...rest,
    },
    {
      addQueryPrefix: true,
    }
  );
  const response = await zott.contents.get(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getSeasons

```javascript
try {
  const query = qs.stringify(
    {
      id: "id",
      ...rest,
    },
    {
      addQueryPrefix: true,
    }
  );
  const response = await zott.contents.getSeasons(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getIsContentBuyedOrRented

```javascript
try {
  const contentId = "id";
  const response = await zott.contents.getIsContentBuyedOrRented(contentId);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getTvod

```javascript
try {
  const query = qs.stringify(
    {
      ...yourQuery,
    },
    {
      addQueryPrefix: true,
    }
  );
  const response = await zott.contents.getTvod(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
