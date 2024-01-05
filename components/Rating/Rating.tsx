import React, { useEffect, useState, KeyboardEvent } from 'react'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import cn from 'classnames'
import StarIcon from './star.svg';

export default function Rating({ isEditable = false, rating, setRating, ...props }: RatingProps) {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const mountedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => changeRating(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => { isEditable && handleSpace(i + 1, e) }}
                    />
                </span>
            )
        })
        setRatingArray(mountedArray)
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return
        }
        constructRating(i)
    }

    const changeRating = (i) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !isEditable) {
            return
        }
        changeRating(i)
    }

    return (
        <div {...props}>
            {
                ratingArray.map((r, i) => {
                    return (
                        <span key={i}>{r}</span>
                    )
                })
            }
        </div>
    );
}