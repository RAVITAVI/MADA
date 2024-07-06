import React, { useState } from 'react';

const TeslaQuiz = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const checkSolution = () => {
    if (input1.toLowerCase() === 'ניקולה' && input2.toLowerCase() === 'טסלה') {
      setModalText("כל הכבוד! פתרת את החידה נכון.");
      setShowVideo(true);
    } else if (input1.toLowerCase() === 'ניקולה' || input2.toLowerCase() === 'טסלה') {
      setModalText("אתם כמעט שם...");
      setShowVideo(false);
    } else {
      setModalText("נסו שנית");
      setShowVideo(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowVideo(false);
  };

  return (
    <div dir="rtl" className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 text-right p-4">
      <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-indigo-800">חידודי מדע</h1>
        <img 
          src="https://drive.google.com/uc?export=view&id=1107eMQbnvCVBdCbx0SgRxrhy5ILe7uzV" 
          alt="חידת ניקולה טסלה"
          className="w-full h-auto rounded-lg mb-8 shadow-md"
        />
        <div className="flex justify-center mb-6 space-x-4">
          <input
            type="text"
            maxLength={6}
            placeholder="6 תווים"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="text-lg p-2 w-28 text-center border-2 border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            maxLength={4}
            placeholder="4 תווים"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="text-lg p-2 w-28 text-center border-2 border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={checkSolution}
          className="text-lg px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          בדוק פתרון
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full mx-auto relative">
            <button 
              onClick={closeModal} 
              className="absolute top-2 left-2 text-2xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              &times;
            </button>
            <p className="text-xl mb-4 text-center font-semibold text-indigo-800">{modalText}</p>
            {showVideo ? (
              <div className="aspect-w-16 aspect-h-9 mt-4">
                <iframe
                  src="https://www.youtube.com/embed/mCQZO7J8FaI"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-md"
                ></iframe>
              </div>
            ) : (
              <button
                onClick={closeModal}
                className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                נסה שוב
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeslaQuiz;
