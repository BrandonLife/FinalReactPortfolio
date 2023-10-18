import React from "react"
import { useState } from "react"


function NewCard() {
    const [data, setData] = useState({
        title: '',
        overview: '',
        url:''
    })     
    
        return (
            <div>
                <h1>Add a project card</h1>
                <form method="POST" action="http://localhost:8080/cards">
                    <div className="input-container">
                        <div className="input-element">
                            <label htmlFor="title">Title</label>
                            <input onChange={(e)=> setData({...data, title: e.target.value}) } value={data.title} type="text" id="title" name="title" />
                        </div>
                        <div className="input-element">
                            <label htmlFor="overview">Overview</label>
                            <input onChange={(e)=> setData({...data, overview: e.target.value}) } value={data.overview} type="text" id="overview" name="overview" />
                        </div>
                        <div className="input-element">
                            <label htmlFor="url">URL</label>
                            <input onChange={(e)=> setData({...data, url: e.target.value}) } value={data.url} type="text" id="url" name="url" />
                        </div>
                    </div>{/* End of input container */}
                    <input type="submit" value='Add project' />
                </form>
            </div>
        )

    }
export default NewCard