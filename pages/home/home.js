// pages/home/home.js
Page({
  data: {
    name: 'JZ',
    age: '18',
    students:[
      {name:'ji',age:'20',sex:'m'},
      {name:'he',age:'21',sex:'w'}
    ],
    count: 0
  },
  HandleButonClieck(){
    this.setData({
      count :this.data.count +=1
    }),
    console.log(this.data.count)
  }
})