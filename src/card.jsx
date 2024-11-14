import React from 'react';
import './card.css';
import tick from './images/tick.png'
import ReactStars from 'react-rating-stars-component';
function Card(props) { 
    return (
        <div className='container'>
        <div className='row'>
            <div className='display-grid'>
                <div className='astro-box'>
                    <div className='upper-details'>
                        <div className='details'>
                        <div className='img-rate'>
                        <div className='image-astro normal-border'>
                        <img src={props.img}
                        loading='lazy'
                         alt='dalsy' 
                        />
                         </div>
                         <div className='rating'>
                         <div>
                         <ReactStars
                                            count={5}
                                            value={props.rat}
                                            size={16}
                                            activeColor="#ffd700"
                                            isHalf={true}
                                            edit={false} 
                                        />
                         </div>
                         <span className='order-no'>{props.order}</span>  
                                    </div>
                                    
                         </div>
<div className='astro-bio'>
<div className='astro-name '>{props.name}</div>
<div className='designation lgt_clr'><span>{props.des}</span></div>
<div className='language lgt_clr'>
<span className='my-span'>{props.lan} </span>
{/* <span className='my-span'>English, </span>
<span className='my-span'>Telugu</span> */}
</div>
<div className='years lgt_clr'>{props.exp}</div>
<div className='price'>
<span>{props.price}</span>
<del className='disct_prc'>{props.dis}</del>

</div>
</div>


                        </div>
                        <div className='chat-btn'>
                            <div className='active-tick single-tick'> 
                            <span className='tick-icon'>
                            <img src={tick}
                        loading='lazy'
                         alt='dalsy' />  </span>
                            </div>
                            <div className='chat-button'>
                        <button className='online chat-now'>chat</button>
<div className='chat-status-hidden overflow-text-hidden'>wait ~55 </div>
                        </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
};
export default Card;