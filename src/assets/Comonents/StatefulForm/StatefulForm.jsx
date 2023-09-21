import { useState } from "react";

const StatefulForm = () => {

    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email , password);
        if(password.length <6 ) setError('password should be minimum 6 character or number');
        else setError('');
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" required/>
                <br />
                <input onChange={handleEmailChange} type="email" name="email"/>
                <br />
                <input onChange={handlePasswordChange} type="password" name="password"/>
                <br />
                <input type="submit" value={'SUBMIT'} />
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default StatefulForm;