interface DisplayProps{
    value: string
}

export default function({value}: DisplayProps){
    return(
        <div className="text-slate-200 text-4xl p-5 w-full bg-slate-700">{value}</div>
    )
}