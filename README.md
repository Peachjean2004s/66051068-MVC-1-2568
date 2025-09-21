# Job Fair Application System

ระบบรับสมัครงานอย่างง่ายสำหรับบริษัทที่มาเปิดบูทในงาน Job Fair ของภาควิชาวิทยาการคอมพิวเตอร์ พัฒนาขึ้นด้วย Vue.js โดยใช้สถาปัตยกรรมแบบ MVC (Model-View-Controller) และจัดการข้อมูลภายในแอปพลิเคชัน (In-memory)

---

## ✨ คุณสมบัติหลัก (Key Features)

- **แสดงรายการตำแหน่งงาน:** แสดงเฉพาะตำแหน่งงานที่ยังมีสถานะ "เปิดรับสมัคร"
- **ระบบล็อกอิน 2 รูปแบบ:**
  - Admin: สำหรับผู้ดูแลระบบ
  - Candidate: สำหรับนักศึกษาและผู้ที่จบการศึกษาแล้ว
- **เงื่อนไขการสมัครตามประเภทงาน (Business Logic):**
  - ตำแหน่งสหกิจศึกษา (internship) รับเฉพาะผู้สมัครที่มีสถานะ "กำลังศึกษา" (student)
  - ตำแหน่งงานปกติ (full-time) รับเฉพาะผู้สมัครที่มีสถานะ "จบแล้ว" (graduated)
- **การจัดการข้อมูลในแอป (No Database):** ไม่ต้องติดตั้งหรือรันฐานข้อมูลแยก ข้อมูลจะถูกรีเซ็ตทุกครั้งที่รีเฟรชหน้าเว็บ

---

## 🛠️ เทคโนโลยีที่ใช้ (Technologies Used)

- Frontend: Vue.js 3 (Composition API with `<script setup>`)
- Build Tool: Vite
- Routing: Vue Router
- Package Manager: Yarn
- Language: JavaScript (ES6+)
- Styling: CSS3

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

Job-fair-app/
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   ├── data/
│   │   ├── store.js
│   │   ├── candidates.json
│   │   ├── companies.json
│   │   ├── jobs.json
│   │   ├── admin.json
│   ├── view/
│   │   ├── JobsOpen.vue
│   │   ├── LoginView.vue
│   │   ├── ApplyView.vue
│   │   ├── AdminView.vue
│   ├── services/
│   │   ├── ApiService.js
│   ├── controller/
│   │   ├── applicationController.js
│   ├── model/
│   │   ├── cooperativeEducation.js
│   │   ├── regularPosition.js
├── public/
│   ├── vite.svg
├── package.json
├── vite.config.js
```

- **data/**: ทำหน้าที่เสมือน Database Layer เก็บข้อมูลตั้งต้นในรูปแบบ `.json` และ `store.js` เป็นศูนย์กลางในการจัดการข้อมูล
- **model/**: ทำหน้าที่เป็น Model Layer เก็บตรรกะทางธุรกิจ เช่น เงื่อนไขการสมัครงาน
- **controller/**: ทำหน้าที่เป็น Controller Layer จัดการ Logic ที่ซับซ้อน เป็นตัวกลางระหว่าง View และ Model
- **view/**: ทำหน้าที่เป็น View Layer แสดงผล UI ให้ผู้ใช้เห็น และรับ Input จากผู้ใช้

---

## ⚡️ การติดตั้งและรันโปรเจกต์ (Getting Started)

### สิ่งที่ต้องมี (Prerequisites)
- Node.js (v18 or higher)
- Yarn

### ขั้นตอนการติดตั้งและรัน (Installation & Running)

1. Clone the repository หรือดาวน์โหลดซอร์สโค้ด
2. เปิด Terminal แล้วเข้าไปที่โฟลเดอร์ของโปรเจกต์:
```bash
cd /path/to/your/job-fair-app
```
3. ติดตั้ง Dependencies ทั้งหมด:
```bash
yarn install
```
4. รันโปรเจกต์ในโหมด Development:
```bash
yarn dev
```
5. เปิดเบราว์เซอร์แล้วเข้าไปที่ `http://localhost:****` (หรือ Port ที่แสดงใน Terminal)

---

## 🔑 ข้อมูลสำหรับล็อกอิน (Login Credentials)

### สำหรับ Admin
- Username: `admin`
- Password: `password123`

### สำหรับ Candidate
- Username: `candidate_id`
- Password: `last_name`

ตัวอย่าง 1 (จบแล้ว):
- Username: `66010001`
- Password: `Jaidee`

ตัวอย่าง 2 (กำลังศึกษา):
- Username: `66010002`
- Password: `Rukrian`

