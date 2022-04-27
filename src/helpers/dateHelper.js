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
    const today = new Date()

    let y, m, d, h, min, sec
    y = today.getFullYear()
    m = today.getMonth()
    d = today.getDate()
    h = today.getHours()
    min = today.getMinutes()
    sec = today.getSeconds()

    return `${d} ${months[m]} ${y} в ${h}:${min}:${sec}`
}