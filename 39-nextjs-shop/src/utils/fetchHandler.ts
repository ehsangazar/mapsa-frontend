interface IOptions {
    method?: string,
    headers?: any,
    body?: any
}


const fetchHandler = async (url:string, options?:IOptions) => {
    let response:any = {}
    let data = {}
    const newOptions = {
        method: options?.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options?.headers,
        },
        body: options?.body ? JSON.stringify(options.body) : undefined,
    }

    try {
        response = await fetch(url,newOptions)
        data = await response.json()
    } catch (error) {
        data = {
            status: 500,
            statusText: 'Internal Server Error',
        }
    }


    return data
}

export default fetchHandler