
const button = document.querySelector("button");
const jokes = document.querySelector("#jokes");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } }; //This is how we can set Headers
    const res = await axios.get("https://icanhazdadjoke.com/", config); //Pass as second argument
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
