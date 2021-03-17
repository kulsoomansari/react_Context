import React, { createContext, useState } from 'react'
export const Context = createContext()
const Myfunc = (props) =>{
const [user, setuser] = useState([
    {name: 'kulsoom' },
    {name: 'aemon' },
    {name: 'fatima' }
])
    return(
    <Context.Provider value={[user, setuser]}>
    {props.children}
    </Context.Provider>
    )
}
export default Myfunc

