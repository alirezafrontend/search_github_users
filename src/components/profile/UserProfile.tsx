import { useQuery } from "@apollo/client/react";
import { GET_USER } from "../../queries";
import type { UserData } from "../../types";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import ForkedRepos from "../charts/ForkedRepos";
import PopularRepos from "../charts/PopularRepos";
import UsedLanguages from "../charts/UsedLanguages";

type UserProfileProps = {
  user: string;
};

export default function UserProfile({ user }: UserProfileProps) {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: user },
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!data) {
    return <h2>User Not Found</h2>;
  }

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div className="flex flex-col gap-3">
      <UserCard
        avatarUrl={avatarUrl}
        name={name}
        url={url}
        bio={bio}
      ></UserCard>
      <StatsContainer
        totalRepo={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PopularRepos repositories={repositories.nodes} />
          <UsedLanguages repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
}
