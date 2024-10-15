import Greeting from "@/components/greeting";
import ProfilePicture from "@/components/profile-picture";

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-8 md:flex-row">
      <ProfilePicture />
      <Greeting />
    </div>
  );
}
