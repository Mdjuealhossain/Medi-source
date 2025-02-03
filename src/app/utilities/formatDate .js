export const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    // Format the date (e.g., 11 May, 2024)
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    // Format the time (e.g., 6:32 PM)
    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return { formattedDate, formattedTime };
};
