const dayNight = document.querySelector(".day-night");
const para=document.querySelectorAll("p");
const headings1=document.querySelectorAll("h1");
const headings3=document.querySelectorAll("h3");
const head=document.getElementsByTagName("header");
const inputtag=document.querySelectorAll("input");
dayNight.addEventListener("click", () => 
{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("light");
    document.head.classList.toggle("light12");
    for(var i=0; i<inputtag.length; i++)
     {
        if(document.body.className == "light")
        {
            inputtag[i].style.color = "black";
        }
        else
        {
            inputtag[i].style.color = "#fff";
        }
    }
    for(var i=0; i<para.length; i++) 
    {
        if(document.body.className == "light")
        {
            para[i].style.color = "black";
        }
        else{
            para[i].style.color = "#fff";
        }
    }
    for(var i=0;i<headings1.length;i++)
    {
        if(document.body.className=="light")
        {
            headings1[i].style.color = "black";
        }
        else{
            headings1[i].style.color = "#fff";
        }
    }
    for(var i=0; i<headings3.length;i++)
    {
        if(document.body.className=="light")
        {
            headings3[i].style.color = "black";
        }
        else{
            headings3[i].style.color = "#fff";
        }
    }
    
    if(document.body.className=="light")
    {
        head[0].style.backgroundColor ="#FFFFF0";
    }
    else
    {
        head[0].style.backgroundColor ="#222";
    }
});
    window.addEventListener("load", () => {
    if(document.body.classList.contains("light"))
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
});