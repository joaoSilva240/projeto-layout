import './css/UserIcon.css'

const UserIcon = (props) => {
    if(props.nUser){
        return(
            <div className="user--icon" style={
                {
                    borderColor: props.bColor,
                    backgroundColor: props.bColor,
                    filter: "saturate(0.8) brightness(1.1)"
                }
            }>
                <h1>+{props.qntUser}</h1>
                
            </div>
        )
    } else {
        return(
            <div className="user--icon" style={
                {
                    borderColor: props.bColor,
                    backgroundColor: props.bColor

                }
            }>
                <img src="https://placehold.co/40x40" alt='user perfil'></img>
                
            </div>
        )
    }
}

export default UserIcon