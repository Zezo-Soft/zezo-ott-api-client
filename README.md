# @zezosoft/zezo-ott-api-client 🎬

## installing

```bash
npm install --save @zezosoft/zezo-ott-api-client@latest
```

## Using

### Typescript

```typescript
import { ZezoOTT } from "@zezosoft/zezo-ott-api-client";
const zott = new ZezoOTT({ baseUrl: "your-base-url" });

const main = async () => {
  const data = await zott.settings.getSettings();
  console.log(data);
};

main();
```

### Javascript/Nodejs

```javascript
const { ZezoOTT } = require("@zezosoft/zezo-ott-api-client");
const zott = new ZezoOTT({ baseUrl: "your-base-url" });

const main = async () => {
  const data = await zott.settings.getSettings();
  console.log(data);
};

main();
```

## Docs

1. [Analytics](doc/analytics.md#Analytics)

   1. [countView](doc/analytics.md#countView)
   1. [countWatchTime](doc/analytics.md#countWatchTime)

1. [Auth](doc/auth.md#Auth)
   1. [sendOTP](doc/auth.md#sendOTP)
   1. [login](doc/auth.md#login)
   1. [verifyOTP](doc/auth.md#verifyOTP)
   1. [signUp](doc/auth.md#signUp)
   1. [forgotPassword](doc/auth.md#forgotPassword)
   1. [resetPassword](doc/auth.md#resetPassword)
   1. [whoami](doc/auth.md#whoami)
   1. [logout](doc/auth.md#logout)
   1. [removeSession](doc/auth.md#removeSession)

## Contributors

<a href="https://github.com/PukhrajDhamu" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/74310666?v=3" width="80" height="80">
</a>

## License: [mit](LICENSE)
