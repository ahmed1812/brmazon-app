import React from 'react'

function CartScreen(props){
    const ProductId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1
    return (
        <div>
            cart screen
        </div>
    )
}

export default CartScreen