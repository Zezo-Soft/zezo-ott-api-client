# App Settings

## update

```javascript
try {
  const payload = {
    width: 100,
    height: 100,
    screenTime: 100,
    fullscreen: true,
    resizeMode: "contain",
    type: "image",
    backgroundTransparent: true,
    backgroundColor: "#000000",
  };
  const response = await zott.appSettings.update(payload, "app_splesh_screen");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getAndroidVersion

```javascript
try {
  const response = await zott.appSettings.getAndroidVersion();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getPagesList

```javascript
try {
  const response = await zott.appSettings.getPagesList();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updatePages

```javascript
try {
  const payload = [
    {
      icon: "https://example.com/icon.png",
      name: "Home",
      slug: "home",
      color: "#ffffff",
    },
    {
      icon: "https://example.com/icon.png",
      name: "Settings",
      slug: "settings",
      color: "#ffffff",
    },
  ];
  const response = await zott.appSettings.updatePages(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getSettings

```javascript
try {
  const response = await zott.appSettings.getSettings();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateTheme

```javascript
try {
  const payload = {
  name: "string",
  type: "string",
  status: true,
  colors: {
    primary: "string",
    onPrimary: "string",
    ...restColors
  };
  }
  const response = await zott.appSettings.updateTheme("id", payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## initTheme

```javascript
try {
  const response = await zott.appSettings.initTheme();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getThemeManage

```javascript
try {
  const response = await zott.appSettings.getThemeManage();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getThemes

```javascript
try {
  const response = await zott.appSettings.getThemes();
  console.log(response);
} catch (error) {
  console.log(error);
}
```
