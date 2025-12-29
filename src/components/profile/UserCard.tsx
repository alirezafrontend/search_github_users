import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  url: string;
  bio: string;
};

export default function UserCard({ avatarUrl, name, url, bio }: UserCardProps) {
  return (
    <Card className="w-full lg:w-7/12 xl:w-6/12 mb-8">
      <CardHeader className="flex gap-4 items-center">
        <img
          className="w-36 h-36 rounded object-cover"
          src={avatarUrl}
          alt={name}
        />
        <div className="w-full">
          <CardTitle className="text-2xl">{name}</CardTitle>
          <CardDescription className="text-[14px]">{bio || "Web Developer"}</CardDescription>
          <Button asChild size="sm" className="w-1/3 mt-2">
            <a href={url} target="_blank">
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
