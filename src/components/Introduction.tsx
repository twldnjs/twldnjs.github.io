import { FadeIn } from './FadeIn';

interface IntroductionProps {
  introduction: string;
}

export function Introduction({ introduction }: IntroductionProps) {
  return (
    <FadeIn>
      <section className='flex flex-col mt-6'>
        <p className='text-justify  font-medium leading-relaxed text-black'>
          {introduction.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < introduction.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      </section>
    </FadeIn>
  );
}
