import users from '../data/users.json'

export function SectionUsers(){
    return(
        <section>
            <h1>Seccion Usuarios</h1>
            {users.map(user =>(
                <div className='card' key={user.email}>
                    <h2>{user.apodo}</h2>
                    <h3>Mascotas del usuario</h3>
                    <ol>
                        {user.mascotas.map(mascota=>(
                         <li key={mascota.nombre}> 
                            {mascota.nombre} | Edad: {mascota.edad} : {mascota.color}
                         </li>
                        ))}
                    </ol>
                </div>
            ))}
            
        </section> 
)

}