import React from 'react';

interface IProps {
    canClick?: boolean;
    loading?: boolean;
    actionText?: string;
}

const Button: React.FC<IProps> = ({ canClick, loading, actionText }) => {

    return (
        <button className={`xl:text-lg font-medium focus:outline-none text-white xl:py-4  transition-colors ${canClick
            ? "bg-red-600 hover:bg-red-700"
            : "bg-gray-300 pointer-events-none"
            }`}>
            {loading ? "Loading..." : actionText}
        </button>
    );
};

export default Button;