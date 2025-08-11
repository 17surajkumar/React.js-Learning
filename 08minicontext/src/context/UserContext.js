import React from 'react'

const UserContext = React.createContext()


export default UserContext;

//Har ek context ek provider hota hai (wrapper provide krte hain)

// user context ke andar jitne bhi component hai wo us value jo UserContext provide kar raha hai usko use kr sakte hain
/*
<UserContext>
<Login/>
<Card/>
</UserContext>
*/
 