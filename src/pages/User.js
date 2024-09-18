import { useParams } from "react-router-dom";

//params

function User() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      User <div>{params.id}</div>
    </div>
  );
}

export default User;
