import { Product } from './product'
import { Playstation } from './playstation'

const product = new Product('Generic Product')

console.log(product.name)
// Generic Product

console.log(product.getPrice())
// 0

product.setPrice(1000)

console.log(product.getPrice())
// 1000

const ps = new Playstation('PS5', 5, 17990)

console.log(ps.getProfile())
// PS5 (Gen 5)

console.log(ps.getPrice())
// 17990

ps.setPrice(18990)

console.log(ps.getPrice())
// 18990

console.log(ps.getDiscountPrice())
// 17091 (ถ้า Product.DISCOUNT_PERCENT = 10, คำนวณจาก 18990 - (18990 * 10 / 100))
