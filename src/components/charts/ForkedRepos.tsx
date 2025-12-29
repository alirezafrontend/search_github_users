import type { Repository } from "../../types";
import { forkedRepos } from "../../utils";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartConfig } from "../ui/chart";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const ForkedRepos = forkedRepos(repositories);


  const chartConfig = {
    forke: {
      label: "Forke",
      color: "#5eb",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="font-bold text-3xl mb-6 text-center">Popular Repos</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={ForkedRepos}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="repo" tickLine={false} tickMargin={10} />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-forke)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ForkedRepos;
