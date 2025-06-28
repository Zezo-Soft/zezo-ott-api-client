# File Manager

## list

```javascript
try {
  const response = await zott.fileManager.list();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## createFolder

```javascript
try {
  const payload = {
    folderName: "test",
  };
  const response = await zott.fileManager.createFolder(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## delete

```javascript
try {
  const payload = {
    keys: ["test.txt"],
  };
  const response = await zott.fileManager.delete(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## initMultipartUpload

```javascript
try {
  const response = await zott.fileManager.initMultipartUpload("test.txt");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getMultipartPresignedUrl

```javascript
try {
  const payload = {
    file_key: "test.txt",
    upload_id: "id",
    parts: 1,
  };
  const response = await zott.fileManager.getMultipartPresignedUrl(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## finalizeMultipartUpload

```javascript
try {
  const payload = {
    file_key: "test.txt",
    upload_id: "id",
  };
  const response = await zott.fileManager.finalizeMultipartUpload(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## createUploadPresignedUrl

```javascript
try {
  const response = await zott.fileManager.createUploadPresignedUrl("test.txt");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getSignedUrl

```javascript
try {
  const response = await zott.fileManager.getSignedUrl("test.txt");
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getTranscoderSignUrl

```javascript
try {
  const response = await zott.fileManager.getTranscoderSignUrl("test.txt");
  console.log(response);
} catch (error) {
  console.log(error);
}
```
