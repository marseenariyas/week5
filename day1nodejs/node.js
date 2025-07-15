//what is an api?
//api--->application programming interface
//rules that let software talks to each other.in web context:your server exposes 
// endpoinds that clients can call

//what is node.js?
//node.js=javascript runtime built on chormes v8 engine
//allows you to run javascript code outside the browser(on a server)

//key features of node.js
//Non-bloking==>
    //** in many languages,when the code does something slow it waits until its done
    //** in node.js it doesnt wait instead,it keeps doing other work and finishes the slow task in the background
//Event-driven==>
    //** node.js uses something called an eventloop
    //** when something happens an event is triggered and ur callback function handle it
//Single threaded(bt highly scalable)
    //** node.js runs on a single threaded(one main line if execution)
    //** but bcz of non-blocking 1/0 & eventloop,it can still handle thousands of connection at the same tym
//Fast and Light weight==>
    //** node.js is build on chromis v8 javascript engine-->very fast at running js code.
    //** the design is minimal and efficient so it doesnt need heavy memory or cpu to strt.
//Uses js every where==>
    //** u can write server side code in js-the same language used in the browser.
    //** this makes it easier for frontend &backend to share code & knowledge
//Great eco system(npm)==>
    //** node.js comes with npm(node package manager) 
    //** npm has millions of free packages you can use                