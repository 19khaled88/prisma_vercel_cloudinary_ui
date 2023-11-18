'use client'
import React from 'react'

const page = async() => {
    const authors = await fetch(`${process.env.API_LINK}/author/allAuthor`,{method:'GET',headers: { 'Content-Type': 'application/json', }}).then(res => res.json()).then(data => { return data })
    console.log(authors)
    return (
        <div><table className="table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                </tr>
                <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                </tr>
                <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default page