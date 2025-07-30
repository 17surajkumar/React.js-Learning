function Card({ username,btnText="Visit Me"}) {
  // console.log("Props: ", username);
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="https://img.freepik.com/free-photo/close-up-portrait-handsome-confident-young-man-white-t-shirt-looking-away-blurry-outdoor-nature_176420-6306.jpg?semt=ais_hybrid&w=740&q=80"
        alt="This is image"
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {username}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          Lorem ipsum dolor
        </h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet
      </p>
      <button>{btnText || "Visit me"}</button>
    </div>
  );
}

export default Card;
