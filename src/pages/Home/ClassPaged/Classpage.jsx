import ClassesCard from "../../../assets/components/ClassesCard";
import useAllClasses from "../../../hooks/useAllClasses";

const Classpage = () => {
  const [users] = useAllClasses();
  const approvedClass = users.filter((user) => user.status === "approved");
  console.log(approvedClass);
  return (
    <div>
      <h2 className="text-center text-3xl py-10 text-gray-500">
        --- All Classes ---
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10">
        {approvedClass.map((cls) => (
          <ClassesCard key={cls._id} data={cls}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classpage;
