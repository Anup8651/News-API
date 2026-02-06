
import { useEffect } from 'react';
import Wrapper from '../components/Wrapper'
import { usemycontext } from '../context/NewsContext';
import Loading from '../components/Loader'
const News = () => {
    
    const {news,setNews,fetchdata,loading} = usemycontext()

    useEffect(()=>{
        ( async ()=>{
            const data = await fetchdata()
            setNews(data.articles)
        })()
    },[])

    if(loading) return <Loading />

    return (
        <Wrapper>
            <div className='grid grid-cols-4 gap-4 pb-4'>
                {news.map((newdetails,index)=>{
                    if(!newdetails.urlToImage) return null;
                    return(
                        <Card key={index}  details={newdetails}/>
                    )
                })}
            </div>
        </Wrapper> 
    )
}

const Card = ({details}) => {
    // console.log(details)
    return (
        <div className="card bg-base-200 shadow-sm">
            <figure>
                <img className='w-full aspect-video object-cover'
                    src={details?.urlToImage}
                    alt="hj" />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-2">{details?.title}</h2>
                <p className='line-clamp-3'>{details.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> window.open(details.url)} className="btn btn-primary mt-4">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default News