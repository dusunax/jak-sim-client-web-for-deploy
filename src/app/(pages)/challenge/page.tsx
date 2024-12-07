import Header from '@/components/layout/Header';
import PageLayout from '@/components/layout/PageLayout';

const Page = () => {
  return (
    <PageLayout
      header={
        <Header>
          <Header.Item>
            <Header.BoldText bold={'작심'} text={'님의 챌린지'} />
          </Header.Item>
        </Header>
      }
    >
      챌린지
    </PageLayout>
  );
};

export default Page;
