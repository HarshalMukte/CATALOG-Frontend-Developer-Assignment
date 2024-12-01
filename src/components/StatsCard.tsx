type StatsCardProps = {
    title: string;
    value: string;
  };
  
  export default function StatsCard({ title, value }: StatsCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <div className="text-2xl font-semibold text-gray-800 mt-2">{value}</div>
      </div>
    );
  }
  