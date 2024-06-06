import { useState , useEffect } from "react";
import { Heroes } from "../interfaces";
import data from '../data/heroses.json'

export const useHeroes = () => {
    
    const [heroes , setHeroes] = useState<Heroes[]>([]) // เก็บข้อมูล heroes 
    const [loading , setLoading] = useState<boolean>(true)

    const getHeroesByName = (nameHeroes: string) => {
        return heroes.find(data => data.hero === nameHeroes) ?? ({} as Heroes)
        // ใช้ find ในการหาชื่อ heroes โดย tab เข้าไปให้ตรงชื่อกับข้อมูลใน json ถ้ามีชื่อก็จะ
        // return ชื่อนั้นออกมา ถ้าไม่มีจะ retuen object เปล่า
    }

    useEffect(() => {
        setTimeout(() => {
            setHeroes(data) // ตรงนี้คือ data จากข้างบน
            setLoading(false)
        } , 300) // หน่วงเเวลา 0.3 sec
    })

    return { // เอาไปใช้ในหน้า HeroesList
        heroes,
        loading,
        getHeroesByName 
    }
}