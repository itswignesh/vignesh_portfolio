import { HomeShell } from "@/components/HomeShell";

export default function Home() {
  return (
    <HomeShell
      variant="v1"
      introVariant="v2"
      aboutVariant="v1"
      defaultMode="light"
      showCloudBg={true}
      bodyClass="counter-scroll body-bg-item body-v1"
      preloaderDark={false}
    />
  );
}