export const convertDate = (dateStr, time) => {
    const date = new Date(dateStr);
    const formattedDateTime = date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
    const formattedDate = date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const new_date = time ? formattedDateTime : formattedDate;

    return new_date;
};
