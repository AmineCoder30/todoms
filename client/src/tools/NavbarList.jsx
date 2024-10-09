const dt = new Date();
const month = dt.getMonth() + 1;
const navbarList = [
  {
    name: "all",
    value: "all",
  },
  {
    name: "today",
    value: `${month}/${dt.getDate()}`,
  },

  {
    name: "status",
    value: "pending",
  },
  {
    name: "status",
    value: "In progress",
  },
  {
    name: "status",
    value: "complete",
  },
  {
    name: "priority",
    value: "low priority",
  },
  {
    name: "priority",
    value: "medium priority",
  },
  {
    name: "priority",
    value: "high priority",
  },
];
export default navbarList;
