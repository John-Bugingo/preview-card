const timeInterval = () => {
    console.log("start of the function");
    // const colors = ["blue", "green","orange", "red"];
    const classes = ["change-colOne", "change-colTwo","change-colThree", "change-colFour"];
    // const newCols =  colors.filter(color => {
    //     return color !== "blue";
    // });
    // console.log(newCols.includes("blue"));
    setInterval(() => {
        const changeClass = classes[Math.floor(Math.random() * (classes.length))]
        const navATags = document.querySelectorAll('nav a');
        navATags.forEach(function(aTag){
            aTag.className = changeClass;

        })


        // document.getElementsByClassName("set-time").style.color = changeColor;

        console.log("This can occur after one minutes");
        
    }, 3000);
    console.log("here were out of setTimeOut function");
}
timeInterval();

const texts = ["Jimmy mutabazi", "John Bugingo","Kale Kayihura", "John Kiramira"]
const chengeText = () => {
    const chengedText = texts[Math.floor(Math.random() * (texts.length))]
    const newText = document.getElementById('demo');
    newText.innerHTML = chengedText;
}



