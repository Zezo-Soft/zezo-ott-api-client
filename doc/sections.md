# Sections

## create

```javascript
try {
  const response = await zott.sections.create({
    name: "Section 1",
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getManage

```javascript
try {
  const query = {
    page: 1,
    limit: 10,
  };
  const response = await zott.sections.getManage(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## deleteSection

```javascript
try {
  const response = await zott.sections.deleteSection("sectionId");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateStatus

```javascript
try {
  const response = await zott.sections.updateStatus({
    id: "sectionId",
    status: true,
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateOrder

```javascript
try {
  const response = await zott.sections.updateOrder([
    "sectionId1",
    "sectionId2",
  ]);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## update

```javascript
try {
  const response = await zott.sections.update({
    id: "sectionId",
    type: "slider",
    content_ids: ["contentId1", "contentId2"],
  });
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## createSectionStyle

```javascript
try {
  const payload = {
    name: "test section",
    style_key: "test type",
    description: "test description",
    android: {
      status: true,
      available: true,
    },
    ios: {
      status: true,
      available: true,
    },
    tv: {
      available: true,
      status: true,
    },
    web: {
      available: true,
      status: true,
    },
  };
  const response = await zott.sections.createSectionStyle(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## deleteSectionStyle

```javascript
try {
  const ids = ["sectionStyleId1", "sectionStyleId2"];
  const response = await zott.sections.deleteSectionStyle(ids);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## updateSectionStyle

```javascript
try {
  const payload = {
    name: "test section",
    style_key: slugify("test type", { lower: true, trim: true }),
    description: "text style",
    ios: {
      status: true,
      available: false,
      style_preview_image: "https://test.com/test_update.png",
    },
    android: {
      status: true,
      available: false,
      style_preview_image: "https://test.com/test_update.png",
    },
    tv: {
      status: true,
      available: false,
      style_preview_image: "https://test.com/test_update.png",
    },
    web: {
      status: true,
      available: false,
      style_preview_image: "https://test.com/test_update.png",
    },
  };
  const response = await zott.sections.updateSectionStyle(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getSectionStyles

```javascript
try {
  const response = await zott.sections.getSectionStyles();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

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
