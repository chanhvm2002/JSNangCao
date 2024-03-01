// Scope - Phạm vi
// 1. Các loại phạm vi
// - Global - Toàn cầu: Bất cứ đâu trong chương trình có thể truy cập sử dụng nó
    var message = "Hoc ve scope"

    function logger() {
        console.log(message)
    }
    logger()
// - Code block - Khối mã: let, const -> những biến này chỉ truy cập bên trong khối mã
// code trong dấu {} là khối mã
{
    // code 
    const age = 18
    console.log(age)
}

// đem ra ngoài thì lỗi
{
    // code 
    const age = 18
}
console.log(age)

// - Local scope - Hàm: var, function -> khi khai báo biến ở 1 hàm nó lại nằm bên trong hàm khác thì chỉ dùng đc biến hàm cha
// gọi đc 
function logger() {
    function logger2() {
        console.log("LOG 2")
    }
    logger2()
}
logger()

// không gọi đc 
function logger() {
    function logger2() {
        console.log("LOG 2")
    }
    logger2()
}
logger()

// 2. Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
// Hàm này cóp 4 phạm vi: 1 phạm vi global, 3 phạm vi của hàm logger, nó riêng biệt
// Mỗi lần gọi hàm sẽ tạo 1 phạm vi mới
function logger(first, last) {
    console.log(first, last)
}
logger('Son, Dang')
logger('Chanh, Vo')
logger('Dung, Nguyen')

// 3. Các hàm có thể truy cập các biến được khai báo
// trong phạm vi của nó và bên ngoài nó
// trong phạm vi của nó:
function logger(first, last) {
    console.log(first, last)

    // hàm này trong phạm vi của nó
    const age = 20
    console.log(age)
}
logger('Son, Dang')
logger('Chanh, Vo')
logger('Dung, Nguyen')

// ngoài phạm vi của nó:
const age = 18
function logger() {
    function logger2() {
        console.log(age)
    }
    logger2
}
logger()

// 4. Cách thức một biếm được truy cập
const abc = 16
{
const abc = 14
    {
        {
            const abc = 12 // lun lấy biến phạm vi gần nhất
            {
                console.log(abc)
            }
        }
    }
}
// 5. Khi nào một biến bị xóa khỏi bộ nhớ ?
    // Biến toàn cầu: khi chương trình bị thoát: thoát web chẳng hạn

    // Biến trong code block & trong hàm?
// code block  
{
    const age = 16
    console.log(age)
}
// sau dấu } là thoát khỏi code block rồi

// hàm
function logger() {
    const rand = Math.random()
    console.log(rand)
}
logger() // khi hàm này thực thi xong, biến rand sẽ xóa khỏi bộ nhớ

// -------------------------------------------------
