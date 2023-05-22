import products from '../data/products.json'


export function SetionProductos(){
    return(
    <section>
        <h1>Seccion de Productos</h1>
        {products.map(product=>(
            <div className='card' key={product.id}>
                <h2>{product.nombre}</h2>
                <p>{product.precio}</p>
                <p>{product.descripcion}</p>
            </div>
            
        ))}
    </section>

        )
        
}