import { useEffect, useState } from 'react'
import { Users } from './../../../api/api'

export default function TableBody(){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(()=>{
        getUser()
    },[]);

    const getUser = async () =>{
      await Users.get(`/users`)
        .then(res => {
            setUser(res.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
    }
    return(
      <>
        <tbody>
            {loading ? (
                <div>loading....</div>
              ) : error ? (
                <div>error...</div>
              ) : (
                user.map((data)=>(
      			    <tr key={data.id}>
      			    	<td>{data.name}</td>
      			    	<td>{data.username}</td>
      			    	<td>{data.email}</td>
      			    	<td>{data.phone}</td>
      			    	<td>{data.address.city}</td>
      			    	<td>{data.address.street}</td>
      			    </tr>
                    ))
                )
            }
        </tbody>
        </>
    )
}