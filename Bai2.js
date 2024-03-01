// Bài 2: IIFE: Immediately Invoked Function Expression 
// - là các hàm chạy ngay sau khi được định nghĩa

// 1. IIFE trông như thế nào
(function() {
    console.log('NOW NOW')
})()

// 2. Dùng dấu ; trước IIFE
let fullName = 'Chanh Vo';
(function () {

})()

// 3. IIFE là hàm "private"
;(function myFunc() {
    console.log('NOW')
})()

myFunc() // ko gọi đc hàm ở phạm vi bên ngoài

// 4. Sử dụng IIFE khi nào
// Khi muốn đoạn mã chạy ngay, tuy nhiên biến 
// và hàm không thoát ra phạm vi biến toàn cục ảnh hưởng dự án

// 5. Các cách tạo ra một IIFE
// Cách phổ biến nhất
;(function() {
   let fullName = 'Chanh Vo'
   console.log(fullName)
})()


// 6. Ví dụ sử dụng IIFE
const app = (function() {
    // Private
    const cars = []

    return {
    add(car) {
        this.cars.push(car)
    },
    edit(index, car) {
        this.cars[index] = car
    },
    delete(index) {
        this.cars.splice(index, 1)
    }
    }
})()

