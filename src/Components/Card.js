import  {useState} from 'react'
import profile from './pics/Me.jpeg'
import "./Card.css";
import Count from './Count';

const Card =() =>{
    
    const [name, setName] = useState("My name is Bonnie");

    const handleName = () => {
       setName("My name is Bonnie");
    }

    const handleJob = () => {
        setName("I'm a Frontend Developer");
        
    }

     const [count, setCount] = useState(0)

     const handleCount = () => {
         setCount(count + 1);
     }

    return (
        <>
        <section className="card">
            <img className="profile-pic" src={profile} alt="user profile" />
            <h1>Hi!</h1>
            <h3>{name}</h3>
            

            <div className="buttons">
                <button onClick={handleName} className="name-btn">Name</button>
                <button onClick={handleJob} className="skills-btn">Skills</button>

            </div>
            <div className="likes">
                
                <span>{count}</span><i onClick={handleCount} class="far fa-heart"></i> 
            </div>

            <div className="links">
                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a> 
                <a href="https://github.com/lowe-bl"><i class="fab fa-github"></i></a>
            </div>
            
        </section>
        <Count />
        
        </>
    )
}

export default Card
