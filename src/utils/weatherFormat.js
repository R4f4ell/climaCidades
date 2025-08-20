export function getIconUrl(iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
}

export function roundTemp(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return value;
    return Math.round(Number(value));
}

export function buildWeatherAlt(desc) {
    const d = (desc || "").toString().trim();
    return d ? `Ícone representando o clima: ${d}` : "Ícone representando o clima atual";
}
