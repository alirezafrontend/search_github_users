import type { Repository } from "../../types";
import { PopularLanguages } from "../../utils";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartConfig } from "../ui/chart";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const popularLang = PopularLanguages(repositories);

  const chartConfig = {
    language: {
      label: "Language",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="font-bold text-3xl mb-6 text-center">Used Languages</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={popularLang}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="language" tickLine={false} tickMargin={10} />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-language)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default UsedLanguages;
