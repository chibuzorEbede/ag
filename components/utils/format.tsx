export function formatNumber(number) {
    if (number >= 1000) {
        return number.toString().slice(0, 2)[0] + "." + number.toString().slice(0, 2)[1] + "k"
    } else { return number }
}


