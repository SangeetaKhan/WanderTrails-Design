var cityDetails = {
      "wayanad": {
        "name": "WAYANAD", 
        "helpText" : "( Sed ut perspiciatis unde omnis )",
        "images": [
          "https://www.keralatourism.org/images/destination/large/wayanad20131031122726_373_1.jpg",
          "https://www.keralatourism.org/images/destination/large/wayanad20131127120516_373_1.jpg",
          "https://www.keralatourism.org/images/destination/large/wayanad20131106143924_373_1.jpg",
          "https://www.keralatourism.org/images/destination/large/banasura_sagar_dam20131104172855_373_2.jpg",
          "https://www.keralatourism.org/images/destination/large/pakshipathalam_in_wayanad20140412070127_298_1.jpg" 
          ]        
      },
       "coorg": {
        "name": "COORG ",
         "helpText" : "( Sed ut perspiciatis unde omnis )",
        "images": [
          "https://www.holidify.com/images/compressed/2419.jpg?v=1.1",
          "https://www.holidify.com/images/compressed/515.jpg?v=1.1",
          "https://www.holidify.com/images/compressed/3931.jpg",
          "https://www.holidify.com/images/compressed/attractions/attr_1659.jpg",
          "https://www.holidify.com/images/compressed/4278.jpg"
        ]
      },
       "ooty": {
        "name": "OOTY",
         "helpText" : "( Sed ut perspiciatis unde omnis )",
        "images": [
    		"https://www.makemytrip.com/blog/sites/default/files/images/ooty-city.jpg",
    		"https://www.holidify.com/images/compressed/2922.jpg",
    		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvk2PYuNAJPojw-4oPqGeS8a1babFirMmZ1jky2qpDya05i-v7",
    		"http://www.ootyexoduscabs.com/images/gallery/bbf8e53f-oty%20train%202.jpg",
    		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1505swXzmEV1ogpYmq19iWTSzg6zghR3yMLGCOQvheLECV1I",
    		"https://www.makemytrip.com/travel-guide/media/dg_image/ooty/Ooty-Lake_Pranav-Bhasin.jpg",
          ]
      }
    }
 
function showCityDetail(ele,cityName){
	var cityImages,cityNameDet,headerText,header,spanBody,spanText,commonEle,cityImage;
	cityImages = document.getElementsByClassName('wander-cityImages')[0];
	cityNameDet =  document.getElementsByClassName('wander-heading')[0];
	cityImages.innerHTML = '';
	cityNameDet.innerHTML ='';
	header = document.createElement('h1');
	headerText = document.createTextNode(cityDetails[cityName].name.toUpperCase());  
	header.appendChild(headerText);
	spanBody = document.createElement('span');
	spanText = document.createTextNode(cityDetails[cityName].helpText);
	spanBody.appendChild(spanText);
	header.appendChild(spanBody);
	cityNameDet.appendChild(header);
	for(var i in cityDetails[cityName].images){
		cityImage = document.createElement("div");
	    cityImage.classList.add('cityImages');
	    cityImages.appendChild(cityImage);
	    document.getElementsByClassName('cityImages')[i].style.backgroundImage = 'url(' +cityDetails[cityName].images[i] +')'
	}
	cityEle = document.getElementsByClassName('city');
    for(var i =0;i<cityEle.length;i++){
       cityEle[i].classList.remove('active');

    }
    ele.parentElement.classList.add('active');
}

var activeTab = document.getElementsByClassName('active')[0].childNodes[1];
window.onload = showCityDetail(activeTab,'wayanad');

