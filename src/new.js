// Get the current date
const today = new Date();

// Set the target date to April 4th of this year
const targetDate = new Date(today.getFullYear(), 3, 4); // Month is zero-based, so April is represented as 3

// Calculate the time difference in milliseconds
const timeDiff = today.getTime() - targetDate.getTime();

// Convert the time difference to days
const daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

console.log(`Number of days since April 4th: ${daysPassed}`);
