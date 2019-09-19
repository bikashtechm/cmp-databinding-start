import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cocpit',
  templateUrl: './cocpit.component.html',
  styleUrls: ['./cocpit.component.css']
})
export class CocpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName = '';
  newServerContent = '';
  constructor() { } 

  ngOnInit() {
  }
  onAddServer(nameInput:HTMLInputElement) {
   //console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    console.log(nameInput.value);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })
  }
}
