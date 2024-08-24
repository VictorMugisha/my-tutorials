import GrandChild from "./GrandChild";

const Child = () => {
    return (
        <div>
            Child Component
            <GrandChild />
        </div>
    );
};

export default Child;