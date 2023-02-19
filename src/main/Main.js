import './main.scss'

const Main = ({itemInfo}) => {
    return (
        <div className="main">
            <div className="main__container container">
                <div className='main__body'>
                    {itemInfo.map((item)=> {
                        return (            
                            <div className='main__column' key={item.id}>
                                <div className='main__item item'>
                                    <a href='#' className='item__image ibg'>
                                        <img src={item.img} alt="image" srcSet={item.src_set}/>
                                    </a>
                                    <h1 className='item__content-type'>{item.content_type}</h1>
                                    <a href='#' className='item__title'>
                                        {item.title}
                                    </a>
                                    <div className='item__details'>
                                        <div className='item__details-name'>{item.author}</div>
                                        <div className='item__details-date'>{item.date}</div>
                                        <div className='item__details-views'>{item.views}</div>    
                                    </div>
                                    <div className='item__description'>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>    
            </div>
        </div>
    )
}

export default Main ;