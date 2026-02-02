import { Header } from '@/components/Header';
import { Introduction } from '@/components/Introduction';
import { WorkExperience } from '@/components/WorkExperience';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { portfolioData } from '@/data/portfolio-data';

export default function Home() {
  return (
    <div className='font-roboto'>
      <Header
        name={portfolioData.name}
        title={portfolioData.title}
        contact={portfolioData.contact}
      />

      <main className='flex flex-col gap-28 px-[90px]'>
        <Introduction introduction={portfolioData.introduction} />

        <WorkExperience experiences={portfolioData.workExperiences} />

        <Projects projects={portfolioData.projects} />

        <Education education={portfolioData.education} />
      </main>
    </div>
  );
}
