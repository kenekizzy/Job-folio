import React from 'react';

const StatsCard = ({ stat }: { stat: { icon: React.ElementType; title: string; value: string; change: string; color: string; } }) => {
    // const IconComponent = stat.icon;
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
          </div>
          <div className={`bg-${stat.color}-50 p-3 rounded-lg`}>
            {/* <IconComponent className={`text-2xl text-${stat.color}-600`} /> */}
          </div>
        </div>
      </div>
    );
  };

  export default StatsCard;