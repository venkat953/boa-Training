

export default function UserAction (props){
    
        return (
            <div>
                <button disabled={!props.hasData}>do something</button>
            </div>
        );
    
}