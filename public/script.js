const video = document.getElementById("user-video");
const start = document.getElementById("start-btn");

window.addEventListener("load", async (e) => {
  const media = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  video.srcObject = media;
});
