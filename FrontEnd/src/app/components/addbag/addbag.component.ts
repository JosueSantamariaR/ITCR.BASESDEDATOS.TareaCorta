import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bag } from 'src/app/models/bag';
import { AdminadduserServices } from 'src/app/services/adminaddbag.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-addbag',
  templateUrl: './addbag.component.html',
  styleUrls: ['./addbag.component.css']
})
export class AddbagComponent implements OnInit {
  addbag:Bag;
  flightcheck=true;
  isLoggedIn: boolean;
  constructor(private service:AdminadduserServices, private router: Router) { }

  ngOnInit(): void {
    this.addbag={
      id:null,
      cost:null,
      state:true,
      color:'',
      type:'',
      usuario:null
    }
    this.flightcheck=true;
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
  
  
  generateXML(AddFlightForm){
    
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

    pom.click();
  }
 
  exportAsPDF(AddBagForm)
  {
    let data = document.getElementById('AddBagForm');  
    html2canvas(data).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png')  // 'image/jpeg' for lower quality output.
    let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
    // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
    pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
    pdf.save('Filename.pdf');
    return pdf;  
    });
  }

  submitForm(AddBagForm) {
    this.generateXML(AddBagForm);
    this.exportAsPDF(AddBagForm);
  }
}
