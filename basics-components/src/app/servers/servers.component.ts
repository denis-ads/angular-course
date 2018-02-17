import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownNewServer:boolean =false;
  serverCreationStatus = 'No server was created';
  serverName= 'TesteServer';

  constructor() {

    setTimeout(()=>{
      this.allownNewServer = true
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created name is ' + this.serverName;
  }
  onUpdateServerName(event: any){
    //this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event)
  }

}
