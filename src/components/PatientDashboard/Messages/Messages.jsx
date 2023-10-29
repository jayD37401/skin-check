import { useState, useEffect } from "react";
import MessageThreadList from "./MessageThreadList";
import MessageThread from "./MessageThread";
import avatarPerson from "../../../assets/doctor.jpg";
import PatientLookup from "./PatientLookup";
import PatientPhoto from "./PatientPhoto";

// Static data representing threads
const staticThreads = [
  {
    patient: {
      _id: "1",
      name: "Hassan Ali",
      // Add other properties as needed
    },
    messages: [
      {
        id: "1",
        content: "Hello, I am your Skin Specialist",
        // Add other properties as needed
      },

      // Add other messages as needed
    ],
  },
  {
    patient: {
      _id: "2",
      name: "Abaid Daud",
      // Add other properties as needed
    },
    messages: [
      {
        id: "1",
        content: "Hello Patient",
        // Add other properties as needed
      },
      // Add other messages as needed
    ],
  },
  // Add other threads as needed
];

export default function Messages() {
  const [threads, setThreads] = useState(staticThreads);
  const [activeThreadId, setActiveThreadId] = useState(
    staticThreads[0]?.patient._id
  );
  const [showNewThread, setShowNewThread] = useState(false);

  const activeThread = threads?.find(
    (thread) => thread.patient._id === activeThreadId
  );
  const [selectedMessageThread, setSelectedMessageThread] = useState(null);

  function startNewThread() {
    setShowNewThread(true);
    setActiveThreadId(null);
  }

  function endNewThread(event) {
    event.stopPropagation();
    setShowNewThread(false);
    setActiveThreadId(threads[0]?.patient._id);
  }

  function addThread(patient) {
    const existingThread = threads.find(
      (thread) => thread.patient._id === patient._id
    );

    if (existingThread) {
      setActiveThreadId(existingThread.patient._id);
      setShowNewThread(false);
      return;
    }

    const newThread = {
      patient,
      messages: [],
    };

    setThreads((prevThreads) => [newThread, ...prevThreads]);
    setActiveThreadId(newThread.patient._id);
    setShowNewThread(false);
  }

  function addMessage(newMessage) {
    const updatedThread = {
      ...activeThread,
      messages: [...activeThread.messages, newMessage],
    };

    setThreads((prevThreads) => [
      updatedThread,
      ...prevThreads.filter((thread) => thread.patient._id !== activeThreadId),
    ]);
  }

  const newThread = (
    <>
      <div
        className={`flex items-center space-x-4 p-3 rounded cursor-pointer ${
          activeThread ? "" : "bg-blue-400"
        }`}
        onClick={() => setActiveThreadId(null)}
      >
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={avatarPerson}
            alt="User avatar"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p
            className={`font-medium truncate dark:text-white ${
              activeThread ? "text-gray-900" : "text-white"
            }`}
          >
            New Message
          </p>
        </div>
        {threads?.length > 0 && !activeThread && (
          <button
            className="dark:text-white text-white"
            onClick={endNewThread}
            data-testid="closeNewThreadButton"
          >
            x
          </button>
        )}
      </div>
      {threads?.length > 0 && <hr />}
    </>
  );

  return (
    <>
      <section className="h-full min-h-[50vh] grid grid-cols-1  gap-1 shadow-lg rounded-lg">
        {selectedMessageThread === null ? (
          <div className="bg-white p-4 sm:pl-6 rounded ">
            <h2 className="text-2xl font-semibold border-b-2 pt-2 pb-3">
              Chats
            </h2>
            <div className="flex justify-start mb-2">
              {/* <button
            className="hover:bg-slate-100 px-2 py-1 rounded"
            onClick={startNewThread}
            data-testid="newThreadButton"
          >
          <i className="far fa-edit  text-slate-500 text-lg"></i>
        </button> */}
            </div>
            {showNewThread && newThread}
            {threads && (
              <MessageThreadList
                threads={threads}
                activeThread={activeThread}
                onSelect={(selectedThreadId) => {
                  setActiveThreadId(selectedThreadId);
                  setSelectedMessageThread(selectedThreadId);
                }}
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex bg-white p-4 rounded">
              <button
                className=""
                onClick={() => setSelectedMessageThread(null)}
              >
                <i className="fa fa-arrow-left  text-slate-500 text-lg mr-4"></i>
              </button>
              {activeThread?.patient ? (
                <div className="flex items-center">
                  <PatientPhoto {...activeThread.patient} />
                  <span className="ml-2">{activeThread.patient.name}</span>
                </div>
              ) : (
                <PatientLookup
                  placeholder="Choose recipient"
                  onSelect={(selectedPatient) => addThread(selectedPatient)}
                />
              )}
              <button className="ml-auto">
                {" "}
                <i className="fa fa-video text-blue-500 mr-2 "></i>
              </button>
            </div>
            <MessageThread
              {...activeThread}
              onSendMessage={addMessage}
              className="grow mt-1"
            />
          </div>
        )}
      </section>
    </>
  );
}
