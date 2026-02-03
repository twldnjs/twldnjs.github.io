'use client';
import { Project as ProjectType } from '@/types/portfolio';
import { Badge } from './ui/Badge';
import { Divider } from './ui/Divider';
import { Section } from './ui/Section';
import { FadeIn } from './FadeIn';
import { motion } from 'framer-motion';

interface ProjectsProps {
  projects: ProjectType[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section title='Project.'>
      <Divider />
      <div className='flex flex-col gap-12 md:gap-24'>
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div
              key={index}
              className='flex flex-col gap-4 md:flex-row md:gap-0'
            >
              <div className='w-full md:w-1/5 mr-2'>
                <h3 className='text-xl font-semibold'>{project.name}</h3>
                <p className='my-2.5'>{project.period}</p>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-light text-black no-underline hover:underline'
                >
                  <p className='my-2.5'>github link</p>
                </a>
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <h4 className='text-l font-semibold my-2'>
                  {project.description}
                </h4>
                <div className='mb-3 flex flex-wrap gap-2'>
                  {project.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Badge>{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
                <ul className='list-disc pl-5'>
                  {project.features.map((feature, idx) => (
                    <li key={idx} className='pb-3'>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
