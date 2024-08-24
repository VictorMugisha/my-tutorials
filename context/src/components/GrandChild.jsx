import { UserContext } from "../context";
import { useContext } from "react";

const GrandChild = () => {
    const { user, setUser } = useContext(UserContext)
    return <div>
        GrandChild: Hello, {user}!
        <button onClick={() => {setUser("Victor")}}>Change User</button>
    </div>;
};

export default GrandChild;