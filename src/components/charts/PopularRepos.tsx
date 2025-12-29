import type { Repository } from "../../types";
import { StarredRepos } from "../../utils";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartConfig } from "../ui/chart";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const starredRepos = StarredRepos(repositories);

  const chartConfig = {
    popular: {
      label: "Popular",
      color: "#8885eb",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="font-bold text-3xl mb-6 text-center">Popular Repos</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={starredRepos}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="repo" tickLine={false} tickMargin={10} />
          <YAxis dataKey="stars" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="stars" fill="var(--color-popular)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PopularRepos;
