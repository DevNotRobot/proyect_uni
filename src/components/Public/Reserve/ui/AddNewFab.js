import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../../../actions/ui";

export const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleClickNew = () => {
    dispatch(uiOpenModal());
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 ">
        <button
          className="bg-purple-600 rounded-full h-14 w-14 flex items-center justify-center"
          onClick={handleClickNew}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    </>
  );
};
