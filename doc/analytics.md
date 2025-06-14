# Analytics

## countView

```javascript
try {
  const payload = {
    content_id: "id",
    episode_id: "id",
    platform: "web",
  };
  const response = await zott.analytics.countView(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## countWatchTime

```javascript
try {
  const payload = {
    content_id: "id",
    episode_id: "id",
    time: 120, // 2 minutes
    platform: "web",
  };
  const response = await zott.analytics.countWatchTime(payload);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## readContentAnalytics

```javascript
try {
  const query = {
    timePeriod: "today",
    startDate: "2022-01-01",
    endDate: "2022-01-01",
    content_id: "id",
  };
  const response = await zott.analytics.readContentAnalytics(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## readUsersAnalytics

```javascript
try {
  const query = {
    timePeriod: "today",
    startDate: "2022-01-01",
    endDate: "2022-01-01",
  };
  const response = await zott.analytics.readUsersAnalytics(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## readContentReportAnalytics

```javascript
try {
  const response = await zott.analytics.readContentReportAnalytics();
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## readRevenueAnalytics

```javascript
try {
  const query = {
    timePeriod: "today",
    startDate: "2022-01-01",
    endDate: "2022-01-01",
  };
  const response = await zott.analytics.readRevenueAnalytics(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```

## getTvodAnalytics

```javascript
try {
  const query = {
    timePeriod: "today",
  };
  const response = await zott.analytics.getTvodAnalytics(query);
  console.log(response);
} catch (error) {
  console.log(error);
}
```
