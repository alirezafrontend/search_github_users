import StatsCard from "./StatsCard";

type StatsContainerProps = {
  totalRepo: number;
  followers: number;
  following: number;
  gists: number;
};

export default function StatsContainer(props: StatsContainerProps) {
  const { followers, following, totalRepo, gists } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8 text-[18px] font-bold">
      <StatsCard title="Total Repositories" count={totalRepo} />
      <StatsCard title="Followers" count={followers} />
      <StatsCard title="Following" count={following} />
      <StatsCard title="Gists" count={gists} />
    </div>
  );
}
