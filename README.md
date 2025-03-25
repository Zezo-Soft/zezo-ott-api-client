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

1. [AuthMethods](doc/auth.methods.md#AuthMethods)

   1. [loginMethods](doc/auth.methods.md#loginMethods)

1. [Blogs](doc/blog.md#CategBlogsories)

   1. [get](doc/blog.md#get)

1. [Categories](doc/categories.md#Categories)

   1. [get](doc/categories.md#get)

1. [Contents](doc/content.md#Contents)

   1. [get](doc/content.md#get)
   1. [getSeasons](doc/content.md#getSeasons)
   1. [getIsContentBuyedOrRented](doc/content.md#getIsContentBuyedOrRented)
   1. [getTvod](doc/content.md#getTvod)

1. [Favorite](doc/favorite.md#Favorites)

   1. [addToFavorites](doc/favorite.md#addToFavorites)
   1. [getIsFavorite](doc/favorite.md#getIsFavorite)
   1. [removeFromFavorites](doc/favorite.md#removeFromFavorites)

1. [Payments](doc/payments.md#Payments)

   1. [checkout](doc/payments.md#checkout)
   1. [ready](doc/payments.md#ready)

1. [Settings](doc/settings.md#Settings)

   1. [getSettings](doc/settings.md#getSettings)

1. [Subscriptions](doc/subscriptions.md#Subscriptions)

   1. [get](doc/subscriptions.md#get)

## Contributors

<a href="https://github.com/PukhrajDhamu" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/74310666?v=3" width="80" height="80">
</a>

## License: [mit](LICENSE)
