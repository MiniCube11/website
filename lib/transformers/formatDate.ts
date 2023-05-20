const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const timestampToDate = ({
    timestamp = "",
    includeDay = false,
}) => {
    const [year, month, day] = timestamp.split("-");
    let formattedMonth = months[parseInt(month)-1];

    const formatted = includeDay ? `${formattedMonth} ${day}, ${year}` : 
    `${formattedMonth} ${year}`;

    return formatted;
};