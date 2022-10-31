import React, { useState, useEffect } from "react";
import { getTopic } from "./api/getTopic";
import {
  BsEmojiSmile,
  BsFillPlusSquareFill,
  BsChatLeftTextFill,
} from "react-icons/bs";
import PantipLogo from "./Pantip_Logo.png";
function App() {
  const [loadMore, setLoadMore] = useState(10);
  const [listTopic, setListTopic] = useState([]);
  const [last_id, setLast_Id] = useState("");
  useEffect(() => {
    getTopic(setListTopic, loadMore, setLast_Id);
  }, [loadMore]);

  function HandleLoadMore() {
    if (last_id !== null) {
      setLoadMore((load) => load + 10);
    }
  }

  return (
    <div className="bg-sky-800 min-h-screen">
      <div className="flex justify-center p-6">
        <img src={PantipLogo} alt="fireSpot" width={400} height={320} />
      </div>
      {listTopic.length === 0 ? (
        <span className="text-white text-2xl font-bold flex justify-center ">No Topic</span>
      ) : (
        <>
          <div className="flex justify-end mx-16">
            <button
              className={`${
                last_id !== null
                  ? "hover:bg-sky-800 active:bg-sky-900"
                  : "bg-gray-500 text-gray-400"
              } bg-sky-600 w-8 h-8 text-2xl rounded-full mb-2`}
              disabled={last_id === null && true}
              onClick={HandleLoadMore}
            >
              +
            </button>
          </div>
          {listTopic.map((list, index) => {
            return (
              <div className="mx-16 last:pb-6" key={list.topic_id}>
                <div className="bg-blue-900 p-1.5 ">
                  <div className="flex flex-row items-center my-1">
                    <span className="text-yellow-400 mr-2 text-2xl">
                      <BsEmojiSmile />
                    </span>
                    <span className="text-white text-xl">{list.title}</span>
                  </div>
                  <span className="text-gray-400">ท่องเที่ยว ที่พัก</span>
                  <div className="flex flex-row justify-between">
                    <div className="my-1 text-blue-200">
                      {index % 2 === 0 ? (
                        <span>{list.topic_id}</span>
                      ) : (
                        <span>{list.author}</span>
                      )}
                    </div>
                    <div className="flex flex-row text-gray-400">
                      <div className="flex flex-row items-center ml-2">
                        <span className="mr-1">
                          <BsChatLeftTextFill />
                        </span>
                        <span>{list.comment_count}</span>
                      </div>
                      <div className="flex flex-row items-center mx-2">
                        <span className="mr-1">
                          <BsFillPlusSquareFill />
                        </span>
                        <span>{list.vote_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
