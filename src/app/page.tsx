import LineChart from "../components/LineChart";
import StatsCard from "../components/StatsCard";

export default function DashboardPage() {
  return (
    <main className="space-y-8">
      {/* Chart */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <LineChart />
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Volume" value="120M USD" />
        <StatsCard title="Market Cap" value="800B USD" />
        <StatsCard title="Supply" value="18.7M BTC" />
        <StatsCard title="Transactions" value="350K" />
      </div>
    </main>
  );
}
