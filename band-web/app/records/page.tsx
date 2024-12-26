import React from 'react';
import RecordList from '../../components/RecordList';

const Records: React.FC = () => {
    return (
        <div className="bg-background text-foreground">
            <h1 className="text-4xl font-bold text-center mb-8 text-accent">
                Nahrávky
            </h1>
            <RecordList />
        </div>
    );
};

export default Records;
