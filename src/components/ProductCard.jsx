import React, { useState } from 'react';
import './ProductCard.css';


let accumulatedInfo = '';
let accumulatedTotalPrice = 0;

const ProductCard = ({ product }) => {
    const [clickCount, setClickCount] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [hasClicked, setHasClicked] = useState(false);

    const handleIncrementClick = () => {
        setClickCount(clickCount + 1);
        setSelectedProducts([...selectedProducts, product]);
        const updatedTotalPrice = totalPrice + product.price;
        setTotalPrice(updatedTotalPrice);

        accumulatedInfo += `${product.name} - ${product.price} ETH\n`;
        accumulatedTotalPrice = updatedTotalPrice;

        setHasClicked(true);
    };

    const handleDecrementClick = () => {
        if (clickCount > 0) {
            if (clickCount > 1) {
                const confirmUndo = Swal.fire({
                    icon: 'error',
                    title: 'Borraste un sticker...',
                    text: '¿Estas seguro que queres eliminarlo del carrito?',

                })
                if (!confirmUndo) {
                    return;
                }
            }



            setClickCount(clickCount - 1);
            setSelectedProducts(selectedProducts.slice(0, selectedProducts.length - 1));
            const updatedTotalPrice = totalPrice - product.price;
            setTotalPrice(updatedTotalPrice);

            accumulatedInfo = accumulatedInfo.replace(`${product.name} - ${product.price} ETH\n`, '');
            accumulatedTotalPrice = updatedTotalPrice;

            setHasClicked(true);
        }



        const handleComprameClick = () => {
            if (selectedProducts.length > 0) {
                const accumulatedInfo = selectedProducts.map(item => `${item.name} - ${item.price} ETH`).join('\n');
                const accumulatedTotalPrice = totalPrice;

                const confirmationMessage = `Tu compra ya casi está lista:\n\nPRODUCTOS | PRECIOS:\n${accumulatedInfo}\nSUBTOTAL:  ${accumulatedTotalPrice} ETH`;

            } else {
                alert('Primero cargar stickers a tu carrito');
            }
        };



        if (clickCount === 1) {
            accumulatedInfo = '';
            accumulatedTotalPrice = 0;
            setHasClicked(false);
            Swal.fire({
                icon: 'error',
                title: 'No cargaste ningun sticker...',
                text: 'Presiona el boton "+" para agregar a tu carrito',

            })
        }
    };

    const handleComprameClick = () => {
        if (accumulatedInfo) {
            Swal.fire({
                text: 'YA CASI TENEMOS TUS STICKERS!',
                title: `<p>${accumulatedInfo}<p>SUBTOTAL:  ${accumulatedTotalPrice} ETH`,
                showCancelButton: true,
                confirmButtonText: 'OK',

            }).then((result) => {
                if (result.isConfirmed) {
                    // Mostrar la alerta estándar después de hacer clic en "OK" en la alerta de SweetAlert
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Felicitaciones tu compra fue exitosa',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            });


        } else {
            alert('Sos un capo paa');
        }
    };

    return (
        <div className="product-card">
            <img src={product.photo} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">
                {product.price} ETH <i className={product.icon}></i>
            </p>
            <button type="button" className="nes-btn is-primary comprame-btn" onClick={handleIncrementClick}>
                +
            </button>

            <button type="button" className="nes-btn is-error comprame-btn" onClick={handleDecrementClick}>
                -
            </button>
            <button
                type="button"
                className="nes-btn is-warning comprame-btn"
                onClick={handleComprameClick}
                disabled={!hasClicked}
            >
                $Buy
            </button>
        </div>
    );
};

export default ProductCard;
