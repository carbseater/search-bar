export interface User {
    id: number;
    name: string;
    email: string;
    isSelected?: boolean;
}
export const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
    { id: 5, name: 'Eva Wilson', email: 'eva.wilson@example.com' },
    { id: 6, name: 'Mike Davis', email: 'mike.davis@example.com' },
    { id: 7, name: 'Sara Miller', email: 'sara.miller@example.com' },
    { id: 8, name: 'Alex Turner', email: 'alex.turner@example.com' },
    { id: 9, name: 'Emily White', email: 'emily.white@example.com' },
    { id: 10, name: 'Chris Harris', email: 'chris.harris@example.com' },
];