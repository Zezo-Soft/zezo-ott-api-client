# @zezosoft/zezo-ott-api-client 🎬

## installing

```bash
npm install --save @zezosoft/zezo-ott-api-client@latest
```

## using

### typescript

```typescript
import { ZezoOTT } from "@zezosoft/zezo-ott-api-client";
const zott = new ZezoOTT({ baseUrl: "your-base-url" });

const main = async () => {
  const data = await zott.settings.getSettings();
  console.log(data);
};

main();
```

### javascript/nodejs

```javascript
const { ZezoOTT } = require("@zezosoft/zezo-ott-api-client");
const zott = new ZezoOTT({ baseUrl: "your-base-url" });

const main = async () => {
  const data = await zott.settings.getSettings();
  console.log(data);
};

main();
```

## contributors

<a href="https://github.com/PukhrajDhamu" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/74310666?v=3" width="80" height="80">
</a>

## license: [mit](LICENSE)
