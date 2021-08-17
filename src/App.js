import './App.css'
import Table from './components/table/Table'
function App() {
  const data = [
    {
      id:1,
      employee: "Victor Pacheco",
      department: "Sales",
      salary: "$4,00,000.00",
      paydate: "Yesterday",
      payStatus: "PENDING",
      details: "Capture payment details",
    },
    {
      id:2,
      employee: "Charlotte Spencer",
      department: "Support",
      salary: "$95,000.00",
      paydate: "In 2 days",
      payStatus: "PENDING",
      details: "No remarks",
    },
    {
      id:3,
      employee: "Annette Black",
      department: "Design",
      salary: "$95,000.00",
      paydate: "22/02/2021",
      payStatus: "FAILED",
      details: "Please forward this information to...",
    },
    {
      id:4,
      employee: "Jerome Bell",
      department: "Sales",
      salary: "$85,000.00",
      paydate: "22/02/2021",
      payStatus: "DONE",
      details: "Request confirmation.",
    },
    {
      id:5,
      employee: "Jenny Wilson",
      department: "Sales",
      salary: "$34,000.00",
      paydate: "22/02/2021",
      payStatus: "DONE",
      details: "No remarks",
    },
    {
      id:6,
      employee: "Albert Flores",
      department: "Sales",
      salary: "$22,000.00",
      paydate: "22/02/2021",
      payStatus: "DONE",
      details: "No Received confirmation",
    },
    // {
    //   id:6,
    //   employee: "Arlene McCoy",
    //   department: "Sales",
    //   salary: "$95,000.00",
    //   paydate: "22/02/2021",
    //   payStatus: "DONE",
    //   details: "Submitted a report",
    // },
  ];
  return (
   <div>
     <Table
          data={data}
      />
   </div>
  );
}

export default App;
