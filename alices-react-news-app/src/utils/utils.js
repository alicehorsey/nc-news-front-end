export const formatDate = (timeStamp) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(timeStamp).toLocaleDateString(options)
}