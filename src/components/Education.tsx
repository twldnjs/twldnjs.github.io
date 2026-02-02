import { Education as EducationType } from '@/types/portfolio';
import { Divider } from './ui/Divider';
import { Section } from './ui/Section';
import { FadeIn } from './FadeIn';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <Section title='Education.'>
      <Divider />
      <div className='flex flex-col gap-16 mb-[30px]'>
        {education.map((edu, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div key={index}>
              <h3 className='text-xl font-semibold'>{edu.institution}</h3>
              <p className='my-1'>{edu.period}</p>
              {edu.decription && <p className=''>{edu.decription}</p>}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
