// MERT CAN USLU
class storySimulator{constructor(a){this.uID=a.uID,this.pIMG=a.pIMG,this.sLIST=a.sLIST,this.fID=a.fID,this.stAdet=1,this.create(this.uID,this.pIMG,this.sLIST,this.stAdet,this.fID)}create(a,b,c,d,e){var f=c.length;document.getElementById("story_wrapper").innerHTML+=`
        <img onclick="ot('${a}',${f})" class="storysimulator" title="${e}" alt="${e}" src="${b}" >
        <div id="${a}" class="story_ic">
            <span id="stProgress">
            Yükleniyor...
            </span>
            <span onclick="ot('${a}')" class="xtrastory">X</span>
        </div>
        `,c.forEach(b=>{let c=window.innerHeight;$("#"+a).html($("#"+a).html()+`<div id="${a+"x"+d}" style="height:${c}px;background-image:url('${b}');"></div>`),d++})}}function ot(a,b){$("#"+a).is(":hidden")?$("#"+a).css("display","block"):$("#"+a).css("display","none"),$("#"+a+" div").css("display","none");var c=setInterval(()=>{$("span#stProgress").toggle("slow"),clearInterval(c)},3e3),d=0;if(!isNaN(b))var e=setInterval(()=>{$("#"+a+"x"+d).css("display","none"),$("#"+a+"x"+ ++d).css("display","block")},3e3);else clearInterval(e),e=""}