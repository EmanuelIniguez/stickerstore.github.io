import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';


const products = [
    {
        id: 1,
        name: 'Cyberpunk',
        price: 3.75,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/1263bb2c-6ec8-427f-8a6f-f886247ae5f9%2Fccdb7096-b8cf-4d0c-bf6d-3c264efe3d78.png',
        icon: "nes-icon coin is-small"

    },
    {
        id: 2,
        name: 'Lofi Mood',
        price: 0.85,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/ded98e4d-a631-41b2-b0b4-b9e0330afe03%2F58f4ea7f-7d87-482a-adb8-d4c6fd4f7a30.png',
        icon: "nes-icon coin is-small"
    },

    {
        id: 3,
        name: ' Super hero 1',
        price: 1.25,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/64fbb741-7759-47e5-b793-ceeb185392cc%2Ff0161a02-f194-40e6-9798-c9da57bb89c2.png',
        icon: "nes-icon coin is-small"
    },

    {
        id: 2,
        name: 'Super hero 2',
        price: 2.15,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/64fbb741-7759-47e5-b793-ceeb185392cc%2Fcd507bc4-9faf-4bdf-a92c-71f845a50478.png',
        icon: "nes-icon coin is-small"
    },
    {
        id: 3,
        name: 'Pixel Art 1',
        price: 4.50,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/876a3d2f-08f1-46d8-9886-c47797613ada%2F13703640-1885-40d9-8152-1ac44d350f43.png',
        icon: "nes-icon coin is-small"
    },
    {
        id: 4,
        name: 'Pixel Art 2',
        price: 1.80,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/876a3d2f-08f1-46d8-9886-c47797613ada%2F5e3ca679-9c62-45ea-aadc-9f15824f86ef.png',
        icon: "nes-icon coin is-small"
    },
    {
        id: 5,
        name: 'Fantastic',
        price: 5.30,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/cb2f02cf-3b0d-4e75-b1f0-34e3dc877014%2Fd255722c-e4e3-4529-a61e-819801731902.png',
        icon: "nes-icon coin is-small"
    },
    {
        id: 6,
        name: 'GTA V',
        price: 6.75,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/8ee7d866-1810-4efe-9908-6361f4bf0f34%2Fef26990d-f24f-4a49-8097-8b4cf3e9a0a1.png',
        icon: "nes-icon coin is-small"
    },

    {
        id: 7,
        name: 'Retro Future',
        price: 3.10,
        photo: 'https://cdn-vana.com/cdn-cgi/image/width=640,format=auto,quality=80/https://storage.googleapis.com/vana-jobs-output/f3e6f797-5993-450c-84a9-89e0f6a5459c%2F88822849-532e-4a9c-b887-b2639e77c189.png',
        icon: "nes-icon coin is-small"

    },

];

const App = () => {
    return (
        <div className="app">
            <h2 className='title'>Sticker Store</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default App;

