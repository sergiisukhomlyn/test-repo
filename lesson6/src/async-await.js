async function fetchAndProcessData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function processFetchedData(data) {
    if (data) {
        console.log('Processing fetched data:', data);
        if (data.title) {
            console.log('Title:', data.title);
        }
    } else {
        console.log('No data to process.');
    }
}

async function main() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const fetchedData = await fetchAndProcessData(apiUrl);

    if (fetchedData) {
        processFetchedData(fetchedData);
    } else {
        console.log('Failed to fetch data, cannot process.');
    }
}

main();
