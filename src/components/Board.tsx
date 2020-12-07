import React, {useState, useEffect} from 'react';
const Board: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `You clicked ${count} times`;
        return () => {
            document.title = `You are ${count}`
        }
    });

    useEffect(() => {
        console.log("Clicked!!!")
    }, [count])
    return (
        <div>
            <p>You clicked {count}</p>
                <button onClick={()=> setCount(count + 1)}>
                    Click me
                </button>
        </div>
    )
}
export default Board;