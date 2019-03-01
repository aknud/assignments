import React from "react";
import {Link} from "react-router-dom"
import products from './products.json'

const Services = () => {
    console.log(products)
    let mappedProducts = products.map(product => <Link to={`/products/${product._id}`} key={product._id}><li>{product.name}</li></Link>)
    return (
        <div className="services">
            <div className="services-box">
                <h1>Services</h1>
                <h2>We Are Your Trusted Residential Plumber!</h2>
                <p>Matey careen galleon lass salmagundi overhaul pirate bilged on her anchor bring a spring upon her cable loot. Me splice the main brace rutters gangplank list sutler loot hempen halter Blimey Admiral of the Black. Galleon boatswain Barbary Coast execution dock gally holystone cackle fruit measured fer yer chains hardtack lanyard.</p>
                <h2>Products</h2>
                <ul>
                    {mappedProducts}
                </ul>
                <p>Cutlass boatswain fore log lee clap of thunder long boat bilge water pinnace chantey. Loaded to the gunwalls gally blow the man down bilge rope's end bilge water ye mizzenmast lateen sail rigging. Buccaneer Nelsons folly hornswaggle heave down bilge league careen furl Shiver me timbers Jack Ketch.</p>
            </div>
            
        </div>
    )
}

export default Services