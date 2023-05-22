import accounts from '../data/accounts.json'

export function SectionAccounts(){
    return(
        <section>
            <h1>Listado de usuarios</h1>
            {accounts.map(accounts =>(
                <div className='card' key={accounts.account}>
                    <h2>{accounts.userName}</h2>
                    <a href={`https://twitter.com/${accounts.account}`}>Perfil de Twitter</a>

                </div>
            ))}
        </section>
        
    )
}