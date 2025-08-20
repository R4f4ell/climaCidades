export function hasWeatherPayload(obj) {
    return !!(obj && obj.weather && obj.weather[0] && obj.main);
}

export function hasForecastItem(item) {
    return !!(item && item.weather && item.weather[0] && item.main);
}