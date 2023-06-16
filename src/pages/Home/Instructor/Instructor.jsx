import InstructorCard from "../../../assets/components/InstructorCard";
import useAllUsers from "../../../hooks/useAllUsers";

const Instructor = () => {
  const [users] = useAllUsers();
  const instructors = users.filter((user) => user.role === "instructor");
  // console.log(instructors);
  return (
    <div>
      <h2 className="text-center text-3xl py-10 text-gray-500">--- All Instructors ---</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-10 gap-y-20 py-10">
        {instructors.map((instra) => (
          <InstructorCard key={instra._id} data={instra}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
