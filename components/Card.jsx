export default function Card({ data }) {
 
  return (
    
      <div  className="user-card " >

        <img src ={`https://robohash.org/${data.id}`} alt="robot-pic" style={{width: "200px", height: "300px",objectFit:"cover"}}></img>
        <h3>{data.name}</h3>
        <h4>{data.email}</h4>
        <h4>{data.phone}</h4>
      </div>
    

  );
}
