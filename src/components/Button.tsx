
interface ButtonProps{
    label: string;
    isTriple?: boolean;
    isDouble?: boolean;
    color?: string;
    onClick?: (label: string) => void
}
export default function({label, isTriple, isDouble, color, onClick}: ButtonProps){

    if(isDouble=== true && isTriple === true){
        return null
    }

    return(
        <button onClick={() => onClick && onClick(label)} className={
            `w-full h-full 
            min-h-20 min-w-20 
            ${color? color: "bg-slate-500"}
            grid 
            text-3xl
            text-slate-300
            place-items-center border 
            border-slate-600 
            ${isTriple? "col-span-3": ""} 
            ${isDouble? "col-span-2": ""}
            `}>
            {label}
        </button>
    )
}