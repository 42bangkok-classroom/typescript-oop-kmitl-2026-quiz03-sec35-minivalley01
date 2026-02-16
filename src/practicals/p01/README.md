# TypeScript Quiz — ข้อ 1 (1 คะแนน)
## 🎯 คำสั่ง

ให้นักเรียนสร้าง class Student ในไฟล์ student.ts
โดยต้องทำให้ไฟล์ index.ts ที่กำหนดให้ สามารถทำงานได้ถูกต้อง และได้ผลลัพธ์ตามที่คาดหวัง

ห้ามแก้ไขไฟล์ index.ts

## 📌 หมายเหตุสำคัญ

**ในไฟล์ `index.ts` มี comment (`//`) ที่แสดงตัวอย่างผลลัพธ์ที่คาดหวัง**

ให้นักเรียนอ่านผลลัพธ์จาก comment เหล่านั้น แล้วเขียน method logic ใน class ต่างๆ ให้สอดคล้องกับผลลัพธ์ที่แสดงไว้

**ตัวอย่าง:**
```typescript
student.printName()
// John Doe
```

จาก comment ด้านบน แสดงว่าผลลัพธ์ที่คาดหวังคือ `"John Doe"` ดังนั้น method `printName()` ใน class `Student` ต้องแสดงผลลัพธ์ในรูปแบบนี้
```
📁 โครงสร้างไฟล์ที่ต้องมี
p01/
 ├── student.ts   ← นักเรียนต้องสร้าง
 └── index.ts      ← ไฟล์ที่กำหนดให้
```

## 📌 เงื่อนไขบังคับ

1. ต้องสร้าง class ชื่อ Student
2. ต้อง export class
3. ต้องมี attribute `firstname` และ `lastname`
4. ต้องมี method `printName()` สำหรับแสดงชื่อเต็ม
5. ห้ามใช้ `any`