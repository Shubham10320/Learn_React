const UserCard = (props) => {
  const {id, name, address, avatar, posts, followers, isMarried}=props.data;

  function handleAlertBox(name){
    alert(`You are now following ${name}`);
  }


  return <div data-testid="user-card" key={id}  style={{border:"1px solid black", width:"96%", margin:"auto"}}>
<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{marginRight:"20px"}}>
      <img src={avatar} alt={name} style={{borderRadius:"50%"}} />
    </div>
    
    <div style={{width:"30%"}} >
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div> 
          <h3>Posts</h3>
          <p data-testid="user_posts">{posts}</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p data-testid="user_followers">{followers}</p>
        </div>
        <div>
          <h3>Married</h3>
          <p data-testid="is-married">{isMarried ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>

    <button onClick={()=>{handleAlertBox(name)}}>Follow</button>
</div>
  
  </div>;
};

export default UserCard;
