export const getStatsByMonth = (diaries, currentMonth) => {
    const stats = { '😆': 0, '😭': 0, '😡': 0, '🫩': 0, '😌': 0};

    Object.keys(diaries).forEach((date) => {
        if (date.startsWith(currentMonth)) {
            const mood = diaries[date];
            if (stats[mood] !== undefined) stats[mood]++;
        }
    });

    return stats;
};