import React from 'react';

const PreviewCard = ({ type }) => {
  return (
    <div className="p-5 bg-white shadow-xl rounded-md h-full flex flex-col items-center justify-center">
      {type === 'user' && (
        <>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.3333 56V50.6667C53.3333 47.8377 52.2095 45.1246 50.2091 43.1242C48.2087 41.1238 45.4956 40 42.6667 40H21.3333C18.5043 40 15.7912 41.1238 13.7909 43.1242C11.7905 45.1246 10.6667 47.8377 10.6667 50.6667V56"
              stroke="#607485"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32 29.3333C37.891 29.3333 42.6667 24.5577 42.6667 18.6667C42.6667 12.7756 37.891 8 32 8C26.109 8 21.3333 12.7756 21.3333 18.6667C21.3333 24.5577 26.109 29.3333 32 29.3333Z"
              stroke="#607485"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[#051A2E] text-xs font-normal mt-6">
            View a selected user’s full details here
          </p>
        </>
      )}

      {type === 'post' && (
        <>
          {/* // post svg icon */}
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.56246 25.125H33.7708C34.7258 25.125 35.5 25.8992 35.5 26.8542C35.5 27.7296 34.8493 28.4531 34.0055 28.5677L33.7708 28.5833H9.56246C8.60748 28.5833 7.83329 27.8091 7.83329 26.8542C7.83329 25.9788 8.48381 25.2553 9.32782 25.1407L9.56246 25.125ZM33.7708 32.0417H9.56246L9.32782 32.0573C8.48381 32.1719 7.83329 32.8954 7.83329 33.7708C7.83329 34.7258 8.60748 35.5 9.56246 35.5H33.7708L34.0055 35.4843C34.8493 35.3697 35.5 34.6463 35.5 33.7708C35.5 32.8159 34.7258 32.0417 33.7708 32.0417ZM42.4166 7.25695C42.4166 3.75532 39.578 0.916672 36.0763 0.916672H7.2569C3.75527 0.916672 0.916626 3.75532 0.916626 7.25695V36.0764C0.916626 39.5781 3.75527 42.4167 7.2569 42.4167H36.0763C39.578 42.4167 42.4166 39.5781 42.4166 36.0764V7.25695ZM7.2569 4.37501H36.0763C37.6681 4.37501 38.9583 5.66529 38.9583 7.25695V36.0764C38.9583 37.6682 37.6681 38.9583 36.0763 38.9583H7.2569C5.66524 38.9583 4.37496 37.6682 4.37496 36.0764V7.25695C4.37496 5.66529 5.66524 4.37501 7.2569 4.37501Z"
              fill="#607485"
            />
          </svg>
          <p className="text-[#051A2E] text-xs font-normal mt-6">
            View a selected post’s full details here
          </p>
        </>
      )}
    </div>
  );
};

export default PreviewCard;