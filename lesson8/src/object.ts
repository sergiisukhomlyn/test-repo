interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users: User[] = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

class BriefUser {
    fullName: string;
    contactInfo: string;
    companyName: string;
    addressSummary: string;

    constructor(user: User) {
        this.fullName = `${user.name} (${user.username})`;
        this.contactInfo = `Email: ${user.email}, Phone: ${user.phone}`;
        this.companyName = user.company.name;
        this.addressSummary = `${user.address.street}, ${user.address.city}`;
    }
}

function convertUsersToBriefUsers(users: User[]): BriefUser[] {
    return users.map(user => new BriefUser(user));
}

(async () => {
    const users = await fetchUsers();
    if (users.length > 0) {
        console.log('Fetched Users (first one):', users[0]);
        const briefUsers = convertUsersToBriefUsers(users);
        console.log('Converted Brief Users (first one):', briefUsers[0]);
    }     else {
        console.log('No users fetched or an error occurred.');
    }
})();

