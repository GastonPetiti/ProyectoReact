const ItemDetail = ({name,description}) =>{

    return (
        <div className="itemDetail">
            <h2>Detalle</h2>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}
export default ItemDetail