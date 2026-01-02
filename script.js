let currentMode = "happy";

// 🌸 FLOWERS
const flowers = [
  "flowers/flower1.png",
  "flowers/flower2.png",
  "flowers/flower3.png",
  "flowers/flower4.png",
  "flowers/flower5.png",
  "flowers/flower6.png",
  "flowers/flower7.png",
  "flowers/flower8.png",
  "flowers/flower9.png",
  "flowers/flower10.png"
];

// 😊 HAPPY QUOTES (A–Z, 5 each)
const happyAZ = {
A:["Always smile 😊","All good vibes 🌼","A happy day ✨","Awesome mood 😄","A little joy 💛"],
B:["Big smiles 😄","Bright vibes 🌈","Best day 😊","Be happy 🌼","Blessed mood ✨"],
C:["Cheerful 😊","Cool vibes 😎","Calm joy 🌿","Cute smiles 😄","Celebrate today 🎉"],
D:["Daily joy 😊","Dream happy ✨","Delightful 😄","Do smile 🌼","Dance a little 💃"],
E:["Enjoy life 😊","Easy joy 🌸","Every smile ✨","Energy up 😄","Everything good 🌈"],
F:["Feel good 😊","Fun time 😄","Fresh vibes 🌼","Full joy ✨","Friendly mood 🤝"],
G:["Good vibes 😊","Glow happy ✨","Grin wide 😄","Great day 🌼","Go smile 😁"],
H:["Happy heart 😊","High spirits 😄","Hopeful 🌈","Hello joy ✨","Happiness blooms 🌸"],
I:["Inner joy 😊","In mood 😄","It’s fun 🌼","Inspired ✨","I feel good 😁"],
J:["Joyful 😊","Just smile 😄","Jolly mood 🌼","Jump happy ✨","Joy everywhere 😁"],
K:["Keep smiling 😊","Kind joy 🌼","Kudos mood 😄","Key of joy 🔑","Keen vibes 😁"],
L:["Laugh more 😂","Light mood 😊","Lovely day 🌸","Live happy ✨","Lively 😄"],
M:["Make joy 😊","Merry mood 😄","Magic smiles ✨","Move happy 🌼","More joy 😁"],
N:["Nice vibes 😊","New joy 😄","No stress 🌿","Natural smile ✨","Now happy 😁"],
O:["Only joy 😊","Open smile 😄","Oh happy 🌼","Optimistic ✨","One smile 😁"],
P:["Positive 😊","Playful 😄","Peaceful 🌿","Perfect day ✨","Pure joy 😁"],
Q:["Quick smile 😊","Quiet joy 🌿","Quality time 😄","Quite happy ✨","Quirky 😁"],
R:["Relax 😊","Radiant 😄","Rise happy 🌼","Ready smile ✨","Refresh joy 😁"],
S:["Smile 😊","Sunny 😄","So happy 🌸","Spread joy ✨","Sweet mood 😁"],
T:["Today happy 😊","Thankful 😄","True joy 🌼","Top mood ✨","Take it easy 😁"],
U:["Upbeat 😊","Ultra happy 😄","Uplift 🌼","Unique joy ✨","Up smile 😁"],
V:["Vibe good 😊","Very happy 😄","Vivid joy 🌈","Value smiles ✨","Victory 😁"],
W:["Warm smile 😊","Wonderful 😄","Wide grin 😁","Win joy ✨","Well mood 🌼"],
X:["Xtra happy 😄","Xpress joy 😊","Xcellent ✨","Xoxo vibes 💛","X factor 😁"],
Y:["Your smile 😊","Yes happy 😄","Youthful 🌼","Yay mood ✨","You shine 😁"],
Z:["Zing 😊","Zen joy 🌿","Zippy 😄","Zero stress ✨","Zoom smiles 😁"]
};

