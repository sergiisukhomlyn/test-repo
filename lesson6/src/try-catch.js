async function makeResilientRequest(nonExistentServiceUrl, existentServiceUrl) {
    try {
        await fetch(nonExistentServiceUrl);
        throw new Error('Unexpected success: Request to non-existent service returned a response.');
    } catch (error) {
        console.warn(`Initial request to ${nonExistentServiceUrl} failed or was unexpected: ${error.message}. Retrying with ${existentServiceUrl}.`);

        try {
            const response = await fetch(existentServiceUrl);
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Could not parse error response.' }));
                throw new Error(`Server returned an error: ${response.status} ${response.statusText} - ${errorData.message || 'Unknown error'}`);
            }

            const data = await response.json();

            if (data && data.status === 'error' && data.code === 'INVALID_RESOURCE') {
                throw new Error('Custom Error: Invalid resource specified in the existent service response.');
            }

            return data;
        } catch (fallbackError) {
            throw new Error(`Failed to retrieve data from existent service: ${fallbackError.message}`);
        }
    }
}

const nonExistentUrl = 'http://localhost:3000/non-existent-service';
const existentUrl = 'http://localhost:3000/existent-service';

makeResilientRequest(nonExistentUrl, existentUrl)
    .then(data => console.log('Successful response:', data))
    .catch(error => console.error('Request failed:', error.message));
