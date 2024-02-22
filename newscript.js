document.querySelector(".text").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      let time = Math.floor(Date.now() / 1000).toString();
      let value = document.querySelector(".text").value + time;
      let key = randomKeyGenerate(12);
      localStorage.setItem(key, value);
      location.reload();
    }
  });
  
  document.querySelector(".btn").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
  // This function generate random key's
  function randomKeyGenerate(length) {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let randomkey = "";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * charset.length);
      const element = charset[random];
      randomkey += element;
    }
    return randomkey;
  }
  
  // This function add the task .
  function addtask() {
    let keyarray = []; // array of objects which contains key : value;
    let clutter = ""; // to add each task
  
    // This eventListener load's the key:value from localStorage
    window.addEventListener("load", () => {
      for (let i = 0; i < localStorage.length; i++) {
        let item = localStorage.key(i);
        let value = localStorage.getItem(item);
        keyarray.push({ key: item, keyvalue: value });
      }
  
    
      // This loop add each value(task) to the clutter variable;

      
  
      //This functino sort keyvalue (task) on bases of timestamp -->default milliseconds
      // here at the end of each string(task) contains a timestamp length of 10 as it is -->seconds
    // Sort the tasks
const sortedTasks = keyarray.slice().sort((a, b) => {
    const timeA = Number(a.keyvalue.slice(-10));
    const timeB = Number(b.keyvalue.slice(-10));
  
    return timeB - timeA;
  });
  

  
  
  
      sortedTasks.forEach((element) => {
        let valueWithoutTimestamp = "";
        if (element.keyvalue.endsWith("*")) {
            valueWithoutTimestamp = element.keyvalue.substring(0, element.keyvalue.length - 11);
        } else {
            
            valueWithoutTimestamp = element.keyvalue.substring(0, element.keyvalue.length - 10);
        }
        
        const bgcolor = element.keyvalue.endsWith("*")? "#cccccc" : "#303030";
        const line = element.keyvalue.endsWith("*")? "line-through":"none";
        const color = element.keyvalue.endsWith("*")? "#000000" : "#ffffff";
  
        clutter += `<div class="ans1" data-index="${element.key}" style="background-color: ${bgcolor};text-decoration:${line};color:${color};">${valueWithoutTimestamp}</div>`;
        
  
      });
      
  
      // This line add each clutter contsining div to the main div to display on user side;
      document.querySelector(".subdiv").innerHTML = clutter;
      document.querySelector(".subdiv")
      .addEventListener("click",(details)=>{
        if (details.target.classList.contains("ans1") || details.target.classList.contains("parag")) {
          
          let flag = 0
          for (let i = 0; i < keyarray.length; i++) {
            keyarray[i].key.includes(details.target.dataset.index);
          }
          flag = 1;
          if (flag == 1) {
            details.target.style.backgroundColor = "#cccccc";
            details.target.style.textDecoration = "line-through";
            details.target.style.color = "black";
            
            keyarray.forEach(item=>{
              if(item.key.includes(details.target.dataset.index)){
                console.log(item.keyvalue.length);
                if (item.keyvalue.endsWith("*")) {
                  item.keyvalue = item.keyvalue;
                }
                else{
                  item.keyvalue = item.keyvalue + "*";
                }
                
                localStorage.setItem(item.key, item.keyvalue);
                // location.reload();
              }
            })
  
          } 
        }
  
      });
    });
  }
  // calling the function
  

  let time = "";
  function calculateTime() {
    let now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; 
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    time = hours + ":" + minutes + ":" + seconds + "" +meridiem;
  
    document.querySelector(".time").textContent = time;
    if (time == "12:00:00AM") {
      localStorage.clear();
      location.reload();
    } 
  }
  setInterval(calculateTime, 1000);
  calculateTime();
  
  addtask();
  
  