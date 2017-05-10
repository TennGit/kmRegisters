export default function addToTotal(value){
    return{
        type: "ADD",
        value,
    }
}

export function clearTotal(){
    return {
        type: "CLEAR"
    }
}