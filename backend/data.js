import bcrypt from 'bcryptjs';
const data = {

    users: [
    {
        name: 'Chanakya',
        email: '123@gmail.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin:true,
    },
    {
        name: 'Amila',
        email: 'amila@gmail.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin:false,
    },

    ],
  
    products : [
        {
            _id: '1',
            name: 'Nike Slim shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 500,
            countInStock: 10,
            brand: 'Nike',
            rating: 3,
            numReviews: 10,
            description: 'high quality brand products',
        },    {
            _id: '2',
            name: 'Adidas Tshirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 100,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4,
            numReviews: 20,
            description: 'high quality brand products',
        },    {
            _id: '3',
            name: 'Lacoste Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 140,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 5,
            numReviews: 11,
            description: 'high quality brand products',
        },    {
            _id: '4',
            name: 'Nike Slim pants',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 100,
            countInStock: 5,
            brand: 'Nike',
            rating: 3,
            numReviews: 4,
            description: 'high quality brand products',
        },   

        {
            _id: '5',
            name: 'Puma',
            category: 'Pants',
            image: '/images/p1.jpg',
            price: 100,
            countInStock: 6,
            brand: 'Puma',
            rating: 4,
            numReviews: 10,
            description: 'high quality brand products',
        },
        {
            _id: '6',
            name: 'Adidas Fit pants',
            category: 'Pants',
            image: '/images/p1.jpg',
            price: 140,
            countInStock: 7,
            brand: 'Adidas',
            rating: 4,
            numReviews: 3,
            description: 'high quality brand products',
        },


    ],
};

export default data;