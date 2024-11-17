const video = document.getElementById("user-video");
const startButton = document.getElementById("start-btn");

const state = { media: null };

startButton.addEventListener("click", () => {
  const mediaRecorder = new MediaRecorder(state.media, {
    videoBitsPerSecond: 12800,
    audioBitsPerSecond: 2500000,
    framerate: 50,
  });

  mediaRecorder.ondataavailable = (e) => {
    console.log("Binary Stream Available", e.data);
  };
  mediaRecorder.start(25);
});

window.addEventListener("load", async (e) => {
  const media = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  state.media = media;
  video.srcObject = media;
});
