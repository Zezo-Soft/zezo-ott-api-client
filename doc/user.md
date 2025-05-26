# Users

## export

```javascript
try {
  const query = {
    from: "2023-01-01T00:00:00.000Z",
    to: "2023-02-01T00:00:00.000Z",
    format: "csv",
    select: "name,email,phone,role,status,createdAt,updatedAt", // this is available on future versions
  };
  const response = await zott.users.export(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
