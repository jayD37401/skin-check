export default function Appointment(props) {
  const hasEnded = props.status === "ended";
  const inProgress = props.status === "inProgress";
  const notStarted = props.status === "scheduled";
  console.log(props, "propsss1");

  const appointmentDetails = (
    <div
      className="border p-3 rounded-lg mt-3"
      data-testid="appointmentDetails"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <div className="font-medium leading-loose">
          {props.patient && <p>Patient</p>}
          <p>Time</p>
          <p>Purpose</p>
        </div>
        <div className="leading-loose">
          {props.patient && <p>{props.patient}</p>}
          <p>{props.time}</p>
          <p>{props.purpose}</p>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-wrap gap-1 items-center">
        <button
          className="border rounded-lg px-2 mr-3 hover:bg-gray-50"
          title="Delete appointment"
          onClick={props.onDelete}
          data-testid="deleteButton"
        >
          <i className="fa-regular fa-trash text-sm text-red-500"></i>
        </button>
        {props.patient && (
          <button
            className="border rounded-lg px-2 mr-3 hover:bg-gray-50"
            title="View patient"
          >
            <i className="fa-regular fa-user text-sm text-sky-500"></i>
          </button>
        )}
        <button
          className="border rounded-lg px-2 mr-auto hover:bg-gray-50"
          title="Edit appointment"
        >
          <i className="fa-regular fa-pen-to-square text-sm text-blue-500"></i>
        </button>
        {!hasEnded && (
          <button
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={notStarted ? props.onStart : props.onEnd}
          >
            {notStarted ? "Begin" : "End"} Appointment
          </button>
        )}
      </div>
    </div>
  );

  function getStatusColor() {
    if (hasEnded) {
      return "bg-slate-300";
    }
    if (inProgress) {
      return "bg-green-600";
    }
    if (notStarted) {
      return "bg-blue-500";
    }
  }

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-12 p-2 cursor-pointer border hover:border-gray-200 rounded-lg ${
          props.isSelected ? "border-solid" : "border-transparent"
        } ${props.className}`}
        onClick={() => props.onSelect(props)}
        data-testid="appointmentContainer"
      >
        <div className="sm:col-span-2 flex items-center">
          <div
            className={`${getStatusColor()} rounded-full p-1.5 mr-2`}
            data-testid="statusIndicator"
          ></div>
          <strong>{props.time}</strong>
        </div>
        <span className="sm:col-span-9">{props.patient}</span>
        <button className="sm:col-span-1 border rounded-lg text-blue-500 hover:bg-gray-50">
          <i
            className={`fa-solid fa-chevron-down ${
              props.isSelected ? "rotate-180" : ""
            } transition-transform`}
          />
        </button>
      </div>
      {props.isSelected && appointmentDetails}
    </>
  );
}
