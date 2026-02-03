'use client';
import { WorkExperience as WorkExperiecneType } from '@/types/portfolio';
import { Badge } from './ui/Badge';
import { Divider } from './ui/Divider';
import { Section } from './ui/Section';
import { FadeIn } from './FadeIn';
import { motion } from 'framer-motion';

interface WorkExperienceProps {
  experiences: WorkExperiecneType[];
}

const skillsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <Section title='Work Experience.'>
      <Divider />
      <div className='flex flex-col gap-12 md:gap-24'>
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div
              key={index}
              className='flex flex-col gap-4 md:flex-row md:gap-0'
            >
              {/* Left */}
              <div className='w-full md:w-1/5 mr-2'>
                <h3 className='text-xl font-semibold'>{exp.company}</h3>
                <p className='my-2.5'>{exp.position}</p>
                <p className='my-2.5 whitespace-pre-line '>{exp.period}</p>
              </div>

              {/* Right */}
              <div className='flex-1'>
                {exp.tagline ? (
                  <h3 className='text-xl font-semibold'>{exp.tagline}</h3>
                ) : null}
                <div className='mt-6 flex flex-col gap-16'>
                  {exp.projects.map((proj, projIndex) => (
                    <div
                      key={`${proj.title}-${projIndex}`}
                      className='flex flex-col gap-3'
                    >
                      {/* Project header */}
                      <div>
                        <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                          <h4 className='text-lg font-semibold'>
                            {proj.title}
                          </h4>
                          <div className='text-justify text-l font-medium  '>
                            | {proj.period}
                          </div>
                        </div>

                        {proj.summary ? (
                          <p className='text-l font-semibold my-2'>
                            {proj.summary}
                          </p>
                        ) : null}
                      </div>

                      {/* Skills */}
                      {proj.skills?.length ? (
                        <motion.div
                          className='flex flex-wrap gap-2'
                          variants={skillsContainer}
                          initial='hidden'
                          whileInView='show'
                          viewport={{ once: false, amount: 0.2 }}
                        >
                          {proj.skills.map((skill) => (
                            <motion.div key={skill} variants={skillItem}>
                              <Badge>{skill}</Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : null}

                      {/* Achievements */}
                      {proj.achievements?.length ? (
                        <ul className='list-disc pl-5'>
                          {proj.achievements.map((achievement, idx) => (
                            <li key={`${achievement}-${idx}`} className='pb-3'>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {/* Links (optional) */}
                      {proj.links?.length ? (
                        <div className='flex flex-wrap gap-3'>
                          {proj.links.map((link, idx) => (
                            <a
                              key={`${link.href}-${idx}`}
                              href={link.href}
                              target='_blank'
                              rel='noreferrer'
                              className='text-sm underline underline-offset-4 text-neutral-700 hover:text-neutral-900'
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
