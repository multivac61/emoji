import React, { useState, useEffect, useRef } from "react";

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
  "👑💬🎙": "the kings speech",
  "🐍✈️": "snakes on a plane",
  "🐛🐜🐞": "a bugs life",
  "📱🍎": "jobs",
  "⏰🔧🍊": "a clockwork orange",
  "💍📺": "the ring",
  "👦✂️🙌": "edward scissorhands",
  "🌍🙈🙊🙉": "planet of the apes",
  "👦🍫🏭": "charlie and the chocolate factory",
  "🛳🧊": "titanic",
};

function Result({ answer }) {
  const [visible, setIsVisible] = React.useState(true);

  setTimeout(function () {
    setIsVisible(false);
  }, 2000);

  return (
    <div className="m-8 p-1">
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
  );
}

export default function Home() {
  const keys = Object.keys(movies);

  const [answer, setAnswer] = useState(undefined);
  const [randomEmoji, setRandomEmoji] = useState("⚡️👦🔨");
  const formRef = useRef();

  const random_emoji = () => {
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const guess = (event) => {
    event.preventDefault();

    const guess = event.target.name.value.toLowerCase().trim();
    const is_correct = guess === movies[randomEmoji];

    setAnswer(is_correct);

    if (is_correct) {
      setRandomEmoji(random_emoji());
    }

    formRef.current.reset();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="m-2 text-3xl py-7 md:text-6xl">
        Guess the 🎞
      </h1>
      <h1 className="m-2 text-5xl py-7 tracking-[0.2em] md:text-9xl ">
        {randomEmoji}
      </h1>
      <div className="flex item-center px-8 mt-10 text-gray-700">
        <form onSubmit={guess} ref={formRef}>
          <input
            placeholder="Which movie?"
            className="p-2 text-center bg-gray-100 text-gray-600 m-2"
            id="name"
          />
          <button className="px-8 p-2 text-xl font-bold">Guess</button>
        </form>
      </div>
      <Result answer={answer} />
    </main>
  );
}
