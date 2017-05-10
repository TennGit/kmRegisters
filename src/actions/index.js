const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let now = new Date();

export default function addToTotal(value){
    return{
        type: "ADD",
        currentValue: value,
    }
}

export function addToTable(value){
    let now = new Date();
    return{
        type: "ADD_TO_TABLE",
        currentValue: value,
        date:days[now.getDay()]
    }
}

export function clearTotal(){
    return {
        type: "CLEAR"
    }
}