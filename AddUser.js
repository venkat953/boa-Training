

const AddUser=(props) =>{
    const addUser = (e) => {
        e.preventDefault()
        const data = e.target.elements.uname.value
        //alert('user is added' + data)
        props.adduser(data);
    }

    return (
        <div>
            <form onSubmit={addUser}>
                User Name:<input type="text" name="uname"></input>
                <button >Add User</button>
            </form>
        </div>
    );

}

export default AddUser