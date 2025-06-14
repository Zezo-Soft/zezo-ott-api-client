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

## get

```javascript
try {
  const query = {
    page: 1,
    limit: 10,
  };
  const response = await zott.users.get(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## actions

```javascript
try {
  const payload = {
    id: ["id"],
    action: "activate",
  };
  const response = await zott.users.actions(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## deleteUsers

```javascript
try {
  const response = await zott.users.deleteUsers(["id"]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## create

```javascript
try {
  const payload = {
    name: "name",
    email: "email",
    password: "password",
    role: "user",
  };
  const response = await zott.users.create(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateAvatar

```javascript
try {
  const formData = new FormData();
  formData.append("avatar", avatar);
  const response = await zott.users.updateAvatar("id", formData);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const payload = {
    id: "id",
    name: "name",
    email: "email",
  };
  const response = await zott.users.update(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## removeSession

```javascript
try {
  const payload = {
    sid: "sid",
    user_id: "user_id",
  };
  const response = await zott.users.removeSession(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateACL

```javascript
try {
  const payload = {
    id: "id",
    acl: ["acl"],
  };
  const response = await zott.users.updateACL(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateSubscription

```javascript
try {
  const payload = {
    user_id: "user_id",
    subscription_id: "subscription_id",
    action: "add",
  };
  const response = await zott.users.updateSubscription(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
