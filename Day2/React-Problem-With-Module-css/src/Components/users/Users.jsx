import UserCard from "./UserCard";
import style from "./Users.module.css"
// This users list will be included in boilerplate;
const usersList = [
  {
    id: 1,
    name: "Chrisse",
    address: "4018 Sachs Trail",
    avatar: "https://placehold.co/200",
    posts: 1841,
    followers: 66868,
    isMarried: true,
  },
  {
    id: 2,
    name: "Chandler",
    address: "15 Yemem road, Yemen",
    avatar: "https://placehold.co/200",
    posts: 1433,
    followers: 20000,
    isMarried: false,
  },
];

const Users = () => {
  return (
    <div className={style.container} data-testid="users">
      {/* Add h3 tag here as per the problem statement*/}
      <h3 className={style.heading}>Users List</h3>

      {/* show users details here with the help of UserCard component here */}
      {
        usersList.map(function(element, index, usersList){
          return <UserCard data={element}/>
        })
      }

      {/* { 
        usersList.map((element, idx, array)=>(
          <UserCard data={element}/>
        ))
      } */}


    </div>
  );
};

export default Users;
