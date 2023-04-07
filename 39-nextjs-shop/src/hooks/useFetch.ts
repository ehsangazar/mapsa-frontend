import fetchHandler from "@/utils/fetchHandler"
import { useCallback, useEffect, useState } from "react"

interface IOptions {
    method?: string,
    headers?: any,
    body?: any
}


const useFetch = (url:string,options?:IOptions) => {
    const [data,setData] = useState<any>([])
    const [loading,setLoading] = useState(true)

    const handleFetch = useCallback(async () => {
        setLoading(true)
        const data:any = await fetchHandler(url,options)
        setData(data)
        setLoading(false)
    },[url,options])
    
    useEffect(() => {
        handleFetch()
    },[handleFetch])


    return [data,loading]
}

export default useFetch