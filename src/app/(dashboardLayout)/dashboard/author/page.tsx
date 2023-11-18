"use client"
import config from '../../../../config/index'
import { useState } from "react"
import { toast } from "react-toastify";

const Author = () => {

    const [imgurl, setImage] = useState<File | string>('');
    const [createObjectURL, setCreateObjectURL] = useState<string>('');
    const [inputsValue, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setValues({
            ...inputsValue,
            [name]: value
        })
    }

    const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', imgurl)
        formData.append("upload_preset", "daamw3ao");

        const fetched = await fetch(`https://api.cloudinary.com/v1_1/be-fresh-ltd/image/upload`, {
            method: 'POST',
            body: formData
        }).then((response) => response.json()).catch(error => console.log(error))
       
        const store = { ...inputsValue, imgurl: fetched.secure_url }
        try {
            const response = await fetch(`https://prisma-vercel-cloudinary-server.vercel.app/api/v1/author/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(store )
            }).then(res => res.json()).then(data => data)
            
            if(response.status ===200 && response.success === true){
                toast.success(response.message)
            }
        } catch (error:any) {
            toast.error(error.message)
        }

    }
    return (
        <div className="w-full max-w-xs">
            <form onSubmit={formSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Name
                    </label>
                    <input
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        name="name"
                        type="text"
                        placeholder="Username" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        name="email"
                        type="text"
                        placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        onChange={handleChange}
                        className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="******************" />

                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Image
                    </label>
                    <input
                        onChange={uploadToClient}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        name="image"
                        type="file"
                        placeholder="Select image" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>

                </div>
            </form>

        </div>
    )
}

export default Author