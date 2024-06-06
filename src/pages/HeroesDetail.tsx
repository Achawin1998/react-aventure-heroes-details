import React from 'react'
import { useRoute, useLocation } from 'wouter'
import { useHeroes } from '../hooks/useHeroes'
import { useTitle } from '../hooks/useTitle'

export const HeoresDetail = () => {

    const [, params] = useRoute('/heroes/:heroesName');
    const heroesName = decodeURI(params!.heroesName) // เข้าถึง ตัวข้างบน คือเป็นการดึงชื่อจาก url
    const { getHeroesByName } = useHeroes(); // ฟังชันที่สร้างไว้หน้า hooks ทำการหน้าชื่อถ้าตรงก็แสดงชื่อ hero
    const { img, link, biography } = getHeroesByName(heroesName) // ส่งค่า heroesName ไปด้วยเพื่อให้ข้อมูล match กัน
    // เพราะในหน้า hooks ตัวฟังชันนี้มีการรับ parameter มาอยู่แล้ว เราก็แค่ส่งค่าไปเพิ้อให้มันเช็ค
    const [, setLocation] = useLocation();
    useTitle(`Heroes | ${heroesName}`)

    return (
        <div className="flex flex-col items-center p-8 min-h-screen bg-gray-800 text-white">
            <div className="flex flex-col md:flex-col md:gap-4 md:w-[calc(80%+1rem)] lg:w-[calc(70%+1rem)] items-center p-10 border-dashed border-2 rounded-xl">
                <div className="flex flex-col items-center w-full">
                    <a href={link} target="_blank">
                        <p className="font-mono font-bold text-2xl lg:text-3xl text-center hover:text-gray-300">
                            {heroesName}
                        </p>
                    </a>

                    <img src={img} className="lg:h-40 md:h-28 object-cover my-3" alt={heroesName} />
                </div>

                <p className="font-mono md:text-base lg:text-lg p-3 lg:p-0">
                    {biography}
                </p>
                <button onClick={() => setLocation('/heroes')} className="text-black bg-white rounded-lg p-3">Go back</button>
            </div>
        </div>
    )
}