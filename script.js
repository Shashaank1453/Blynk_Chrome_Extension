const URL = (id,digit)=>{
    return `https://blr1.blynk.cloud/external/api/update?token=3h7IO4KgvWel0Z8a0cYqz8SCjGWS_ouG&${id}=${digit}`
};
const buttons = Array.prototype.slice.call(document.querySelectorAll('.buttons'));
const btnStatus = (element)=>{
    if(element.classList.contains("off"))
        return "off";
    else 
        return "on";
};
const TurnOnSwitch = (element)=>{
    element.classList.remove("off")
    element.classList.add("on")
    element.getElementsByTagName("span")[0].innerHTML="ON"
};
const TurnOffSwitch = (element)=>{
    element.classList.remove("on")
    element.classList.add("off")
    element.getElementsByTagName("span")[0].innerHTML="OFF"
};
const TurnOn = (element)=>{
    fetch(URL(element.id,element.id!="D5"?0:1))
};
const TurnOff = (element)=>{
    fetch(URL(element.id,element.id!="D5"?1:0))
};
buttons.forEach(element => {
    element.addEventListener("click",()=>{
        if(btnStatus(element)=="off"){
            TurnOnSwitch(element)
            TurnOn(element)
        }
        else{    
            TurnOffSwitch(element)
            TurnOff(element)
        }
    });
});
const update =()=>{
    buttons.forEach(element => {
        switch (element.id) {
            case "D3":
                fetch(`https://blr1.blynk.cloud/external/api/get?token=3h7IO4KgvWel0Z8a0cYqz8SCjGWS_ouG&dataStreamId=10`).then((response)=>{
                    return response.json();
                    }).then((data)=>{
                        if(data == 0)
                            TurnOnSwitch(element)
                        else
                            TurnOffSwitch(element)
                    })          
            break;
            case "D5":
                fetch(`https://blr1.blynk.cloud/external/api/get?token=3h7IO4KgvWel0Z8a0cYqz8SCjGWS_ouG&dataStreamId=12`).then((response)=>{
                    return response.json();
                    }).then((data)=>{
                        if(data == 0)
                        TurnOffSwitch(element)
                        else
                        TurnOnSwitch(element)
                    })
            break;
            case "D4":
                fetch(`https://blr1.blynk.cloud/external/api/get?token=3h7IO4KgvWel0Z8a0cYqz8SCjGWS_ouG&dataStreamId=11`).then((response)=>{
                    return response.json();
                    }).then((data)=>{
                        if(data == 0)
                            TurnOnSwitch(element)
                        else
                            TurnOffSwitch(element)
                    })            
            break;
            case "D1":
                fetch(`https://blr1.blynk.cloud/external/api/get?token=3h7IO4KgvWel0Z8a0cYqz8SCjGWS_ouG&dataStreamId=9`).then((response)=>{
                    return response.json();
                    }).then((data)=>{
                        if(data == 0)
                            TurnOnSwitch(element)
                        else
                            TurnOffSwitch(element)
                    })         
            break;
        }
    });
};
update();
setInterval(update,400);
