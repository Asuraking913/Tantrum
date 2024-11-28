import React from 'react'
import Axios from "../utils/Axios"

const submitFunction = async (e, data) => {
    e.preventDefault()

    // console.log(data.email)
    // console.log(data.content)

    data.onLoading(true)

    let targetData = {
        post_email: data.email, 
        content: data.content
    }

    try {

        const response = await Axios.post("/api/create/post/", targetData)
        if(response.status === 201) {
            console.log(response)
            data.onFinish(t => !t)
            // data.onLoading(false)
        }

        
    } catch (error) {
        if (error) {
            data.onError("An error occured")
            console.log(error.response.data)
            // data.onLoading(false)
        }
        
    }
}

export default submitFunction