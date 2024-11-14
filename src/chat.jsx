import React from 'react';
import Card from './Card';
import Chathead from './astro_head';
import './chat.css';
import g1 from './images/g1.jpg';

function Chat() {
    return (
        <div className='cont-layout'>
            <Chathead />
            <div className='layout'>
                <div className='one-card'>
                    <Card
                        img={g1}
                        order="52228 orders"
                        name="Roja"
                        des="Tarot"
                        lan="Telugu, Hindi, English"
                        exp="Exp : 3 years"
                        price="FREE"
                        dis="24/min"
                        rat={3}
                    />
                </div>
                <div className='one-card'>
                    <Card
                        img={g1}
                        order="928 orders"
                        name="Vaishu"
                        des="Tarot, Vastu"
                        lan="Hindi, English"
                        exp="Exp : 1 year"
                        price="FREE"
                        dis="20/min"
                        rat={2}
                    />
                </div>
                <div className='one-card'>
                    <Card
                        img={g1}
                        order="928 orders"
                        name="Vaishu"
                        des="Tarot, Vastu"
                        lan="Hindi, English"
                        exp="Exp : 1 year"
                        price="FREE"
                        dis="20/min"
                        rat={2}
                    />
                </div>
                <div className='one-card'>
                    <Card
                        img={g1}
                        order="928 orders"
                        name="Vaishu"
                        des="Tarot, Vastu"
                        lan="Hindi, English"
                        exp="Exp : 1 year"
                        price="FREE"
                        dis="20/min"
                        rat={2}
                    />
                </div>
                <div className='one-card'>
                    <Card
                        img={g1}
                        order="928 orders"
                        name="Vaishu"
                        des="Tarot, Vastu"
                        lan="Hindi, English"
                        exp="Exp : 1 year"
                        price="FREE"
                        dis="20/min"
                        rat={2}
                    />
                </div>
                <div className='one-card'>
                    <Card
                        img={g1}
                        order="928 orders"
                        name="Vaishu"
                        des="Tarot, Vastu"
                        lan="Hindi, English"
                        exp="Exp : 1 year"
                        price="FREE"
                        dis="20/min"
                        rat={2}
                    />
                </div>
                <div className='one-card'>
                    <Card
                        img={g1}
                        order="11502 orders"
                        name="Archhana"
                        des="Numerology"
                        lan="Hindi, English"
                        exp="Exp : 6 years"
                        price="FREE"
                        dis="80/min"
                        rat={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Chat;
