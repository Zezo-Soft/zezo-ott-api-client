# Sections

## get

```javascript
try {
  const query = qs.stringify({
    page: 1,
    limit: 10,
  });
  const response = await zott.sections.get(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
