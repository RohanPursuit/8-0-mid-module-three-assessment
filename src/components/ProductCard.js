import formatPrice from '../helpers/formatPrice'
import products from '../data/productData'

const getProducts = () => {
    return products.map(({id, name, price, description, img}) => <div key={id}><h2>{name}</h2><p>Price: {formatPrice(price)}</p><img src={img} alt="" /><button type="submit">Add To Card </button><p>{description}</p></div>)
}

export default getProducts