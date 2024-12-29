import React from 'react';
import RecordList from '../../components/RecordList';
import { Record } from '../../data/recordsData';

const Records: React.FC = () => {
    return (
        <div className="bg-background text-foreground">
            <h1 className="text-4xl font-bold text-center mb-8 text-accent">
                Nahrávky
            </h1>
            <h2 className="text-foreground text-3xl font-bold mb-8 text-start">
                Lesanten (2024)
            </h2>
            <RecordList filter={(record: Record) => record.album == "Lesanten"} />
            <h2 className="text-foreground text-3xl font-bold my-8 text-start">
                Na Jabloni (2003)
            </h2>
            <RecordList filter={(record: Record) => record.album == "Na Jabloni"} />
        </div>
    );
};

export default Records;
