
export default function User(props) {
    const delUser = (e) => {
        //e.preventDefault()
        //const data = e.target.elements.uname.value
        //alert('user is added' + data)
        props.duser(props.newdata);
    }
    return (
        <div>
            {props.newdata}
            <button onClick={delUser} > delete</button>
        </div>
    );
}