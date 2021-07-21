import React, { useCallback, useMemo } from 'react';



import MeetingItem from './MeetingItem';


const MeetingList = () => {

    return (
        <div className="wrapper">
            <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                {
                    [1, 2, 3, 4, 5, 6].map(as => {
                        return (
                            <MeetingItem key={as} />
                        )
                    })
                }
            </div>
        </div>
    )
};
export default MeetingList;