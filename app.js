let slideshow = [];
let index = 0;
slideshow.push('pngegg (2).png');
slideshow.push('pngegg4.png');
slideshow.push('car-png-16830.png');

/*let info = [];
info.push("")*/


function slider(){

    document.getElementById("carimage").animate([
        // keyframes
        { transform: 'translateX(300px)',opacity: .4 },
        { transform: 'translateX(0px)',opacity: 1 },        
      ], {
        // timing options
        duration: 1500,
        iterations: 1
      });
    index++;
    document.getElementById('carimage').style.transition = 'ease 1s';
    document.getElementById('carimage').src = slideshow[index];
    if (index >=2){
        index = -1;}
}
carslider = setInterval(slider, 5000);





let first = document.querySelector('#subimagebox img:nth-child(1)');
let second = document.querySelector('#subimagebox img:nth-child(2)');
let third = document.querySelector('#subimagebox img:nth-child(3)');
let fourth = document.querySelector('#subimagebox img:nth-child(4)');

let landcruiserArray = [];
landcruiserArray.push('landcruiser.jpg');
landcruiserArray.push('landcruiser1.jpg');
landcruiserArray.push('landcruiser2.jpg');
landcruiserArray.push('landcruiser3.jpg');
let landCruiserInfo = [];
landCruiserInfo.push('2020 Toyota Land Cruiser GR Sport');
landCruiserInfo.push('$100USD per day');
landCruiserInfo.push('The 2020 Toyota Land Cruiser is a full-size luxury SUV that can seat up to eight in three rows. It’s powered by a 381-horsepower, 5.7-liter V-8 engine that works with an eight-speed automatic transmission. Four-wheel drive is standard, and competitors include the GMC Yukon Denali, Mercedes-Benz GLS 450 and Infiniti QX80.');

let hiluxArray = [];
hiluxArray.push('hiluxgr.jpg');
hiluxArray.push('hiluxgr2.jpg');
hiluxArray.push('hiluxgr3.jpg');
hiluxArray.push('hiluxgr4.jpg');
let hiluxInfo = [];
hiluxInfo.push('2020 Toyota Hilux GR Sport');
hiluxInfo.push('$60USD per day');
hiluxInfo.push('The Toyota Hilux is one of the legends of the Dakar Rally and a past outright winner of the world’s toughest race. The success Toyota Gazoo Racing has achieved in this extreme competition has inspired the creation of the new Hilux GR Sport grade.');

let audiArray = [];
audiArray.push('audi1.jpg');
audiArray.push('audi2.jpeg');
audiArray.push('audi3.jpg');
audiArray.push('audi4.jpg');
let audiInfo = [];
audiInfo.push('2020 Audi Q8');
audiInfo.push('$120USD per day');

let gleArray = [];
gleArray.push('gle1.jpg');
gleArray.push('gle2.jpg');
gleArray.push('gle3.png');
gleArray.push('gle4.jpg');
let gleInfo = [];
gleInfo.push('2020 Mercedes-Benz GLE 53 AMG');
gleInfo.push('$150USD per day');


document.getElementById('optionsbox').style.display = 'none';
document.getElementById('subsection1').style.display = 'none';
function displayOptions(){
    document.getElementById('optionsbox').style.display = 'block';
}



function hilux(){

    document.getElementById('subsection1').style.display = 'block';
    document.getElementById('subsection0').style.display = 'none';
    document.getElementById('optionsbox').style.display = 'none';
    document.getElementById('selectedvehicle').innerText = 'Toyota Hilux';
    
    document.getElementById('vehicletitle').innerText = hiluxInfo[0];
document.getElementById('rentalprice').innerText = hiluxInfo[1];
//document.getElementById('info').innerText = hiluxInfo[2];

    first.src = hiluxArray[0];
    second.src = hiluxArray[1];
    third.src = hiluxArray[2];
    fourth.src = hiluxArray[3];
    document.getElementById('vehiclephoto').src = hiluxArray[0];

    first.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');

    first.addEventListener('click', function(){
        document.getElementById('vehiclephoto').src = hiluxArray[0];
        first.classList.add('selectedbox');
        second.classList.remove('selectedbox');
        third.classList.remove('selectedbox');
        fourth.classList.remove('selectedbox');   
    })
    second.addEventListener('click', function(){
        document.getElementById('vehiclephoto').src = hiluxArray[1];
        second.classList.add('selectedbox');
        first.classList.remove('selectedbox');
        third.classList.remove('selectedbox');
        fourth.classList.remove('selectedbox');
       
    })
    third.addEventListener('click', function(){
        document.getElementById('vehiclephoto').src = hiluxArray[2];
        third.classList.add('selectedbox');
        second.classList.remove('selectedbox');
        first.classList.remove('selectedbox');
        fourth.classList.remove('selectedbox');
       
    })
    fourth.addEventListener('click', function(){
        document.getElementById('vehiclephoto').src = hiluxArray[3];
        fourth.classList.add('selectedbox');
        second.classList.remove('selectedbox');
        third.classList.remove('selectedbox');
        first.classList.remove('selectedbox');
    })
    return;
}

