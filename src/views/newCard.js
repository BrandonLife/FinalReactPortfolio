import React, {useState} from "react"
function NewCard() {

    const [formValue, setFomrValue] = useState({ title: "", overview: "", url: "" })
    const handleInput = (e) => {
        const { name, value } = e.target
        setFomrValue({ ...formValue, [name]: value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const allInputValue = { title: formValue.title, overview: formValue.overview, url: formValue.url }
        
        fetch('http://localhost:8080/cards/', {
            method: "POST",
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                "Access-Control-Allow-Origin": 'http://localhost:3000'
            },
            body: JSON.stringify(allInputValue)
        })
            .then(response => response.json())
            .then(data => data)
    }  
        return (
            <div>
                <h1>Add a project card</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className="input-element">
                            <label htmlFor="title">Title</label>
                            <input onChange={handleInput} value={formValue.title} type="text" id="title" name="title" />
                        </div>
                        <div className="input-element">
                            <label htmlFor="overview">Overview</label>
                            <input onChange={handleInput} value={formValue.overview} type="text" id="overview" name="overview" />
                        </div>
                        <div className="input-element">
                            <label htmlFor="url">URL</label>
                            <input onChange={handleInput} value={formValue.url} type="text" id="url" name="url" />
                        </div>
                    </div>{/* End of input container */}
                    <input type="submit" />
                </form>
            </div>
        )

    }
export default NewCard