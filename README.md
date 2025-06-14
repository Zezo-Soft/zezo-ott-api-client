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
   1. [readContentAnalytics](doc/analytics.md#readContentAnalytics)
   1. [readUsersAnalytics](doc/analytics.md#readUsersAnalytics)
   1. [readContentReportAnalytics](doc/analytics.md#readContentReportAnalytics)
   1. [readRevenueAnalytics](doc/analytics.md#readRevenueAnalytics)
   1. [getTvodAnalytics](doc/analytics.md#getTvodAnalytics)

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
   1. [changePassword](doc/auth.md#changePassword)

1. [AuthMethods](doc/auth.methods.md#AuthMethods)

   1. [loginMethods](doc/auth.methods.md#loginMethods)
   1. [get](doc/auth.methods.md#get)
   1. [init](doc/auth.methods.md#init)
   1. [update](doc/auth.methods.md#update)

1. [Blogs](doc/blog.md#CategBlogsories)

   1. [get](doc/blog.md#get)

1. [Categories](doc/categories.md#Categories)

   1. [get](doc/categories.md#get)

1. [Contents](doc/content.md#Contents)

   1. [create](doc/content.md#create)
   1. [getManage](doc/content.md#getManage)
   1. [actions](doc/content.md#actions)
   1. [update](doc/content.md#update)
   1. [removeTitleImage](doc/content.md#removeTitleImage)
   1. [getSeasonManage](doc/content.md#getSeasonManage)
   1. [createSeason](doc/content.md#createSeason)
   1. [deleteSeason](doc/content.md#deleteSeason)
   1. [updateSeason](doc/content.md#updateSeason)
   1. [createEpisode](doc/content.md#createEpisode)
   1. [deleteEpisode](doc/content.md#deleteEpisode)
   1. [updateEpisode](doc/content.md#updateEpisode)
   1. [manageSubtitles](doc/content.md#manageSubtitles)
   1. [uploadImages](doc/content.md#uploadImages)
   1. [deleteImage](doc/content.md#deleteImage)
   1. [get](doc/content.md#get)
   1. [getSeasons](doc/content.md#getSeasons)
   1. [getIsContentBuyedOrRented](doc/content.md#getIsContentBuyedOrRented)
   1. [getTvod](doc/content.md#getTvod)
   1. [updateGeoLocation](doc/content.md#updateGeoLocation)

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

1. [Sections](doc/sections.md#Sections)

   1. [get](doc/sections.md#get)

1. [Countries](doc/countries.md#Countries)

   1. [init](doc/countries.md#init)
   1. [create](doc/countries.md#create)
   1. [get](doc/countries.md#get)
   1. [delete](doc/countries.md#delete)

1. [Users](doc/user.md#Users)

   1. [export](doc/user.md#export)
   1. [get](doc/user.md#get)
   1. [actions](doc/user.md#actions)
   1. [deleteUsers](doc/user.md#deleteUsers)
   1. [create](doc/user.md#create)
   1. [updateAvatar](doc/user.md#updateAvatar)
   1. [update](doc/user.md#update)
   1. [removeSession](doc/user.md#removeSession)
   1. [updateACL](doc/user.md#updateACL)
   1. [updateSubscription](doc/user.md#updateSubscription)

1. [Config](doc/config.md#Config)

   1. [create](doc/config.md#create)
   1. [get](doc/config.md#get)
   1. [update](doc/config.md#update)
   1. [delete](doc/config.md#delete)

1. [Upgrade](doc/upgrade.md#Upgrade)

   1. [autoSetupAcl](doc/upgrade.md#autoSetupAcl)

1. [Release Popup](doc/release.popup.md#ReleasePopup)

   1. [create](doc/release.popup.md#create)
   1. [update](doc/release.popup.md#update)
   1. [delete](doc/release.popup.md#delete)
   1. [get](doc/release.popup.md#get)

## Contributors

<a href="https://github.com/PukhrajDhamu" target="_blank">
    <img src="https://avatars2.githubusercontent.com/u/74310666?v=3" width="80" height="80">
</a>

## License: [mit](LICENSE)
