# Settings

## getManage

```javascript
try {
  const response = await zott.settings.getManage();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## get

```javascript
try {
  const response = await zott.settings.get();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const payload = {
    name: "ZezoOTT",
    ...rest,
  };
  const response = await zott.settings.update(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateSocialMedia

```javascript
try {
  const formData = new FormData();
  formData.append("settings_id", "id");
  formData.append("action", "create");
  formData.append("name", "facebook");
  formData.append("link", "https://www.facebook.com/zezoott");
  formData.append("icon", file);
  const response = await zott.settings.updateSocialMedia(formData);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getSettings

```javascript
try {
  const response = await zott.settings.getSettings();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
