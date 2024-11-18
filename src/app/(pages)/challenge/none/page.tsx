import HeaderBackButton from "@/components/layout/HeaderBackButton";
import PageLayout from "@/components/layout/PageLayout";
import ChallengeLinkButtonBox from "./_components/ChallengeLinkButtonBox";

const Page = () => {
  return (
    <PageLayout header={{ title: "챌린지", left: <HeaderBackButton /> }} className="bg-v1-background">
      <div className="flex flex-col h-full justify-between px-6 pb-16">
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-2xl text-v1-text-primary-300 break-keep text-center">아직 시작한 챌린지가 없어요</p>
        </div>
        <ChallengeLinkButtonBox />
      </div>
    </PageLayout>
  );
};

export default Page;
