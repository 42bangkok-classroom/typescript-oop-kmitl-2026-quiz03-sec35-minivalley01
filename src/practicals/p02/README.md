# TypeScript Quiz — ข้อ 2 (1 คะแนน)
## 🎯 คำสั่ง

ให้นักเรียนสร้าง class Person ในไฟล์ person.ts
โดยต้องทำให้ไฟล์ index.ts ที่กำหนดให้ สามารถทำงานได้ถูกต้อง และได้ผลลัพธ์ตามที่คาดหวัง

ห้ามแก้ไขไฟล์ index.ts

## 📌 หมายเหตุสำคัญ

**ในไฟล์ `index.ts` มี comment (`//`) ที่แสดงตัวอย่างผลลัพธ์ที่คาดหวัง**

ให้นักเรียนอ่านผลลัพธ์จาก comment เหล่านั้น แล้วเขียน method logic ใน class ต่างๆ ให้สอดคล้องกับผลลัพธ์ที่แสดงไว้

**ตัวอย่าง:**
```typescript
console.log(person.getFullName())
// John Doe
```

จาก comment ด้านบน แสดงว่าผลลัพธ์ที่คาดหวังคือ `"John Doe"` ดังนั้น method `getFullName()` ใน class `Person` ต้อง return ค่าในรูปแบบนี้
```
📁 โครงสร้างไฟล์ที่ต้องมี
p02/
 ├── person.ts   ← นักเรียนต้องสร้าง
 └── index.ts    ← ไฟล์ที่กำหนดให้
```
## 📌 เงื่อนไขบังคับ

1. ต้องสร้าง class ชื่อ Person
2. ต้อง export class
3. ต้องมีอย่างน้อย 1 private property
4. ค่า age ต้องไม่สามารถแก้ไขตรง ๆ จากภายนอกได้
5. ต้องมี method:
  - setAge()
  - getAge()
  - getFullName()
6. ต้องมี static property ชื่อ COUNTRY
7. ห้ามใช้ any
8. ห้ามใช้ console.log ภายใน class