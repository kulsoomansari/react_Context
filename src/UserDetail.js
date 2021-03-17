import React,{useContext} from 'react'
import { Context } from './Context'

function UserDetail() {
const context = useContext(Context)
var user = context[0]
console.log(context)
    return (
        <div>
{user.map((item, ind) =>{
  return <li key={ind}> Name: {item.name} </li>
})}
        </div>
    )
}

export default UserDetail
