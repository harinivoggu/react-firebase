
import { useEffect, useState } from 'react';
import './App.css';
import {db} from './firebase';
import {collection, getDocs, addDoc,updateDoc, doc, deleteDoc} from 'firebase/firestore';
function App() {
    const [newname, setnewname]= useState("")
    const [newage, setnewage]=useState(0)

    const [users, setUsers] = useState([]);
    const usercollectionref= collection(db,"table");

    const deleteuser = async (id) => {
      const current=doc(db,"table",id)
      await deleteDoc(current);
      window.location.reload();
    }

    const updateuserage = async (id) => {
      const current=doc(db,"table",id)
      await updateDoc(current, {age: newage});
      window.location.reload();
    }
    const updateusername = async (id) => {
      const current=doc(db,"table",id)
      await updateDoc(current, {Name: newname});
      window.location.reload();
    }
    const createuser =  async () => {
      await addDoc(usercollectionref, {Name: newname, age: newage});
      window.location.reload();
    }
    useEffect(() => {
      const getUsers= async () => {
          const data = await getDocs(usercollectionref);
          setUsers(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
      };
      getUsers();
    },
    []);



   return( <div className="App">
     <h1>Create user</h1>
     <input placeholder=" name " onChange={(event) => {setnewname(event.target.value);}}/>
     <input type= "number" placeholder="age  "onChange={(event) => {setnewage(event.target.value);}}/>
     <button onClick={createuser}>create user</button>
     {users.map((user) => {
       return (
         <div>
           {" "}
           <h1> Name: {user.Name}</h1>
           <h1>age: {user.age}</h1>
           <input placeholder=" edit name " onChange={(event) => {setnewname(event.target.value);}}/>
           <button onClick={() => { 
             updateusername(user.id)}}>edit name</button>
           <input placeholder=" edit age " onChange={(event) => {setnewage(event.target.value);}}/>
           <button onClick={() => { 
             updateuserage(user.id)}}>edit age</button>
           <button onClick={() => {
             deleteuser(user.id)}}>delete</button>
        </div>
       );
     })}
   </div>
  );
}

export default App;
