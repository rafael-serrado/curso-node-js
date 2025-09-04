export function sum (n1, n2){
    return n1 + n2
}
export function sub (n1, n2){
    return n1 - n2
}
export function mult (n1, n2){
    return n1 * n2
}
export function div (n1, n2){
    if(n2 == 0){
        console.log('Impossivel dividir por ZERO!')
    }
    return n1 / n2
}