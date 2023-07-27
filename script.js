const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

const getEmoji = async () => {
	let response = await fetch(
		"https://emoji-api.com/emojis?access_key=df6b21e83432399ba1cbc14e0e80ab9d87411409"
	);
	data = await response.json();
	console.log(data);

	for (let i = 0; i < 1500; i++) {
		emoji.push({
			emojiName: data[i].character,
			emojiCode: data[i].unicodeName,
		});
	}
};

getEmoji();

btnEl.addEventListener("click", () => {
	const randomNum = Math.floor(Math.random() * emoji.length);
	btnEl.innerText = emoji[randomNum].emojiName;
	emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
