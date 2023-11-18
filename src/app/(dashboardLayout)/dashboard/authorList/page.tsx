'use client'
import { useEffect, useState } from 'react'
import Image from "next/image"
import config from '../../../../config'


const page = () => {
    const [list, setList] = useState({})
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`https://prisma-vercel-cloudinary-server.vercel.app/api/v1/author/allAuthor`, { method: 'GET', headers: { 'Content-Type': 'application/json', } })
            .then(response => response.json())
            .then(data => {
                setList(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr className='grid grid-cols-3 gap-5'>
                        <th className='text-left'>Name</th>
                        <th className='text-left'>Email</th>
                        <th className='text-left'>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading === true ? <tr><td>Loading...</td></tr> : list?.data?.map((item: any, index: string) => {
                            let array = []
                            array.push(
                                <tr key={index} className='grid grid-cols-3 gap-5'>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td><Image style={{ width: 'auto', height: 'auto' }} priority src={`${item.imgurl}`} alt='No image' width={50} height={50} /> </td>
                                </tr>
                            )
                            return array

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default page