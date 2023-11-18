// const baseUrl = process.env.API_LINK
const baseUrl = 'http://localhost:3039/api/v1'
const callPostAPI = async (url:string,method:string,payload:any) => {
    try {
        const res = await fetch(
            `${baseUrl}/${url}`,
            {
                method: method,
                headers: { 'Content-Type': 'application/json', },
                // headers: {
                //     'X-RapidAPI-Key': 'your-rapidapi-key',
                //     'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                // },
                body:JSON.stringify(payload)
            }
        );
        const data = await res.json();
        console.log(data)
    } catch (err) {
        console.log(err);
    }
};

const callGetAPI =async (url:string,method:string,) => {
    try {
        const res = await fetch(
            `${baseUrl}/${url}`,
            {
                method: method,
                headers: { 'Content-Type': 'application/json', },
                              
            }
        );
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

export const ApiCall = {
    callGetAPI,
    callPostAPI
}

