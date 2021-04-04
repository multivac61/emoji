import Head from "next/head";
import React, { useState, useEffect } from "react";

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
  const [randomEmoji, setRandomEmoji] = useState(undefined);

  const random_emoji = () => {
    return keys[Math.floor(Math.random() * keys.length)];
  };

  useEffect(() => {
    setRandomEmoji(random_emoji());
  }, []);

  const guess = (event) => {
    event.preventDefault();

    const guess = event.target.name.value.toLowerCase().trim();
    const is_correct = guess === movies[randomEmoji];

    setAnswer(is_correct);

    if (is_correct) {
      setRandomEmoji(random_emoji());
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="m-2 text-5xl py-7 tracking-wider text-center md:text-6xl">
        Guess the movie 🤔💭
      </h1>
      <h1 className="m-2 text-5xl py-7 tracking-widest text-center md:text-9xl ">
        {randomEmoji}
      </h1>
      <div className="flex item-center px-8 mt-10 text-gray-700">
        <form onSubmit={guess}>
          <input
            placeholder="Which movie?"
            className="p-2 text-center bg-gray-100 text-gray-600 m-2"
            id="name"
          />
          <button className="px-8 text-xl font-bold">Guess</button>
        </form>
      </div>
      <Result answer={answer} />
    </main>
  );
}