function q8(){
        document.getElementById('subsection1').style.display = 'block';
        document.getElementById('subsection0').style.display = 'none';
        document.getElementById('optionsbox').style.display = 'none';
        document.getElementById('selectedvehicle').innerText = 'Audi Q8';
        
        first.src = audiArray[0];
        second.src = audiArray[1];
        third.src = audiArray[2];
        fourth.src = audiArray[3];
        document.getElementById('vehiclephoto').src = audiArray[0];
        document.getElementById('vehicletitle').innerText = audiInfo[0];
        document.getElementById('rentalprice').innerText = audiInfo[1];
        //document.getElementById('info').innerText = landCruiserInfo[2];

        first.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
        
        first.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = audiArray[0];
            first.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');   
        })
        second.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = audiArray[1];
            second.classList.add('selectedbox');
            first.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
         
        })
        third.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = audiArray[2];
            third.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            first.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
           
        })
        fourth.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = audiArray[3];
            fourth.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            first.classList.remove('selectedbox');
        })
        return;
        
    } 

    function gle(){
        document.getElementById('subsection1').style.display = 'block';
        document.getElementById('subsection0').style.display = 'none';
        document.getElementById('optionsbox').style.display = 'none';
        document.getElementById('selectedvehicle').innerText = 'Mercedes GLE';
        
        first.src = gleArray[0];
        second.src = gleArray[1];
        third.src = gleArray[2];
        fourth.src = gleArray[3];
        document.getElementById('vehiclephoto').src = gleArray[0];
        document.getElementById('vehicletitle').innerText = gleInfo[0];
        document.getElementById('rentalprice').innerText = gleInfo[1];
        //document.getElementById('info').innerText = landCruiserInfo[2];

        first.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
        
        first.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = gleArray[0];
            first.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');   
        })
        second.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = gleArray[1];
            second.classList.add('selectedbox');
            first.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
         
        })
        third.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = gleArray[2];
            third.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            first.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
           
        })
        fourth.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = gleArray[3];
            fourth.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            first.classList.remove('selectedbox');
        })
        return;
        
    } 
    function landcruiser(){
        document.getElementById('subsection1').style.display = 'block';
        document.getElementById('subsection0').style.display = 'none';
        document.getElementById('optionsbox').style.display = 'none';
        document.getElementById('selectedvehicle').innerText = 'Toyota Landcruiser';
        
        first.src = landcruiserArray[0];
        second.src = landcruiserArray[1];
        third.src = landcruiserArray[2];
        fourth.src = landcruiserArray[3];
        document.getElementById('vehiclephoto').src = landcruiserArray[0];
        document.getElementById('vehicletitle').innerText = landCruiserInfo[0];
        document.getElementById('rentalprice').innerText = landCruiserInfo[1];
        //document.getElementById('info').innerText = landCruiserInfo[2];
        first.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
        
        first.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = landcruiserArray[0];
            first.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');   
        })
        second.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = landcruiserArray[1];
            second.classList.add('selectedbox');
            first.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
         
        })
        third.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = landcruiserArray[2];
            third.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            first.classList.remove('selectedbox');
            fourth.classList.remove('selectedbox');
           
        })
        fourth.addEventListener('click', function(){
            document.getElementById('vehiclephoto').src = landcruiserArray[3];
            fourth.classList.add('selectedbox');
            second.classList.remove('selectedbox');
            third.classList.remove('selectedbox');
            first.classList.remove('selectedbox');
        })
        return;
        
    } 




