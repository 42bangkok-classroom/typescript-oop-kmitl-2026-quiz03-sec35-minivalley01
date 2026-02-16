import { Drawable } from './drawable'
import { Shape } from './shape'
import { Circle } from './circle'
import { Rectangle } from './rectangle'

// ============================================
// ทดสอบ Interface: Drawable และ Polymorphism
// ============================================
console.log('=== Testing Interface: Drawable & Polymorphism ===')

// ใช้ array ของ Drawable interface เพื่อแสดง polymorphism
// แสดงให้เห็นว่า Circle และ Rectangle implement Drawable interface
const shapes: Drawable[] = [
  new Circle('red', 5),
  new Rectangle('blue', 4, 6),
  new Circle('green', 3),
  new Rectangle('yellow', 2, 8)
]

// Polymorphism: เรียก method เดียวกัน (draw, getArea) แต่ได้ผลลัพธ์ต่างกันตาม type
shapes.forEach((shape, index) => {
  console.log(`\nShape ${index + 1}:`)
  shape.draw()
  console.log(`Area: ${shape.getArea()}`)
})
// Shape 1:
// Drawing a red circle with radius 5
// Area: 78.53981633974483
// 
// Shape 2:
// Drawing a blue rectangle with width 4 and height 6
// Area: 24
// 
// Shape 3:
// Drawing a green circle with radius 3
// Area: 28.274333882308138
// 
// Shape 4:
// Drawing a yellow rectangle with width 2 and height 8
// Area: 16

// ============================================
// ทดสอบ Abstract Class: Shape
// ============================================
console.log('\n=== Testing Abstract Class: Shape ===')

const purpleCircle = new Circle('purple', 10)
const orangeRectangle = new Rectangle('orange', 5, 5)

// ทดสอบว่า Circle และ Rectangle extends Shape
console.log('Circle extends Shape:', purpleCircle instanceof Shape)
// true
console.log('Rectangle extends Shape:', orangeRectangle instanceof Shape)
// true

// ทดสอบ method จาก Shape class (inheritance)
console.log(`Circle color from Shape: ${purpleCircle.getColor()}`)
// purple
console.log(`Rectangle color from Shape: ${orangeRectangle.getColor()}`)
// orange

// ============================================
// ทดสอบการใช้งานแต่ละ Class โดยตรง
// ============================================
console.log('\n=== Testing Individual Classes ===')

const brownCircle = new Circle('brown', 8)
console.log(`Circle color: ${brownCircle.getColor()}`)
// brown
brownCircle.draw()
// Drawing a brown circle with radius 8
console.log(`Circle area: ${brownCircle.getArea()}`)
// 201.06192982974676

const grayRectangle = new Rectangle('gray', 6, 4)
console.log(`Rectangle color: ${grayRectangle.getColor()}`)
// gray
grayRectangle.draw()
// Drawing a gray rectangle with width 6 and height 4
console.log(`Rectangle area: ${grayRectangle.getArea()}`)
// 24
