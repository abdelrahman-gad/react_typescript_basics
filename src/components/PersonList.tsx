type PersonListProps = {
    names:{
        first:string,
        last:string
    } []
}


const PersonList  = (props:PersonListProps) =>{
   const names  = props.names;
  return <div>
             {
                 names.map((name)=>{
                   return (<h3 key={name.first}>  {name.first } {name.last} </h3>)  
                 })
             }
             
     </div>
}


export default PersonList;