export const validate = ( {
    name,
    email,
    message,
} : {
    name: string
    email: string
    message: string
}) => {
    const errors: {name ?: string; email ?: string; message ?:string} = {}
    if(!name || name.trim() === ''){
        errors.name = 'Name is required'
    }

    if(!email || email.trim() === ''){
        errors.email = 'Email is required'
    } else if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)){
        errors.email = 'invalid email address'
    }if(!message || message.trim() === ''){
        errors.message = 'Message is required'
    }

    return errors
}