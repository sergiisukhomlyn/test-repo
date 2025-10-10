function fetchAndProcessJson(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            processFetchedData(jsonData);
            return jsonData;
        })
        .catch(error => {
            console.error('Error fetching or processing JSON:', error);
            throw error;
        });
}

function processFetchedData(data) {
    console.log('JSON data received and processed:', data);
    if (data && data.title) {
        console.log('Title from JSON:', data.title);
    }
}

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

fetchAndProcessJson(API_URL)
    .then(finalData => {
        console.log('Fetch completed successfully. Final data:', finalData);
    })
    .catch(error => {
        console.error('An error occurred during the fetch operation:', error);
    });
