import React from 'react'
import Wrapper from './Wrapper'
import { usemycontext } from '../context/NewsContext';

const Button = ({className}) => {

    const {setNews,fetchdata} = usemycontext()
    
    const categories = ['Business', 'Entertainment', 'Eeneral', 'Health', 'Science', 'Sports', 'Technology'];

    const handleclick = async (categories)=>{
        const response = await fetchdata(`/everything?q=${categories}`)
        // console.log(response)
        setNews(response.articles)
    }

    return (
        <div className={`${className} `}>

            <Wrapper >

                <div className=' max-w-full w-fit flex m-auto gap-2 overflow-x-auto scroll-bar'>
                    {categories.map((category) => {
                        return (
                            <button onClick={()=>{handleclick(category)}} key={category} className="btn btn-primary">{category}</button>
                        )
                    })}
                </div>
            </Wrapper>
        </div>
    )
}

export default Button