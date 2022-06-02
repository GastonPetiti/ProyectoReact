
const ItemDetail = ({name,description}) =>{

    console.log(name,description)

    return (
        <div className="itemDetail">
            <h1>Detalle</h1>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}
export default ItemDetail