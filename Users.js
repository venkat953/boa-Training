

import User from './User';


export default function Users(props){
        return (
            <div>
                {
                    props.udata.map((data) => <User key={data} newdata={data} duser={props.du} />)
                }
                <div>
                    <button onClick={props.da} disabled={!props.hasData}>Delete all</button>
                </div>
            </div>
        );
    }

