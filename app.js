document.addEventListener('DOMContentLoaded', ()=>{
  const menuBtn = document.getElementById('menuBtn');
  if(menuBtn){
    const drawer = document.getElementById('drawer');
    menuBtn.onclick = ()=>drawer.classList.toggle('open');
  }

  if(document.getElementById('apps')){
    // kullanıcı sayfası için dummy veri
    const apps = [
      {name:'TestApp', desc:'Harika bir uygulama!', img:'assets/logo.png'}
    ];
    const appsDiv = document.getElementById('apps');
    apps.forEach(app=>{
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${app.name}</h3>
        <img src="${app.img}" width="50"><p>${app.desc}</p>
        <button>İndir</button>
      `;
      appsDiv.appendChild(card);
    });
  }
});

function adminLogin(){
  const email = document.getElementById('adminEmail').value.trim();
  if(email !== "ezizaranow721@gmail.com") {
    alert("Sadece admin girebilir.");
    return;
  }
  document.getElementById('adminSection').style.display = 'block';
}

function uploadApp(){
  const name = document.getElementById('appName').value.trim();
  const file = document.getElementById('aabFile').files[0];
  const logo = document.getElementById('appLogo').files[0];
  if(!name || !file || !logo){
    alert("Tüm bilgileri doldurun.");
    return;
  }

  const progress = document.getElementById('progressBar');
  let percent = 0;
  const interval = setInterval(()=>{
    if(percent >= 100){
      clearInterval(interval);
      alert("Yayınlandı!");
    } else {
      percent += 10;
      progress.style.width = percent+"%";
      progress.textContent = percent+"%";
    }
  },200);
}