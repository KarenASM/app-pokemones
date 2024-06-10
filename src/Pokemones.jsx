function Pokemones(props){
    return(
        <div>
            {props.pokemones.map((datospokemones)=>(
                <div>
                    <h1>{datospokemones.nombre}</h1>
                    <img src={datospokemones.img}/>

                </div>
            ))}
        </div>
    );
}

export default Pokemones;