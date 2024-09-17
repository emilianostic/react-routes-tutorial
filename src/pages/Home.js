import { Link } from "react-router-dom";

const userId = 10

function Home() {
    return (
     
        <div>
            <h1>Aplicacion</h1>
            <Link to={`/users/${userId}`}> Usuarios</Link>

        </div>
         
     
    );
  }
  
  export default Home;