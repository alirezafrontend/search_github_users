import { Card, CardDescription, CardTitle } from "../ui/card";

type StatsCardProps = {
  title: string;
  count: number;
};

export default function StatsCard({ title, count }: StatsCardProps) {
  return (
    <Card>
      <div className="flex justify-between items-center px-4 py-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  );
}
