type StatusProps = {
    status: 'loading' | 'error' | 'success'
}

const Status = (props:StatusProps) =>{

    let message ;
    if(props.status=='loading'){
        message= 'Loading...';
    }else if (props.status== 'success') {
        message= 'Data Fetched Successfully'
    }else if(props.status=='error'){
        message= 'Error in fetching data';
    }
     
    return <div>
        <h1> Status {message}  </h1>
    </div>
}

export default Status;