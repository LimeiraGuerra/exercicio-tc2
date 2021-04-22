import { Component, OnInit } from '@angular/core';
import { Message } from "../message";
import { messageList } from "../messageList";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: Message[] = messageList;

  constructor() { }

  ngOnInit(): void {
  }

}
