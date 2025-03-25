#Digital Clock - JavaScript

A simple **digital clock** that displays the current **time and date** based on the user's local timezone. The clock updates every **second**.

🔗 **Live Demo:** [Click Here](https://koushik-chowdhury.github.io/Cohort/mini%20projects/digital%20clock/)

---

## Features

- [x] Displays **live time** in `HH:MM:SS` format  
- [x] Adjusts to the **user’s local timezone**  
- [x] Shows the **date** in `Weekday, Month Day, Year` -format  
- [x] Updates **automatically every second**

---

## Code Explanation

### **1. Function: `updateTime()`**

The `updateTime` function updates the **clock** and **date** every second.

#### **Steps:**

1.  **Selects the DOM elements**
    - `time`: Displays the live time.
    - `date`: Displays the formatted date.
2.  **Gets the user's timezone** using:

    ```js
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    ```
3.  **Creates a Date object from the local time:** using:
    ```js
    const now = new Date(localTime);
    ```
4.  **Formats the time (12-hour format):** using
    ```js
    const hour = now.getHours() % 12 || 12;
    const minute = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    ```
5.  **Formats the date using toLocaleDateString():**
    ```js
    // weekday[short,narrow,long],
    // month[short,narrow,long]
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const dateString = now.toLocaleDateString(undefined, options);
    ```
6.  **Updates the HTML content:**
    ```js
    time.textContent = `${hour}:${minute}:${seconds}`;
    date.textContent = `${dateString}`;
    ```