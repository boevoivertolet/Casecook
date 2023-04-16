import React, {useState} from 'react';

export const AppTry = () => {

    const [editMode, setEditMode] = useState<boolean>(true)

    const green = () => {
      setEditMode(false)
    }
    const red = () => {
        setEditMode(true)
    }


    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column',height:'100vh'}}>
            {editMode
                ? <div tabIndex={1} onClick={green} style = {{width: '100px', height: '100px', background: 'red'}}>red</div>

                : <div tabIndex={1} onBlur={red} style = {{width: '100px', height: '100px', background: 'green'}}>green</div>
            }
        </div>
    );
};
