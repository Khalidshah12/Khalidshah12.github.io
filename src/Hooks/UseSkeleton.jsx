import { useEffect, useState } from 'react';

export function UseSkeleton(delay = 500) {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(true)
        }, delay)
        return () => {
            clearTimeout(timer)
        }
    }, [delay])
    return loading
}
