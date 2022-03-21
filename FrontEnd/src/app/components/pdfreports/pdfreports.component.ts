import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminflight } from 'src/app/models/adminflight';
import { AdminflightcrudService } from 'src/app/services/adminflightcrud.service';
import { AirportsService } from 'src/app/services/airports.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pdfreports',
  templateUrl: './pdfreports.component.html',
  styleUrls: ['./pdfreports.component.css']
})
export class PdfreportsComponent implements OnInit {
  public citydata;
  addflight:Adminflight;
  flights;
  flightcheck=true;
  v:Adminflight;
  isLoggedIn: boolean;
  constructor(private service:AdminflightcrudService, private airportservice : AirportsService, private router: Router) { }

  ngOnInit(): void {
    this.addflight={
      flight_number:null,
      departure_location:'',
      arrival_location:'',
      Monday:false,
      Tuesday:false,
      Wednesday:false,
      Thursday:false,
      Friday:false,
      Saturday:false,
      Sunday:false,
      departure_time:null,
      arrival_time:null,
      duration:null,
      business_cost:null,
      economy_cost:null
    }
    this.citydata = this.airportservice.airports;
    this.flightcheck=true;
    this.service.getAll().subscribe((data: Adminflight[])=>{
      this.flights = data;
     
  }) 
  if(!sessionStorage.getItem('admin'))
    {
      Swal.fire({
        title: 'Oops!',
        text: 'Login to Continue!',
        icon: 'warning',
       
      })
      this.router.navigate([`${'/'}`]);
    }
    if(sessionStorage.getItem('admin'))
    {
        this.isLoggedIn = true
    }
  }
 
  onclickfn()
  {
    this.flightcheck=true;
  }
  
  generateXML(){
    
    var XML = new String();
    
    XML = "<?xml version='1.0' encoding='utf-8'?>\n";
    
    XML = XML + "<root>\n";
   
    XML = XML + "<planes>\n";
    XML = XML + "\t<id>2223</id>\n";
    XML = XML + "\t<type>TecAirlines</type>\n";
    XML = XML + "\t<capacity>78</capacity>\n";
    XML = XML + "\t<bags>24</bags>\n";
    XML = XML + "</planes>\n";
  
    XML = XML + "<bagcarts>\n";
    XML = XML + "\t<id>1</id>\n";
    XML = XML + "\t<bags>12</bags>\n";
    XML = XML + "</bagcarts>\n";
   
    XML = XML + "</root>";

    //Save XML file
    var filename = "file.xml";
    var pom = document.createElement('a');
    var bb = new Blob([XML.toString()], {type: 'text/plain'});

    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);

    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true; 
    pom.classList.add('dragout');

    return pom;
  }

  generateReport() {

    var XML = this.generateXML();
    XML.click();

    
    /*
    console.log("PRUEBA");
    var InputJSON = "{College:{entry: [{ Student : 'shiv', Roll_No: 12},{ Student : 'yadav',Roll_No: 56}]}}";
  
    var output = eval("OBJtoXML("+InputJSON+");")
    
    //JSON to XML
    function OBJtoXML(obj) {
      var xml = '';
      for (var prop in obj) {
        xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
        if (obj[prop] instanceof Array) {
          for (var array in obj[prop]) {
            xml += "<" + prop + ">";
            xml += OBJtoXML(new Object(obj[prop][array]));
            xml += "</" + prop + ">";
          }
        } else if (typeof obj[prop] == "object") {
          xml += OBJtoXML(new Object(obj[prop]));
        } else {
          xml += obj[prop];
        }
        xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
      }
      var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
      return xml
    }

    console.log(output);

    const xmlStr = '<a id="a"><b id="b">hey!</b></a>';
    const parser = new DOMParser();
    const doc = parser.parseFromString(output, "application/xml");
    console.log(doc);
    */

  }

 
  submitForm(AddFlightForm) {
    /*
  for(let i=0;i<this.flights.length;i++)
  {
    if(this.flights[i].flight_number==AddFlightForm.value.flight_number)
      {
        this.flightcheck=false;
        window.scrollTo(0,1);
      }
  }

  console.log(this.flightcheck);
    
    if(this.flightcheck==true)
    {
      Swal.fire('Adding Flight');    Swal.showLoading();
      this.service.addflight(AddFlightForm.value).subscribe((data)=>
      console.log(data,"Flight Added")
      )
      Swal.close();
    this.router.navigate([`${'ViewAllFlights'}`]);
    }
   */
   }
   
}