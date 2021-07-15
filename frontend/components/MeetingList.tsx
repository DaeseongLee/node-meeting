import React, { useCallback, useMemo } from 'react';

import Router from 'next/router';
import MeetingItem from './MeetingItem';

const MeetingList = () => {

    return (
        <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {
                [1, 2, 3, 4, 5, 6].map(as => {
                    return (
                        <MeetingItem key={as} />
                    )
                })
            }
        </div>
    )
};
export default MeetingList;