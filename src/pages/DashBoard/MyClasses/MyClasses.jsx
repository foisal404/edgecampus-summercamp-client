import useClasses from "../../../hooks/useClasses";


const MyClasses = () => {
    const [classes]=useClasses();
    console.log(classes);
    return (
        <div>
            my
        </div>
    );
};

export default MyClasses;