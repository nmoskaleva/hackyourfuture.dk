import React from 'react'
import press from './press.json'
import styles from './partners.scss'

const { useEffect, useState } = React;

const CarouselComponent = ({ children }) => {
    const pressPartners = React.Children.toArray(children)
    const [partners, setPartners] = useState({
        pressPartners,
        startingIndex: 0
    });

    const startingIndex = partners.startingIndex

    // display 4 press partners
    const partnersToShow = pressPartners.slice(startingIndex, startingIndex + 4);

    // check partnersToShow array length: if less than 4, append items from the beginning of the array
    const partnersOnDisplay = partnersToShow.length > 4 ?
        partnersToShow :
        [
            ...partnersToShow,
            ...pressPartners.slice(0, 4 - partnersToShow.length)
        ]

    const forward = partners.startingIndex + 1;

    const goToNextItem = (startingIndex) => {
        const pressPartnersLength = pressPartners.length;
        const nextItem = startingIndex % pressPartnersLength;
        const lastItem = pressPartnersLength - 1;

        setPartners({
            ...partners,
            startingIndex: startingIndex < 0 ? lastItem : nextItem
        });
    };

    // change partners on display every 5 seconds 
    useEffect(() => {
        const timer = setInterval(() => {
            goToNextItem(forward)
        }, 5000);
        return () => clearTimeout(timer);
    }, [startingIndex]);

    return (
        <div className="wrapper">
            <style jsx>{styles}</style>
            {partnersOnDisplay}
        </div>
    );
};

export default () => (
    <>
        <style jsx>{styles}</style>
        <CarouselComponent>
            {press.map(({ id, logo, url, title }) => (
                <div className='partner' key={id}>
                    <a aria-label='Media link' rel='noopener' target='_blank' href={url}>
                        <img className='carouselImg' alt={title} src={`/static/media/${logo}`} width='170vw' />
                    </a>
                </div>
            ))}
        </CarouselComponent>
    </>
);