type GreetProps={
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}

 const  Greet = (props:GreetProps) => {
    const {messageCount=0} = props;  
    return (
        <div>
            {props.isLoggedIn ?  <h1>Welcome {props.name} You have {messageCount} unread messages </h1> : <h1>Please Login </h1>}
           
        </div>
    );
}

export default Greet;