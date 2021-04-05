import React, { useState, useEffect, useRef } from "react";

function shuffle(array) {
  for (var i = 0; i < array.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (array.length - i));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

export default function Home() {
  const movies = {
    "👦👴🚗⏱": "back to the future",
    "👸🌹🐻": "beauty and the beast",
    "🌃🇫🇷🗼": "midnight in paris",
    "👸🐸👑": "princess and the frog",
    "5️⃣0️⃣0️⃣☀️❤️": "500 days of summer",
    "👨🏻👨🏻❤️🗻": "brokeback mountain",
    "🐳➡🌊": "free willy",
    "⚡️👦🔨": "thor",
    "👨🏻🎤": "bohemian rhapsody",
    "🐼👊": "kung fu panda",
    "👦💍➡️🌋": "lord of the rings",
    "👽📞👦🚲🌕": "et",
    "🍴🙏❤️": "eat, pray, love",
    "👑💬🎙": "the king's speech",
    "🐍✈️": "snakes on a plane",
    "🐛🐜🐞": "a bug's life",
    "📱🍎": "jobs",
    "⏰🔧🍊": "a clockwork orange",
    "💍📺": "the ring",
    "👦✂️🙌": "edward scissorhands",
    "🌍🙈🙊🙉": "planet of the apes",
    "👦🍫🏭": "charlie and the chocolate factory",
    "🛳🧊": "titanic",
  };

  const [answer, setAnswer] = useState(undefined);
  const [randomIndex, setRandomIndex] = useState(0);
  const [random_keys, setRandomKeys] = useState(undefined);

  const formRef = useRef();

  useEffect(() => {
    setRandomKeys(shuffle(Object.keys(movies)));
  }, []);

  const guess = (event) => {
    event.preventDefault();

    const guess = event.target.name.value.toLowerCase().trim();
    const is_correct = guess === movies[random_keys[randomIndex]];

    setAnswer(is_correct);

    if (is_correct) {
      setRandomIndex(randomIndex + 1);
    }

    formRef.current.reset();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      {randomIndex === Object.keys(movies).length && (
        <h1 className="m-2 text-8xl py-7 md:text-8xl text-green-600">
          You win! 🎉
        </h1>
      )}
      {randomIndex !== Object.keys(movies).length && (
        <>
          <h1 className="m-2 text-3xl py-7 md:text-6xl">Guess the 🎞</h1>
          <h1 className="m-2 text-5xl py-7 tracking-[0.2em] md:text-9xl ">
            {random_keys && random_keys[randomIndex]}
            {random_keys === undefined && " "}
          </h1>
          <div className="flex item-center px-8 mt-10 ">
            <form onSubmit={guess} ref={formRef}>
              <input
                placeholder="Which movie?"
                className="p-2 text-center bg-gray-100 text-gray-600 m-2"
                id="name"
              />
              <button className="px-8 p-2 text-xl font-bold text-gray-800">
                Guess!
              </button>
            </form>
          </div>
          <div className="m-8 p-1">
            <p className="text-gray-500">
              {`You got ${randomIndex} of ${Object.keys(movies).length} right.`}
            </p>
            {answer === undefined && (
              <>
                <p className="text-gray-600">You can do it 💪</p>
                <p className="text-white">!</p>
              </>
            )}
            {answer === true && (
              <>
                <p className="text-green-600">Correct ☑️</p>
                <p className="text-gray-200">Now try this one 🙈</p>
              </>
            )}
            {answer === false && (
              <>
                <p className="text-red-600">Incorrect 🚽</p>
                <p className="text-gray-200">Try Again...</p>
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
}
