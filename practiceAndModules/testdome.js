// function average(a, b) {
//     return (a + b) / 2;
//   }
  
//   console.log(average(2, 1));



//   function setup() {
//     let image = document.getElementsByClassName(image)
//     let re
//     onclick.remove.image
//     let 
//   }
  
//   // Example case. 
//   document.body.innerHTML = `
//   <div class="image">
//     <img src="https://goo.gl/kjzfbE" alt="First">
//     <button class="remove">X</button>
//   </div>
//   <div class="image">
//     <img src="https://goo.gl/d2JncW" alt="Second">
//     <button class="remove">X</button>
//   </div>`;
  
//   setup();
  
//   document.getElementsByClassName("remove")[0].click();
//   console.log(document.body.innerHTML);

// function setup() {
//     let value = document.body.innerHTML.getElementById(value);
//     let double = document.body.innerHTML.getElementById(double).addEventListener("click");
//     console.log(value)
    

//     if (value > 0) {
//         return value * 2
//     } else {
//         return 1
//     }
//   }
  
//   // Example case. 
//   document.body.innerHTML = `
//   <form>
//     <input id="value" type="text" value="1"/>
//     <input id="double" type="button" value="Double"/>
//   </form>`;
  
//   setup();
  
//   document.getElementById("double").click(); 
//   console.log(document.getElementById("value").value);

// function johnMary(str) {
//     let string = "johnMary";
//     let subString1 = "john";
//     let subString2 = "mary";

//   }
  
//   console.log(johnMary("John&Mary"));


// class Snapshot {
//     constructor(array) {
//       this.array = array;
//     }
    
//     restore() {
//       return this.array;  
//     }
//   }
  
//   var array = [1, 2];
//   var snap = new Snapshot(array);
//   array[0] = 3;
//   array = snap.restore();
//   console.log(array.join()); //It should log "1,2"
//   array.push(4);
//   array = snap.restore();
//   console.log(array.join()); //It should log "1,2"