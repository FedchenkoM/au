export const currentDateToString = () => {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сенятбря',
        'октября',
        'ноября',
        'декабря'
    ]

    let today, y, m, d, h, min, sec

    today = new Date()
    y = today.getFullYear()
    m = today.getMonth()
    d = today.getDate()
    h = today.getHours()
    min = today.getMinutes()
    sec = today.getSeconds()

    return `${d} ${months[m]} ${y} в ${h}:${min}:${sec}`
}