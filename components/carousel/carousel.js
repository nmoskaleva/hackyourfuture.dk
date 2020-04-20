import React from 'react'
const { useEffect, useState } = React;

const CarouselComponent = ({ children }) => {
    const itemsInCarousel = React.Children.toArray(children)
    const [items, setItems] = useState({
        itemsInCarousel,
        startingIndex: 0
    });

    const startingIndex = items.startingIndex

    // display 4 items at a time
    const itemsToShow = itemsInCarousel.slice(startingIndex, startingIndex + 4);

    // check itemsToShow array length: if less than 4, append items from the beginning of the array
    const itemsOnDisplay = itemsToShow.length > 4 ?
        itemsToShow :
        [
            ...itemsToShow,
            ...itemsInCarousel.slice(0, 4 - itemsToShow.length)
        ]

    const forward = items.startingIndex + 1;

    const goToNextItem = (startingIndex) => {
        const itemsInCarouselLength = itemsInCarousel.length;
        const nextItem = startingIndex % itemsInCarouselLength;
        const lastItem = itemsInCarouselLength - 1;

        setItems({
            ...items,
            startingIndex: startingIndex < 0 ? lastItem : nextItem
        });
    };

    // change items on display every 5 seconds 
    useEffect(() => {
        const timer = setInterval(() => {
            goToNextItem(forward)
        }, 5000);
        return () => clearTimeout(timer);
    }, [startingIndex]);

    return itemsOnDisplay
};

export default CarouselComponent