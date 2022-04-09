// //object
// var myInfo ={
//     name:'tam',
//     age: 18,
//     address:'ba vi - ba to',
//     getage : function(){
//         return this.age
//     }

// }
// // var mykey='address';
// console.log(myInfo.getage())



// object constructor 

// function Users(firstname, lastname, avatar){
//     // this = {};

//     // Thêm thuộc tính cho this
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.avatar=avatar;
//     // vd template string
//     this.getname = function(){
//         return `${this.firstname}${this.lastname}`
//     }
     
//     // return this;
// }

// ///// Prototype ......tao them 1 thuoc tinh ngoai ham tao

// Users.prototype.classname='deptrai';
// //// them phuoc thuc bang Prototype 
// Users.prototype.getclassname=function(){
//     return this.classname;
// }

// // tao doi tuong moi tu Uers
// // gan gia tri khoi tao cho no
// var yeu = new Users('dinh','tam','avatar')
// var em= new Users('huynh','thuong','avatar')

// yeu.tilte='lam ban gai anh nha';
// em.comment='Daaaaa';


// console.log(yeu.getname());
// console.log(em.getname());
// console.log(yeu.classname);
// console.log(yeu.getclassname());

// math object


// random *(so phan tu muốn random )

// var random = Math.floor(Math.random() * 100)

// if(random <50){
//     console.log('cuong hoa do thanh cong');
// }

///// vong lap For

// var myArray = [
//     'java',
//     'php',
//     'ruby'
// ]

// for (var i=0;i<myArray.length;i++){
//     console.log(myArray[i])
// }

///// For/in

// var myinfo =[
//     'java',
//     'php',
//     'ruby'
// ]
// var chuoi= 'tamyeuthuong'

// for(var key in chuoi){
//     console.log(key)
// }

///// For/of

// var myinfo =[
//     'java',
//     'php',
//     'ruby'
// ]
// var chuoi= 'tamyeuthuong'

// for(var value of chuoi){
//     console.log(value)
// }


//// while 

// var i=0;

// var myArray =[
//      'java',
//      'php',
//      'ruby'
// ]
// while (i<myArray.length){
//      console.log(myArray[i])
//       i++;
// }


//// continue
// for (var i=0;i<10;i++){
//     if(i%2 !== 0){
//         continue
//     }
//     console.log(i);
// }

/// vong lap long nhau

// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (var i=0;i<myArray.length;i++){
//     for(var j=0;j<myArray[i].length;j++){
//     console.log(myArray[i][j])
// }
// }

// //c2
// for (var i in myArray){
//     for(var j of myArray[i]){
//         console.log(j)

//     }
// }


var couses = [
    {
        id:0,
        name: 'javascript',
        coin:300
    } ,
    {
        id:1,
        name: 'php',
        coin:250
    },
    {
        id:2,
        name: 'ruby',
        coin:200
    },
    {
        id:3,
        name: 'ruby',
        coin:200
    }

]

// var cc=couses.filter(function(couse,index){
//     console.log(index)
//     return couse.name ==='ruby';
// })

// console.log(cc)

// var newcourse = couses.map(function(couse,index){
//     return {
//         id: couse.id,
//         name: `khoa hoc: ${couse.name}`,
//         coin: couse.coin,
//         coninText:`gia ${couse.coin}`
//     }
        

// })
// console.log(newcourse);

Array.prototype.find2= function(callback){
    var output=[];
    var arraylength= this.length;
    for (var i=0;i<arraylength;++i){
       var result=callback(this[i],i)
       if(result){
           output.push(this[i])
       }
    }
    return output;
  }
  
  var couses =[
    {
        id:0,
        name: 'javascript',
        coin:300
    } ,
    {
        id:1,
        name: 'php',
        coin:250
    },
    {
        id:2,
        name: 'ruby',
        coin:200
    },
    {
        id:3,
        name: 'ruby',
        coin:200
    }

]

  
  
  var htmls=couses.find2(function(couse,index){
     return couse.coin >210;
     
  })
  console.log(htmls)
  /* var htmls=couses.find(function(couse){
      console.log(couse)
  })
  console.log(htmls.join(" ")) */