//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("output");
    const loadingRow = document.createElement("tr");
    loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
    tableBody.appendChild(loadingRow);

    function getRandomTime() {
        return Math.random() * 2000 + 1000; // Random time between 1 and 3 seconds
    }

    const promises = [
        new Promise(resolve => {
            const time = getRandomTime();
            setTimeout(() => resolve({ name: "Promise 1", time: (time / 1000).toFixed(3) }), time);
        }),
        new Promise(resolve => {
            const time = getRandomTime();
            setTimeout(() => resolve({ name: "Promise 2", time: (time / 1000).toFixed(3) }), time);
        }),
        new Promise(resolve => {
            const time = getRandomTime();
            setTimeout(() => resolve({ name: "Promise 3", time: (time / 1000).toFixed(3) }), time);
        })
    ];

    const startTime = performance.now();

    Promise.all(promises).then(results => {
        const endTime = performance.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(3);
        
        tableBody.innerHTML = ""; // Remove loading text

        results.forEach(result => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${result.name}</td><td>${result.time} sec</td>`;
            tableBody.appendChild(row);
        });

        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td>Total</td><td>${totalTime} sec</td>`;
        tableBody.appendChild(totalRow);
    });
});
