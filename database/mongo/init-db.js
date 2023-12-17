db.createUser({
    user: 'admin',
    pwd: 'adminPassword123',
    roles: [
        {
            role: 'readWrite',
            db: 'APIBL2_DB'
        },
    ],
});

db = db.getSiblingDB('APIBL2_DB');

db.createCollection('INSURANCES');

db.INSURANCES.insertMany([
    {
        name: 'insurance 1',
        address: 'addres 1',
        phone: '+456 4536764',
        email: 'ensurance1@ensurance.com',
        postal_code: 2345,
    }
]);