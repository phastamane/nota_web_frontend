import { Input } from "@heroui/react"
import {Button} from "@heroui/react"
export default function Auth(){
    
    
    async function connect() {
       const result = await fetch("http://localhost:8000/auth/login", {method: 'POST'})
       console.log(result)
    }

    return(
        <>
        
            <div className="grid grid-rows-4 gap-5 mt-10">
                <h1 className="justify-self-center">Auth</h1>
                <Input label="Email" type="email" className="max-w-sm justify-self-center"/>
                <Input label="Enter your password" type="password" className="max-w-sm justify-self-center"/>
                <Button className="justify-self-center" onClick={connect}>Войти</Button>
            </div>

        </>
    )
}