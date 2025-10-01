const btn = document.getElementById('trollBtn');
const doakes = document.getElementById('doakes');
const msg = document.getElementById('message');
const song = document.getElementById('song');

btn.addEventListener('click', async () => {
  btn.disabled = true;
  btn.style.opacity = '0';
  setTimeout(()=>btn.style.display='none', 300);

  // play the audio
  try {
    song.currentTime = 0;
    await song.play();  // must be triggered by user click
  } catch(e){
    console.warn('Audio play blocked:', e);
  }

  // fade in image after it's loaded
  function show(){
    doakes.classList.add('show-doakes');
    setTimeout(()=>msg.classList.add('show-message'), 400);
  }

  if(doakes.complete && doakes.naturalWidth !==0){
    show();
  } else {
    doakes.addEventListener('load', show, {once:true});
    doakes.addEventListener('error', ()=>msg.classList.add('show-message'), {once:true});
  }
});
