
const textBannerHidden=document.querySelector("#Banner #text2");
textBannerHidden.classList.add("textnone");
textBannerHidden.classList.remove("texthidden");


const buttonmenu = document.querySelector("#buttonmenu img");
buttonmenu.addEventListener("click",OpenMenu);

function OpenMenu(event)
 {
    console.log("ciao");
    const Menumobile=document.querySelector('#hiddenmenumobile');
    Menumobile.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  
 }
const buttonclosemenumobile=document.querySelector('#buttonclosemenumobile')
buttonclosemenumobile.addEventListener("click",CloseMenu);
function CloseMenu(event)
{
    const Menumobile=document.querySelector('#hiddenmenumobile');
    Menumobile.classList.add('hidden');
}


const Banner= document.querySelector('#Banner');
Banner.addEventListener("click",CambioimmBanner);

const imgBanner=document.querySelector("#ImgBanner");
imgBanner.classList.remove("hiddenimgbanner");
imgBanner.classList.add("imgbannerprinc");

function CambioimmBanner()
{
    const imgBanner=document.querySelector("#ImgBanner");
    const textBannerprinc=document.querySelector("#Banner #text");
    const textBannerHidden=document.querySelector("#Banner #text2");
    if(imgBanner.classList=='hiddenimgbanner')
    {
     imgBanner.classList.add("imgbannerprinc");
    imgBanner.classList.remove("hiddenimgbanner");
    textBannerprinc.classList.add("textprincipal");
    textBannerprinc.classList.remove("textnone")
    textBannerHidden.classList.remove("texthidden");
    textBannerHidden.classList.add("textnone");
    }
    else
    {
        imgBanner.classList.add("hiddenimgbanner");
        textBannerprinc.classList.remove("textprincipal");
        textBannerprinc.classList.add("textnone")
        textBannerHidden.classList.add("texthidden");
        textBannerHidden.classList.remove("textnone");
        imgBanner.classList.remove("imgbannerprinc");
    }
    const ButtonBannerPrincipal= document.querySelector("#Banner .ButtonPrincipal");
ButtonBannerPrincipal.addEventListener("click",ButtonBanPrincipal,{ capture: false});
function ButtonBanPrincipal(event)
{
    event.stopPropagation();
    console.log('Cliccato interno,Principal!');
    
}
const ButtonBannerHidden= document.querySelector("#Banner .ButtonHidden");
ButtonBannerHidden.addEventListener("click",ButtonBanHidden,{ capture: false});
function ButtonBanHidden(event)
{
    console.log('Cliccato interno,Hidden!');
    event.stopPropagation();
}
}

function onModalClick() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
  }
  
const modalView = document.querySelector('#modalview');
modalView.addEventListener('click', onModalClick);

const Preferitiimgbutton=document.querySelectorAll("#ArticoliPreferiti .ImgArticolo img");
for(let i=0; i<Preferitiimgbutton.length;i++)
    {
        Preferitiimgbutton[i].addEventListener("click", onThumbnailClick);
    }

function onClickPreferitiImg(event)
{
    console.log("ciao");
}

function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }
  
function onThumbnailClick(event) {
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.scroll + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
  }

  