import '../css/Style.css'

export default function Heading1({ name, nickName }){
    return(
        <h3 className="hh3"> Hey {name} {nickName && <span> A.K.A {nickName}</span>}, How are you doing?</h3>
    )        
}
