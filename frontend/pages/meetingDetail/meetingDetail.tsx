import React from 'react';

import MeetingDetailLayout from '../../components/MeetingDetailLayout';
import MeetingInfo from './meetingInfo';


const MeetingDetail = () => {
    return (

        <MeetingDetailLayout>
            <MeetingInfo />
        </MeetingDetailLayout>
    );
};

export default MeetingDetail;