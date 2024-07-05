import './stylepoke.css'

function Pokemones(props){
    return(
        <div className="pokemones-container">
            <h1 className="title">Pokemones Legendarios</h1>
            {props.pokemones.map((datospokemones, index)=>(
                <div key={index} className="card">
                    <h1 className='card_content'>{datospokemones.nombre}</h1>
                    <img className='card_content_img' src={datospokemones.img} alt={datospokemones.nombre}/>

                </div>
            ))}
        </div>
    );
}

export default Pokemones;