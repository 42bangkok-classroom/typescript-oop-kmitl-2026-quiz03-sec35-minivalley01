export class Person {
  public firstname: string = '';
  public lastname: string = '';
  private age: number = 0; // ใช้ private เพื่อป้องกันการแก้ไขตรง ๆ

  // Static constant
  public static readonly COUNTRY: string = 'Thailand';

  // Method สำหรับตั้งค่าอายุ
  public setAge(age: number): void {
    if (!Number.isInteger(age) || age < 0) {
      throw new Error('Age must be a non-negative integer.');
    }
    this.age = age;
  }

  // Method สำหรับดึงค่าอายุ
  public getAge(): number {
    return this.age;
  }

  // Method สำหรับดึงชื่อเต็ม
  public getFullName(): string {
  // รวมชื่อและนามสกุลเข้าด้วยกัน
  const fullName = `${this.firstname} ${this.lastname}`.trim();

  // ถ้าทั้งสองเป็น empty string ให้คืนค่าเป็น " " (space)
  if (!this.firstname && !this.lastname) {
    return " ";
  }

  return fullName;
}

}