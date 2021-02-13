export const isSameDate = (date1: Date, date2: Date) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

export const showDate = (date: Date): string => {
  const year = date.getFullYear()
  const month =
    date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  const day = date.getDate() > 8 ? date.getDate() + 1 : `0${date.getDate() + 1}`
  return `${day}-${month}-${year}`
}
