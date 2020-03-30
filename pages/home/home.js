// pages/home/home.js
Page({
  data: {
    students: [
      { name: 'ji', age: '20', sex: 'm' },
      { name: 'he', age: '21', sex: 'w' }
    ],
    count: 0
  },
  HandleAdd() {
    this.setData({
      count: this.data.count += 1
    }),
      console.log(this.data.count)
  },
  HandleSub() {
    this.setData({
      count: this.data.count -= 1
    })
  }

})