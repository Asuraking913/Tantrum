import React from 'react'
import Axios from "../utils/Axios"

const submitFunction = (e, data) => {
    e.preventDefault()

    if(!data.email || data.email.includes("@")) {
        data.onError("Please enter an email")
        return
    }

    // const response = Axios.post("/api/create")
}

export default submitFunction