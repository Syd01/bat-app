export default function generatePass(){
    let password:string = ''
    let characteres:String = 
    'Aa@$#123456789abcdefghijFGHIJKLMNOP!'
    let passWordLength=8

    for(let i = 0; i< 8; i++){
        password += characteres.charAt(
            Math.floor(Math.random() *characteres.length)
        )
    }

    return password
}