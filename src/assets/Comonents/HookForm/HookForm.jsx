import useInputState from "../../../hooks/useInputState";

const HookForm = () => {

    const [name, setNameChange] = useInputState('rojoni');

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    const handleNameChange = e =>{
        setNameChange(e);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" required />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={'SUBMIT'} />
            </form>
        </div>
    );
};

export default HookForm;