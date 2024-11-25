import Logo from "@/components/3d-logo";

export default function ProjectsPage() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <div className="flex h-full w-full flex-col gap-y-6">
        <Logo />
        <div className="flex flex-col items-center">
          <h2>Under Construction!</h2>
          <p>Coming Soon..</p>
        </div>
      </div>
    </div>
  );
}
