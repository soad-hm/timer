let $=document
const H=$.querySelector('#hour')
const S=$.querySelector('#seconds')
const M=$.querySelector('#minute')


setInterval(function(){

    let ndate=new Date()
    let sec=ndate.getSeconds()  
    let min=ndate.getMinutes()
    let hou=ndate.getHours()
    if(sec<10){
        sec='0'+sec
    }
    if(min<10){
        min='0'+min
    }
    if(hou<10){
        hou='0'+hou
    }
    H.innerHTML=hou
    S.innerHTML=sec
    M.innerHTML=min
},1000)