// ❤️ LOVE QUOTES (A–Z, 5 each)
const loveAZ = {
A:["Always with you ❤️","All my love 💖","Adore you 😘","Angel heart 💕","A sweet bond 💞"],
B:["Be mine ❤️","Beautiful us 💖","Bond forever 💕","Blissful love 😍","Big heart 💞"],
C:["Care always ❤️","Close hearts 💖","Cute love 😘","Cherish you 💕","Connected 💞"],
D:["Deep love ❤️","Dear you 💖","Dream together 😍","Devoted 💕","Darling bond 💞"],
E:["Endless love ❤️","Every moment 💖","Embrace tight 😘","Eternal 💕","Ever yours 💞"],
F:["Forever us ❤️","Feel loved 💖","Fond memories 😍","Faithful 💕","Full heart 💞"],
G:["Growing love ❤️","Gentle care 💖","Golden bond 😘","Grateful 💕","Glow together 💞"],
H:["Heart to heart ❤️","Hold me 💖","Home is you 😍","Healing love 💕","Hug tight 💞"],
I:["I choose you ❤️","In love 💖","Irreplaceable 😘","Infinite 💕","Intimate bond 💞"],
J:["Just us ❤️","Joyful love 💖","Jaan forever 😍","Joined hearts 💕","Jolly bond 💞"],
K:["Keep close ❤️","Kind love 💖","Kiss vibes 😘","Known by heart 💕","Key to me 💞"],
L:["Love always ❤️","Lucky us 💖","Little moments 😍","Loyal hearts 💕","Linked souls 💞"],
M:["My heart ❤️","Magic love 💖","Mine forever 😘","Moments sweet 💕","More us 💞"],
N:["Near you ❤️","Never apart 💖","Needed love 😍","Nestled hearts 💕","No limits 💞"],
O:["Only you ❤️","Our story 💖","Open hearts 😘","One soul 💕","Overflow 💞"],
P:["Pure love ❤️","Promise 💖","Precious us 😍","Protected 💕","Perfect pair 💞"],
Q:["Quiet love ❤️","Quality time 💖","Queen of heart 😘","Quick hugs 💕","Quintessential 💞"],
R:["Real love ❤️","Right here 💖","Romantic 😍","Rooted hearts 💕","Rest in us 💞"],
S:["Stay close ❤️","Sweet us 💖","Soulmates 😍","Soft hearts 💕","Safe love 💞"],
T:["Together ❤️","True love 💖","Tender care 😍","Timeless 💕","Two hearts 💞"],
U:["Us forever ❤️","Unbreakable 💖","Unique bond 😍","United 💕","Unconditional 💞"],
V:["Valentine ❤️","Vow kept 💖","Very dear 😍","Velvet love 💕","Vivid us 💞"],
W:["With you ❤️","Warm love 💖","Whole heart 😍","We belong 💕","Wrapped tight 💞"],
X:["Xoxo ❤️","Xpress love 💖","Xtra care 😍","X factor 💕","Xclusive 💞"],
Y:["You & me ❤️","Your arms 💖","Yes always 😍","Yours truly 💕","You matter 💞"],
Z:["Zeal of love ❤️","Zen with you 💖","Zing hearts 😍","Zero doubt 💕","Zillion hugs 💞"]
};

// 🤳 SELFIE MODE DATA (UNCHANGED)
const emojis = ["😂","😜","🤪","😎","🥴","😆"];
const emojiQuotes = {
  "😂":["Too funny to handle 😂","Smile attack detected 😆"],
  "😜":["Masti mode ON 😜","Certified prank face 🤪"],
  "🤪":["Crazy vibes only 🤪","Madness looks good 😆"],
  "😎":["Coolness overload 😎","Too stylish to blink 😎"],
  "🥴":["Mood confused but cute 🥴","Sleepy swag spotted 😆"],
  "😆":["Laugh unlocked 😆","Happiness activated 😂"]
};

let currentEmoji = "😂";

// helpers
function random(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

// mode switch
function setMode(mode, btn){
  currentMode = mode;
  document.querySelectorAll(".mode").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  document.getElementById("nameInput").style.display =
    mode === "selfie" ? "none" : "block";

  resetSelfie();
}

// main button
function handleAction(){
  if(currentMode === "selfie"){
    startSelfie();
  }else{
    showFlower();
  }
}

// 🌸 HAPPY / LOVE FLOWER  ✅ EDIT HERE
function showFlower(){
  const name = document.getElementById("nameInput").value || "Someone";
  document.getElementById("showName").innerText = name;

  // 🔥 FORCE NEW FLOWER EVERY CLICK (CACHE FIX)
  const flower = random(flowers);
  document.getElementById("flowerImg").src =
    flower + "?t=" + Date.now();

  const letter = name[0].toUpperCase();
  const list =
    currentMode === "love"
      ? (loveAZ[letter] || ["Love always ❤️"])
      : (happyAZ[letter] || ["Stay happy 😊"]);

  const qb = document.getElementById("quoteBox");
  qb.innerText = random(list);
  qb.classList.add("show");

  document.getElementById("popSound").currentTime = 0;
  document.getElementById("popSound").play();
}

// 🤳 SELFIE MODE (UNCHANGED)
function startSelfie(){
  currentEmoji = random(emojis);
  document.getElementById("frameEmoji").innerText = currentEmoji;
  document.getElementById("frameQuote").innerText = "Get ready 😄";

  document.getElementById("selfieFrame").classList.remove("hidden");
  document.getElementById("snapBtn").classList.remove("hidden");

  navigator.mediaDevices.getUserMedia({ video:true })
    .then(stream => {
      document.getElementById("video").srcObject = stream;
    });
}

function takeSelfie(){
  const video = document.getElementById("video");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);

  const img = document.getElementById("selfieImg");
  img.src = canvas.toDataURL("image/png");
  img.classList.remove("hidden");
  video.classList.add("hidden");

  document.getElementById("frameQuote").innerText =
    random(emojiQuotes[currentEmoji]);

  document.getElementById("downloadBtn").classList.remove("hidden");
}

function downloadFrame(){
  html2canvas(document.getElementById("selfieFrame")).then(canvas => {
    const a = document.createElement("a");
    a.download = "selfie-frame.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
}

function resetSelfie(){
  document.getElementById("selfieFrame").classList.add("hidden");
  document.getElementById("snapBtn").classList.add("hidden");
  document.getElementById("downloadBtn").classList.add("hidden");
  document.getElementById("selfieImg").classList.add("hidden");
}
