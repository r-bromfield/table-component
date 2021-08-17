import './StatusBadge.css'

const StatusBadge = (props)=>{
    const classes = 'statusbadge '+props.className    
    return(
        <span className={classes}>
            {props.status}
        </span>
    );
}

export default StatusBadge;