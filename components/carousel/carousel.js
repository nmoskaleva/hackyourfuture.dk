import React from 'react'
const { useEffect, useState } = React;

const CarouselComponent = ({ children }) => {
    const itemsInCarousel = React.Children.toArray(children)
    const [items, setItems] = useState({
        itemsInCarousel,
        startingIndex: 0
    });

    const startingIndex = items.startingIndex
    const numberOfVisibleItems = 4;

    // display given number of items (numberOfVisibleItems) at a time
    const itemsToShow = itemsInCarousel.slice(startingIndex, startingIndex + numberOfVisibleItems);

    // check itemsToShow array length: if less than 4, append items from the beginning of the array
    const itemsOnDisplay = itemsToShow.length > 4 ?
        itemsToShow :
        [
            ...itemsToShow,
            ...itemsInCarousel.slice(0, 4 - itemsToShow.length)
        ]

    const nextStartingIndex = items.startingIndex + 1;

    const goToNextItem = (startingIndex) => {
        const nextItem = startingIndex % itemsInCarousel.length;
        const lastItem = itemsInCarousel.length - 1;

        setItems({
            ...items,
            startingIndex: startingIndex < 0 ? lastItem : nextItem
        });
    };

    // change items on display every 5 seconds 
    useEffect(() => {
        const timer = setInterval(() => {
            goToNextItem(nextStartingIndex)
        }, 5000);
        return () => clearTimeout(timer);
    }, [startingIndex]);

    return itemsOnDisplay
};

export default CarouselComponent