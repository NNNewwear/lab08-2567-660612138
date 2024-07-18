import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";

export default function Home() {
  const task = [
    {id: 1, title: "Read a book", isDone: true},
    {id: 2, title: "Take a shower", isDone: false},
    {id: 3, title: "Sleep", isDone: false},
  ];
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />

        <div>
          {task.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* //footer section */}
      <Footer year='2024' fullName="Kantapong Temeesak" studentId='660612138'/>
    </div>  
  );
}
